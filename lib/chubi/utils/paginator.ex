defmodule Y1Base.Paginator do
  import Ecto.Query
  alias Chubi.Repo
  defstruct entries: [], page: 1, size: 0, total: 0, entry_count: 0

  def new(query, params) do
    page_number = (Map.get(params, "page") || 1) |> to_int
    page_size = (Map.get(params, "size") || 10) |> to_int

    entry_count = count_entry(query)

    %__MODULE__{
      entries: entries(query, page_number, page_size),
      page: page_number,
      size: page_size,
      entry_count: entry_count,
      total: Float.ceil(entry_count / page_size) |> round()
    }
  end

  defp entries(query, page_number, page_size) do
    offset = page_size * (page_number - 1)

    query
    |> limit(^page_size)
    |> offset(^offset)
    |> Repo.all()
  end

  defp to_int(i) when is_integer(i), do: i

  defp to_int(s) when is_binary(s) do
    case Integer.parse(s) do
      {i, _} -> i
      :error -> :error
    end
  end

  defp count_entry(query) do
    query
    |> exclude(:order_by)
    |> exclude(:preload)
    |> exclude(:select)
    |> select([e], count(e))
    |> Repo.one()
  end
end
