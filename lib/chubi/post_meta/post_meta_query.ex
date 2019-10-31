defmodule Chubi.PostMeta.PostMetaQuery do
  use Chubi, :query
  alias Chubi.PostMeta.{Tag, Category, PostTag, PostCategory}
  alias Chubi.Content.Post

  def tag_query do
    Tag
  end

  def filter_tag(filters \\ %{}) do
    tag_query
    |> Filter.apply(filters)
  end

  def tag_with_post_count(query) do
    tag_count_query =
      PostTag
      |> join(:inner, [pt], p in Post, on: pt.post_id == p.id and p.is_draft == false)
      |> group_by([pt, p], pt.tag_id)
      |> select([pt], %{tag_id: pt.tag_id(), post_count: count(pt.post_id)})

    query
    |> join(:inner, [t], p in subquery(tag_count_query), on: t.id == p.tag_id)
    |> select([t, p], %{tag: t, post_count: p.post_count})
  end

  def order_by_post_count(query) do
    query
    |> order_by([t, p], desc: p.post_count)
  end

  def order_by_name(query) do
    query
    |> order_by(asc: :name)
  end

  def category_query do
    Category
  end

  def filter_category(filters \\ %{}) do
    category_query
    |> Filter.apply(filters)
  end

  def category_with_post_count(query) do
    category_count_query =
      PostCategory
      |> join(:inner, [pt], p in Post, on: pt.post_id == p.id and p.is_draft == false)
      |> group_by([pt], pt.category_id)
      |> select([pt], %{category_id: pt.category_id(), post_count: count(pt.post_id)})

    query
    |> join(:inner, [t], p in subquery(category_count_query), on: t.id == p.category_id)
    |> select([t, p], %{category: t, post_count: p.post_count})
  end
end
