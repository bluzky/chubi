defmodule ChubiWeb.PageController do
  use ChubiWeb, :controller
  alias Chubi.Content
  alias Chubi.Content.PostQuery
  alias ChubiWeb.ControllerHelpers
  alias Chubi.Repo

  def index(conn, params) do
    paginator = Content.paginate_published_posts(params)

    ControllerHelpers.render_first_match(conn, ["index.html"],
      posts: paginator.entries,
      paginator: paginator
    )
  end

  def show(conn, %{"slug" => slug}) do
    page = Content.get_page_by!(slug: slug)

    ControllerHelpers.render_page(conn, page: page)
  end
end
