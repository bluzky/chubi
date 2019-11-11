defmodule ChubiWeb.TagController do
  use ChubiWeb, :controller

  alias Chubi.Content
  alias Chubi.Content.PostQuery
  alias Chubi.PostMeta
  alias Chubi.PostMeta.PostMetaQuery
  alias Chubi.Repo
  alias ChubiWeb.ControllerHelpers

  def index(conn, params) do
    paginator =
      PostMetaQuery.tag_query()
      |> PostMetaQuery.tag_with_post_count()
      |> PostMetaQuery.order_by_post_count()
      |> Chubi.Paginator.new(params)

    render(conn, "list.html", items: paginator.entries, paginator: paginator)
  end

  def show(conn, %{"slug" => tag_slug} = params) do
    tag = PostMeta.get_tag_by!(slug: tag_slug)

    paginator =
      PostQuery.published_posts()
      |> PostQuery.with_tag(tag_slug)
      |> Chubi.Paginator.new(params)

    posts =
      paginator.entries
      |> Repo.preload([:categories, :tags])

    ControllerHelpers.render_first_match(
      conn,
      ["tag_#{tag.slug}.html", "single.html"],
      posts: posts,
      paginator: paginator,
      tag: tag
    )
  end
end
