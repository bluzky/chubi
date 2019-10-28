defmodule Y1Base.Search do
  import Ecto.Query

  def apply(query, search_term) when search_term in [[], "", nil], do: query

  def apply(query, search_term) do
    where(
      query,
      fragment(
        "tsv @@ plainto_tsquery('simple', vn_unaccent(?))",
        ^search_term
      )
    )
  end
end
