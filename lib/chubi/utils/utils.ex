defmodule Y1Base.Utils do
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

  def format_date(date, format \\ "{0D}/{0M}/{YYYY}") do
    format_datetime(date, format)
  end

  def date_for_old_data(start_date, end_date) do
    ### get past date data for comparasion change
    end_date_past = start_date

    start_date_past =
      (Timex.to_unix(end_date_past) - (Timex.to_unix(end_date) - Timex.to_unix(start_date)))
      |> Timex.from_unix()

    {start_date_past, end_date_past}
  end

  def parse_daterange(daterange_str, separator \\ "-", format \\ "{0M}/{0D}/{YYYY}") do
    dates =
      String.split(daterange_str || "", separator, trim: true)
      |> Enum.map(&String.trim/1)
      |> Enum.map(fn str ->
        str
        |> Timex.parse(format)
        |> case do
          {:ok, dt} -> dt
          _ -> nil
        end
      end)

    if match?([start_date, end_date], dates) do
      [start_date, end_date] = dates

      end_date =
        if end_date do
          Timex.end_of_day(end_date)
        end

      {start_date, end_date}
    else
      {nil, nil}
    end
  end

  def query_map(object, paths, default \\ nil) when is_map(object) or is_list(object) do
    Enum.reduce(paths, object, fn item, acc ->
      cond do
        is_nil(acc) -> nil
        is_integer(item) -> Enum.at(acc, item)
        is_atom(item) or is_binary(item) -> Map.get(acc, item)
        true -> raise ArgumentError, message: "Bad path"
      end
    end)
  end

  def utc_afternoon_working_hours do
    %{
      start_at: Time.from_erl!({6, 0, 0}),
      end_at: Time.from_erl!({11, 0, 0})
    }
  end

  def user_setting(key) do
    Process.get(:user_app_settings, %{})
    |> Map.get(key)
  end

  def app_setting(key) do
    Process.get(:app_settings, %{})
    |> Map.get(key)
  end

  def user_locale() do
    user_setting(:language) || "vi"
  end

  def company_timezone() do
    app_setting(:timezone) || "Etc/UTC"
  end

  def to_local_datetime(datetime) do
    Timex.to_datetime(datetime, company_timezone)
  end
end
