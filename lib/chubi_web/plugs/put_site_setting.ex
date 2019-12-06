defmodule ChubiWeb.Plugs.PutSiteSetting do
  import Plug.Conn

  def init(options), do: options

  def call(conn, _opts) do
    env =
      Application.get_all_env(:chubi)
      |> Enum.into(%{})

    theme = get_session(conn, :theme)

    Process.put(:theme, theme || env.theme)

    conn
    |> assign(:theme, theme || env.theme)
    |> assign(:locale, env.locale)
  end
end
