defmodule ChubiWeb.Plugs.PutBlogInfo do
  import Plug.Conn

  def init(options), do: options

  def call(conn, _opts) do
    blog_info =
      Application.get_env(:chubi, :blog_info, [])
      |> Enum.into(Map.new())

    conn
    |> assign(:blog_info, blog_info)
  end
end
