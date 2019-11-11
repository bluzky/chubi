defmodule ChubiWeb.PartialView do
  use ChubiWeb, :view

  require Ecto.Query
  alias Chubi.Repo
  alias Chubi.PostMeta.PostMetaQuery

  def list_top_categories(limit \\ 5) do
    PostMetaQuery.category_query()
    |> PostMetaQuery.category_with_post_count()
    |> PostMetaQuery.order_by_post_count()
    |> Ecto.Query.limit(^limit)
    |> Repo.all()
  end

  def list_top_tags(limit \\ 5) do
    PostMetaQuery.tag_query()
    |> PostMetaQuery.tag_with_post_count()
    |> PostMetaQuery.order_by_post_count()
    |> Ecto.Query.limit(^limit)
    |> Repo.all()
  end
end
