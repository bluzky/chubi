defmodule ChubiWeb.PageController do
  use ChubiWeb, :controller
  alias Chubi.Content
  alias ChubiWeb.ControllerHelpers

  def index(conn, _params) do
    render(conn, "index.html")
  end

  def show(conn, %{"slug" => slug}) do
    page = Content.get_page_by!(slug: slug)

    ControllerHelpers.render_page(conn, page: page)
  end
end
