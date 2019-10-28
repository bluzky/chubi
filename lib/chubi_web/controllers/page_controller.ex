defmodule ChubiWeb.PageController do
  use ChubiWeb, :controller

  def index(conn, _params) do
    render(conn, "index.html")
  end
end
