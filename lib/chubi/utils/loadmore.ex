defmodule Y1Base.Loadmore do
  import Ecto.Query
  alias Y1Base.Repo

  @default_values %{limit: 20, offset: 0, max_id: nil}
  def default_values, do: @default_values

  @default_types %{
    limit: :integer,
    max_id: :integer,
    offset: :integer
  }

  defp parse(params) do
    {@default_values, @default_types}
    |> Ecto.Changeset.cast(params, Map.keys(@default_values))
    |> Ecto.Changeset.apply_changes()
  end

  @doc """
  Load more query with give paging param object
  """
  def new(query, token \\ "") do
    params =
      (token || "")
      |> Base.url_decode64!(padding: false)
      |> URI.decode_query()
      |> parse()

    # query =
    #   if is_nil(params.max_id) do
    #     query
    #   else
    #     where(query, [i], i.id < ^params.max_id)
    #   end

    entries =
      query
      |> limit(^params.limit)
      |> offset(^params.offset)
      |> Repo.all()

    %{
      entries: entries,
      next_page_token: build_token(entries, params)
    }
  end

  defp build_token(entries, params) do
    if length(entries) == params.limit do
      params =
        if is_nil(params.max_id) do
          ids = Enum.map(entries, & &1.id)
          max_id = Enum.max(ids)
          Map.put(params, :max_id, max_id)
        else
          params
        end

      params = Map.put(params, :offset, params.offset + length(entries))

      params
      |> URI.encode_query()
      |> Base.url_encode64(padding: false)
    end
  end
end
