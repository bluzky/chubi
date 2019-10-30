defmodule ChubiWeb.ViewHelpers do
  use Phoenix.View,
    root: "lib/chubi_web/templates",
    namespace: ChubiWeb

  import Phoenix.Controller,
    only: [
      view_module: 1,
      view_template: 1,
      current_url: 1,
      current_url: 2,
      current_path: 1,
      current_path: 2
    ]

  # code only functions
  def format_date(date, format \\ "{0D}/{0M}/{YYYY}") do
    format_datetime(date, format)
  end

  def format_time(date, format \\ "{h24}:{m}") do
    format_datetime(date, format)
  end

  def format_datetime(
        date,
        format \\ "{h24}:{m} {0D}/{0M}/{YYYY}",
        timezone \\ "Asia/Ho_Chi_Minh"
      )

  def format_datetime(nil, _, _) do
    nil
  end

  def format_datetime(date, format, timezone) do
    date
    |> Timex.to_datetime()
    |> Timex.to_datetime(timezone)
    |> Timex.format!(format)
  end

  def partial(name, assigns) do
    render(ChubiWeb.LayoutView, name, assigns)
  end

  def include(name, assigns) do
    render(view_module(assigns.conn), name, assigns)
  end

  def next_page_path(conn, paginator) do
    if paginator.has_next? do
      current_path(
        conn,
        Map.merge(conn.params, %{"page" => paginator.page + 1, "size" => paginator.size})
      )
    end
  end

  def prev_page_path(conn, paginator) do
    if paginator.has_prev? do
      current_path(
        conn,
        Map.merge(conn.params, %{"page" => paginator.page - 1, "size" => paginator.size})
      )
    end
  end
end
