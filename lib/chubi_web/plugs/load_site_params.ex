defmodule ChubiWeb.Plugs.LoadSiteParams do
  import Plug.Conn

  def init(options), do: options

  def call(conn, _opts) do
    site_params =
      Application.get_env(:chubi, :site_params, [])
      |> Enum.into(Map.new())

    conn
    |> assign(:site_params, site_params)
  end
end
