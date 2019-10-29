defmodule Chubi.Content.PostQuery do
  use Chubi, :query
  alias Chubi.Content.{Post, Page}
  alias Chubi.PostMeta.{Tag, Category}

  def post_query() do
    Post
    |> order_by(desc: :published_at)
  end

  def filter_post(filters \\ %{}) do
    post_query
    |> Filter.apply(filters)
  end

  def all_post() do
    post_query
  end

  def with_tag(query, tag) when is_binary(tag) do
    query
    |> join(:inner, [p], t in assoc(p, :tags))
    |> where([p, t], t.slug == ^tag)
  end

  def with_tag(query, tags) when is_list(tags) do
    query
    |> join(:inner, [p], t in assoc(p, :tags))
    |> where([p, t], t.slug in ^tags)
  end

  def with_category(query, category) when is_binary(category) do
    query
    |> join(:inner, [p], t in assoc(p, :categories))
    |> where([p, t], t.slug == ^category)
  end

  def with_category(query, categories) when is_list(categories) do
    query
    |> join(:inner, [p], t in assoc(p, :categories))
    |> where([p, t], t.slug in ^categories)
  end

  def published_posts do
    post_query
    |> Filter.apply(is_draft: false)
  end

  def page_query() do
    Page
    |> order_by(desc: :inserted_at)
  end
end
