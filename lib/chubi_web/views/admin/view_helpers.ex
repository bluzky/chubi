defmodule ChubiWeb.Admin.ViewHelpers do
  use Phoenix.HTML
  import ChubiWeb.Gettext

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

  def format_number(nil) do
    nil
  end

  def format_number(number) do
    number
    |> Integer.to_string()
    |> String.reverse()
    |> String.split(~r/.{3}/, include_captures: true, trim: true)
    |> Enum.join(".")
    |> String.reverse()
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

  @doc """
  render list of option and mark selected option
  This is used only for select
  """
  def render_options(options, current_value, opts \\ [add_default: true]) do
    options =
      if opts[:add_default] do
        [{gettext("All"), " "}] ++ options
      else
        options
      end

    current_value =
      if current_value in [nil, ""] do
        " "
      else
        current_value
      end

    html =
      Enum.map(options, fn {label, value} ->
        selected =
          cond do
            to_string(value) == to_string(current_value) ->
              "selected"

            is_list(current_value) and to_string(value) in current_value ->
              "selected"

            true ->
              false
          end

        """
        <option value="#{value}" #{selected}>#{label}</option>
        """
      end)
      |> Enum.join("")

    raw(html)
  end

  def enum_source(items) do
    Enum.map(items, fn x -> {Y1Base.translate(x), x} end)
  end

  def list_to_source(items, opts \\ []) do
    defaults = [key: :name, v_key: :id, default: gettext("All")]
    opts = Keyword.merge(defaults, opts || [])
    source = Enum.map(items, &{Map.get(&1, opts[:key]), Map.get(&1, opts[:v_key])})

    [{opts[:default], nil}] ++ source
  end

  def translate(text) do
    Y1Base.translate(text)
  end

  @doc """
  Render key value template

  Ex:
  iex> safe_to_string prop_tag("Name", "Dzung")
  #or
  iex> safe_to_string prop_tag("Name") do
    "Dzung"
  end

  #output:
  # <div class="field">
  #   <div class="field-name">Name</div>
  #   <div class="field-value">Dzung</div>
  # </div>

  """

  def prop_tag(label, do: block) do
    prop_tag(label, block)
  end

  def prop_tag(key, value, opts \\ []) do
    content_class = opts[:class] || ""

    content_tag :div, class: "field" do
      [
        content_tag(:div, key, class: "field-name"),
        content_tag(:div, value, class: "field-value " <> content_class)
      ]
    end
  end

  @doc """
  Access object property and render using key_value template
  """

  def object_prop_tag(object, key, label, opts \\ [])

  def object_prop_tag(object, key, label, opts) when is_list(key) do
    {default, _props} = Keyword.pop(opts, :default)

    key = Enum.map(key, &Access.key(&1))
    value = get_in(object, key) || default

    prop_tag(label, value, opts)
  end

  def object_prop_tag(object, key, label, opts) do
    object_prop_tag(object, [key], label, opts)
  end

  @doc """
  render custom component
  """

  def custom_tag(tag, assigns) do
    Phoenix.View.render(Y1View.ComponentView, "#{tag}.html", assigns)
  end

  def sort_list_by_date(module_list, field, sort_type \\ :gt) do
    module_list
    |> Enum.sort(fn m1, m2 ->
      DateTime.compare(Map.get(m1, field), Map.get(m2, field)) == sort_type
    end)
  end

  def component(name, assigns) do
    Phoenix.View.render(ChubiWeb.Admin.ComponentView, name, assigns)
  end
end
