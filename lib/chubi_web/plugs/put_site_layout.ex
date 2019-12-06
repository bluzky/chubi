defmodule ChubiWeb.Plugs.PutSiteLayout do
  def init(options), do: options

  def call(conn, _opts) do
    conn
    |> Phoenix.Controller.put_layout(
      {ChubiWeb.ThemeHelpers.current_theme_module("LayoutView"), "app.html"}
    )
  end
end
