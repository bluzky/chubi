defmodule ChubiWeb.Admin.InputHelpers do
  use Phoenix.HTML
  require Logger

  def input(form, field, opts \\ []) do
    type = opts[:using] || Phoenix.HTML.Form.input_type(form, field)

    wrapper_opts = [class: "form-group"]
    label_opts = [class: "control-label"]
    input_opts = [class: "#{opts[:class] || "form-control"} #{input_state_class(form, field)}"]

    validations = Phoenix.HTML.Form.input_validations(form, field)
    input_opts = Keyword.merge(validations, input_opts)

    {label, opts} = Keyword.pop(opts, :label, humanize(field))
    {label_placement, opts} = Keyword.pop(opts, :label_placement, :before)

    content_tag :div, wrapper_opts do
      label =
        if label != false do
          label(form, field, label, label_opts)
        end

      input = input(type, form, field, input_opts ++ opts)
      error = error_tag(form, field)

      cond do
        is_nil(label) ->
          [input, error || ""]

        label_placement == :after ->
          [input, label, error || ""]

        true ->
          [label, input, error || ""]
      end
    end
  end

  def h_input(form, field, opts \\ []) do
    type = opts[:using] || Phoenix.HTML.Form.input_type(form, field)

    wrapper_opts = [class: "field"]
    input_opts = [class: "#{opts[:class] || "form-control"} #{input_state_class(form, field)}"]

    validations = Phoenix.HTML.Form.input_validations(form, field)
    input_opts = Keyword.merge(validations, input_opts)

    {label, opts} = Keyword.pop(opts, :label, humanize(field))
    {label_opts, opts} = Keyword.pop(opts, :label_options, class: "field-name")

    content_tag(:div, wrapper_opts) do
      label =
        if label != false do
          content_tag(:div, label, label_opts)
        end

      content =
        content_tag(:div, class: "field-value") do
          input = input(type, form, field, input_opts ++ opts)
          error = error_tag(form, field)
          [input, error || ""]
        end

      [label, content]
    end
  end

  # TODO implement following input: datepicker, datetime picker, color picker, switch, select, radio select
  def input(:datepicker, form, field, opts) do
    # add date picker class
    {class, opts} = Keyword.pop(opts, :class)
    class = class <> " datepicker"
    opts = Keyword.put(opts, :class, class)

    # format value string
    {format, opts} = Keyword.pop(opts, :format)

    opts =
      if format do
        value = Map.get(form.data, field)

        Timex.format(value, format)
        |> case do
          {:ok, time_str} ->
            Keyword.put(opts, :value, time_str)

          err ->
            Logger.error(inspect(err))
            opts
        end
      else
        opts
      end

    apply(Phoenix.HTML.Form, :text_input, [form, field, opts])
  end

  def input(:selectize, form, field, opts) do
    data = opts[:data] || Keyword.new([])
    data = Keyword.put(data, :toggle, "selectize")
    opts = Keyword.put(opts, :data, data)
    {source, opts} = Keyword.pop(opts, :source, [])
    input = if opts[:multiple] == true, do: :multiple_select, else: :select

    apply(Phoenix.HTML.Form, input, [form, field, source, opts])
  end

  def input(type, form, field, opts) when type in [:select, :multiple_select] do
    {source, opts} = Keyword.pop(opts, :source)
    source = Enum.into(source || [], Keyword.new())
    apply(Phoenix.HTML.Form, type, [form, field, source, opts])
  end

  def input(type, form, field, opts) do
    apply(Phoenix.HTML.Form, type, [form, field, opts])
  end

  def error_tag(form, field) do
    Enum.map(Keyword.get_values(form.errors, field), fn error ->
      content_tag(:span, translate_error(error), class: "#{feedback_state_class(form, field)}")
    end)
  end

  defp translate_error({msg, opts}) do
    if count = opts[:count] do
      Gettext.dngettext(ChubiWeb.Gettext, "errors", msg, msg, count, opts)
    else
      Gettext.dgettext(ChubiWeb.Gettext, "errors", msg, opts)
    end
  end

  def feedback_state_class(form, field) do
    cond do
      # The form was not yet submitted
      !form.source.action ->
        ""

      form.errors[field] ->
        "invalid-feedback"

      true ->
        "valid-feedback"
    end
  end

  def input_state_class(form, field) do
    cond do
      # The form was not yet submitted
      !form.source.action ->
        ""

      form.errors[field] ->
        "is-invalid"

      true ->
        "is-valid"
    end
  end
end
