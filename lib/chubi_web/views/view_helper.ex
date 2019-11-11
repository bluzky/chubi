defmodule ChubiWeb.ViewHelpers do
  import Phoenix.Controller,
    only: [
      current_path: 1,
      current_path: 2
    ]

  # code only functions
  def format_date(date, format \\ "{0M}/{0D}/{YYYY}") do
    format_datetime(date, format)
  end

  def format_time(date, format \\ "{h24}:{m}") do
    format_datetime(date, format)
  end

  def format_datetime(
        date,
        format \\ "{0M}/{0D}/{YYYY} {h24}:{m}"
      )

  def format_datetime(nil, _) do
    nil
  end

  def format_datetime(date, format) do
    date
    |> Timex.to_datetime()
    |> Timex.format!(format)
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
