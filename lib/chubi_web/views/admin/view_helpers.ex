defmodule ChubiWeb.Admin.ViewHelpers do
  use Phoenix.HTML
  import ChubiWeb.Gettext

  # code only functions
  def format_date(date, format \\ "{0M}/{0D}/{YYYY}") do
    format_datetime(date, format)
  end

  def format_time(date, format \\ "{h24}:{m}") do
    format_datetime(date, format)
  end

  def format_datetime(nil, _format) do
    nil
  end

  def format_datetime(date, format) do
    Timex.format!(date, format)
  end

  @spec nav_state(Plug.Conn.t(), atom, list) :: any
  def nav_state(conn, controller, actions) when is_list(actions) do
    request_controller = conn.private.phoenix_controller

    if request_controller == controller and conn.private.phoenix_action in actions do
      "active"
    end
  end

  @spec nav_state(Plug.Conn.t(), list) :: any
  def nav_state(conn, controllers) do
    controller = conn.private.phoenix_controller

    if controller in controllers do
      "active"
    end
  end

  def component(name, assigns) do
    Phoenix.View.render(ChubiWeb.Admin.ComponentView, name, assigns)
  end
end
