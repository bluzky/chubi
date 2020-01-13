defmodule ChubiWeb.PostController do
  use ChubiWeb, :controller

  alias Chubi.Content
  alias ChubiWeb.ControllerHelpers

  def index(conn, params) do
    paginator = Content.paginate_published_posts(params)

    ControllerHelpers.render(conn, "list.html", posts: paginator.entries, paginator: paginator)
  end

  def show(conn, %{"slug" => slug}) do
    post = Content.get_post_by!(slug: slug)

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
