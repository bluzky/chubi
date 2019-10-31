defmodule ChubiWeb.TagController do
  use ChubiWeb, :controller

  alias Chubi.Content
  alias Chubi.Content.PostQuery
  alias Chubi.Content.Post
  alias Chubi.PostMeta
  alias Chubi.Repo
  alias ChubiWeb.ControllerHelpers

  def index(conn, params) do
    paginator =
      PostQuery.published_posts()
      |> Chubi.Paginator.new(params)

    posts =
      paginator.entries
      |> Repo.preload([:categories, :tags])

    render(conn, "list.html", posts: posts, paginator: paginator)
  end

  def show(conn, %{"slug" => slug} = params) do
    tag = PostMeta.get_tag_by!(slug: slug)

    paginator =
      PostQuery.published_posts()
      |> PostQuery.with_tag(slug)
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
