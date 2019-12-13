defmodule ChubiWeb.Admin.SettingController do
  use ChubiWeb, :controller

  def set_theme(conn, %{"theme" => theme}) do
    conn
    |> put_session(:theme, theme)
    |> redirect(to: Routes.admin_post_path(conn, :index))
  end
end
