defmodule ChubiWeb.PreviewController do
  use ChubiWeb, :controller
  alias ChubiWeb.ControllerHelpers
  alias Chubi.Content
  alias Chubi.Repo

  def show_post(conn, %{"id" => id}) do
    post =
      Content.get_post!(id)
      |> Repo.preload([:categories, :tags])

    conn
    |> put_view(ChubiWeb.PostView)
    |> ControllerHelpers.render_first_match(
      ["post_#{post.slug}.html", "single.html"],
      post: post
    )
  end

  def show_page(conn, %{"id" => id}) do
    page = Content.get_page!(id)

    conn
    |> put_view(ChubiWeb.PageView)
    |> ControllerHelpers.render_page(page: page)
  end
end
