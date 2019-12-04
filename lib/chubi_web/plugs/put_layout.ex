defmodule ChubiWeb.Plugs.PutBlogTheme do
  import Plug.Conn

  def init(options), do: options

  def call(conn, _opts) do
    conn
    |> Phoenix.Controller.put_layout(
      {ChubiWeb.ThemeHelpers.theme_module("LayoutView"), "app.html"}
    )
  end
end
