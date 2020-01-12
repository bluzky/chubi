defmodule ChubiWeb.Themes.Wordify.PartialView do
  use ChubiWeb.Themes.Wordify, :view

  require Ecto.Query
  alias Chubi.Repo
  alias Chubi.PostMeta
  alias Chubi.Content
  alias Chubi.Content.PostQuery

  def list_top_categories(limit \\ 5) do
    PostMeta.list_categories_with_post_count()
    |> Enum.take(limit)
  end

  def list_top_tags(limit \\ 5) do
    PostMeta.list_tags_with_post_count()
    |> Enum.take(limit)
  end

  def list_featured_posts(limit \\ 5) do
    Content.list_posts(%{draft: false})
    |> Enum.filter(fn item -> Enum.any?(item.tags, &(&1.slug == "featured")) end)
    |> Enum.take(limit)
  end
end
