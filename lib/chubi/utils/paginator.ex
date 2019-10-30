defmodule Chubi.Paginator do
  import Ecto.Query
  alias Chubi.Repo

  defstruct entries: [],
            page: 1,
            size: 10,
            total_page: 1,
            entry_count: 0,
            has_next?: false,
            has_prev?: false

  def new(query, params) do
    params = parse_paging_params(params)

    entry_count = count_entry(query)

    paginator = %__MODULE__{
      entries: entries(query, params.page, params.size),
      page: params.page,
      size: params.size,
      entry_count: entry_count,
      total_page: Float.ceil(entry_count / params.size) |> round()
    }

    Map.merge(paginator, %{
      has_next?: paginator.page < paginator.total_page,
      has_prev?: paginator.page > 1
    })
  end

  def parse_paging_params(params) do
    types = %{page: :integer, size: :integer}

    changeset =
      {%__MODULE__{}, types}
      |> Ecto.Changeset.cast(params, Map.keys(types))
      |> Ecto.Changeset.validate_number(:page, greater_than_or_equal_to: 1)
      |> Ecto.Changeset.validate_number(:size, greater_than_or_equal_to: 1)
      |> Ecto.Changeset.apply_changes()
  end

  defp entries(query, page_number, page_size) do
    offset = page_size * (page_number - 1)

    query
    |> limit(^page_size)
    |> offset(^offset)
    |> Repo.all()
  end

  defp count_entry(query) do
    query
    |> exclude(:order_by)
    |> exclude(:preload)
    |> exclude(:select)
    |> select([e], count(e))
    |> Repo.one()
  end

  def has_next(paginator) do
    paginator.page < paginator.total
  end

  def has_prev(paginator) do
    paginator.page > 1
  end
end
