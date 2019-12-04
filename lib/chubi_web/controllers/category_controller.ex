defmodule ChubiWeb.CategoryController do
  use ChubiWeb, :controller

  alias Chubi.Content.PostQuery
  alias Chubi.PostMeta.PostMetaQuery
  alias Chubi.PostMeta
  alias Chubi.Repo
  alias ChubiWeb.ControllerHelpers

  def index(conn, params) do
    paginator =
      PostMetaQuery.category_query()
      |> PostMetaQuery.category_with_post_count()
      |> PostMetaQuery.order_by_post_count()
      |> Chubi.Paginator.new(params)

    ControllerHelpers.render(conn, "list.html",
      items: paginator.entries,
      paginator: paginator
    )
  end

  def show(conn, %{"slug" => category_slug} = params) do
    category = PostMeta.get_category_by!(slug: category_slug)

    paginator =
      PostQuery.published_posts()
      |> PostQuery.with_category(category_slug)
      |> Chubi.Paginator.new(params)

    posts =
      paginator.entries
      |> Repo.preload([:categories, :tags])

    ControllerHelpers.render_first_match(
      conn,
      ["category_#{category.slug}.html", "single.html"],
      posts: posts,
      paginator: paginator,
      category: category
    )
  end
end
