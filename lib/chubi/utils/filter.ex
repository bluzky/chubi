defmodule Chubi.Filter do
  @moduledoc """
  Filters Ecto query results by params provided.

  Author: Vince Urag
  www.codesforbreakfast.com
  """

  import Ecto.Query
  alias Ecto.Changeset

  @doc """
  schema is a list of tuple {name, type, default_value}
  """
  def parse(schema, params) when is_list(schema) do
    types =
      Enum.map(schema, fn {name, type, _} -> {name, type} end)
      |> Enum.into(%{})

    data =
      Enum.map(schema, fn {name, _, data} -> {name, data} end)
      |> Enum.into(%{})

    params =
      Enum.map(params, fn {k, v} -> {k, trim_recursive(v)} end)
      |> Enum.into(%{})

    Changeset.cast({data, types}, params, Map.keys(types))
    |> Changeset.apply_changes()
  end

  defp trim_recursive(elems) when is_list(elems) do
    Enum.map(elems, fn elem ->
      trim_recursive(elem)
    end)
  end

  defp trim_recursive(%{:__struct__ => _x} = elems), do: elems

  defp trim_recursive(elems) when is_map(elems) do
    Enum.map(elems, fn {k, v} ->
      {k, trim_recursive(v)}
    end)
    |> Enum.into(%{})
  end

  defp trim_recursive(elem) do
    cond do
      is_binary(elem) -> String.trim(elem)
      true -> elem
    end
  end

  @doc """
  Apply filter on multiple column

  Example:
  %{
    id: 10,
    not: %{
      type: "work"
    },
    or: %{
      team_id: 10,
      and: %{
        team_id: 11,
        role: "manager"
      }
    }
  }

  # id = 10 and not (type = "work") and (team_id = 10 or (team_id = 11 and role = "manager" ))
  """
  @spec apply(Ecto.Query.t(), keyword() | map(), keyword()) :: Ecto.Query.t()
  def apply(query, filters, opts \\ []) when is_list(filters) or is_map(filters) do
    skip_nil = opts[:skip_nil] || true
    skip_empty = opts[:skip_empty] || true

    filters =
      Enum.into(filters, %{})
      |> Map.delete(:keyword)

    # clean filters
    filters =
      Enum.filter(filters, fn {_k, v} ->
        cond do
          skip_nil -> not is_nil(v)
          skip_empty -> not (v in ["", [], %{}])
          true -> true
        end
      end)

    # build query
    d_query =
      filters
      |> Enum.reduce(true, fn {key, val}, acc ->
        ft = filter(key, val)

        if ft do
          dynamic([q], ^acc and ^ft)
        else
          acc
        end
      end)

    where(query, [q], ^d_query)
  end

  @doc """
  Apply filter on single column

  If filter value is list, filter row that match any value in the list
  """

  def filter(:and, filters) when is_map(filters) or is_list(filters) do
    Enum.reduce(filters, true, fn {key, val}, acc ->
      ft = filter(key, val)

      if ft do
        dynamic([q], ^acc and ^ft)
      else
        acc
      end
    end)
  end

  def filter(:or, filters) when is_map(filters) or is_list(filters) do
    Enum.reduce(filters, false, fn {key, val}, acc ->
      ft = filter(key, val)

      if ft do
        dynamic([q], ^acc or ^ft)
      else
        acc
      end
    end)
  end

  def filter(:not, filters) when is_map(filters) or is_list(filters) do
    d_query =
      Enum.reduce(filters, true, fn {key, val}, acc ->
        ft = filter(key, val)

        if ft do
          dynamic([q], ^acc and ^ft)
        else
          acc
        end
      end)

    dynamic([q], not (^d_query))
  end

  # search multiple columns
  def filter(:search_text, {columns, value}) when is_list(columns) do
    search_str = "%#{value}%"

    if value in ["", nil] do
      nil
    else
      Enum.reduce(columns, false, fn fieldname, acc ->
        dynamic([q], ilike(field(q, ^fieldname), ^search_str) or ^acc)
      end)
    end
  end

  def filter(:search_text, {columns, value}) do
    filter(:search_text, {[columns], value})
  end

  def filter(:in, {_fieldname, nil}) do
    nil
  end

  def filter(:in, {fieldname, value}) do
    dynamic([q], ^value in field(q, ^fieldname))
  end

  def filter(fieldname, nil) do
    dynamic([q], is_nil(field(q, ^fieldname)))
  end

  def filter(fieldname, values) when is_list(values) do
    dynamic([q], field(q, ^fieldname) in ^values)
  end

  def filter(_fieldname, {_op, nil}) do
    nil
  end

  def filter(fieldname, {:lt, value}) do
    dynamic([q], field(q, ^fieldname) < ^value)
  end

  def filter(fieldname, {:le, value}) do
    dynamic([q], field(q, ^fieldname) <= ^value)
  end

  def filter(fieldname, {:gt, value}) do
    dynamic([q], field(q, ^fieldname) > ^value)
  end

  def filter(fieldname, {:ge, value}) do
    dynamic([q], field(q, ^fieldname) >= ^value)
  end

  def filter(fieldname, {:date_range, {from_date, to_date}}) do
    filter(:and, [
      {fieldname, {:ge, from_date}},
      {fieldname, {:le, to_date}}
    ])
  end

  def filter(fieldname, value) do
    dynamic([q], field(q, ^fieldname) == ^value)
  end

  @doc """
  Search text on multiple column
  """
  def search(query, _columns, value) when value in ["", nil], do: query

  def search(query, columns, value) when is_list(columns) do
    search_str = "%#{value}%"

    dynamic_query =
      Enum.reduce(columns, false, fn fieldname, d_query ->
        dynamic([q], ilike(field(q, ^fieldname), ^search_str) or ^d_query)
      end)

    query |> where(^dynamic_query)
  end

  def search(query, fieldname, value) do
    search(query, [fieldname], value)
  end
end
