defmodule ChubiWeb.PostController do
  use ChubiWeb, :controller

  alias Chubi.Content
  alias Chubi.Content.PostQuery
  alias Chubi.Content.Post
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

  def show(conn, %{"slug" => slug}) do
    post =
      Content.get_post_by!(slug: slug)
      |> Repo.preload([:categories, :tags])

    conn
    |> assign(:seo, %{
      title: post.title,
      description: String.slice(Floki.text(post.html_content), 0, 200),
      image: post.cover
    })
    |> ControllerHelpers.render_first_match(
      ["post_#{post.slug}.html", "single.html"],
      post: post
    )
  end
end
