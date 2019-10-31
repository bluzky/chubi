defmodule ChubiWeb.PageController do
  use ChubiWeb, :controller
  alias Chubi.Content
  alias Chubi.Content.PostQuery
  alias ChubiWeb.ControllerHelpers
  alias Chubi.Repo

  def index(conn, params) do
    paginator =
      PostQuery.published_posts()
      |> Chubi.Paginator.new(params)

    posts =
      paginator.entries
      |> Repo.preload([:categories, :tags])

    render(conn, "index.html", posts: posts, paginator: paginator)
  end

  def show(conn, %{"slug" => slug}) do
    page = Content.get_page_by!(slug: slug)

    ControllerHelpers.render_page(conn, page: page)
  end
end
