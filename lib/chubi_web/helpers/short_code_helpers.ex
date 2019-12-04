defmodule ChubiWeb.ShortCodeHelpers do
  def compile_shortcode(html, assigns \\ %{}) do
    html
    |> do_compile_shortcode(~r/\[\[([_\w]+)([^\/]*)\]\](.+?)\[\[\/\w+?\]\]/sm, assigns)
    |> do_compile_shortcode(~r/\[\[([_\w]+)([^\/]*)\/\]\]/m, assigns)
    |> Phoenix.HTML.raw()
  end

  defp do_compile_shortcode(html, regex, assigns) do
    Regex.scan(regex, html)
    |> Enum.reduce(html, fn [matched_str | _] = matched, acc ->
      try do
        rendered_str =
          process_shortcode(matched, assigns)
          |> case do
            {:safe, _} = safe ->
              str = Phoenix.HTML.safe_to_string(safe)

            str when is_binary(str) ->
              str

            _ ->
              nil
          end

        if rendered_str do
          String.replace(acc, matched_str, rendered_str)
        else
          acc
        end
      catch
        _ -> acc
      end
    end)
  end

  # inline short code
  defp process_shortcode([_, shortcode_name, arg_str], assigns) do
    args = parse_arg(arg_str)
    assigns = Map.put(assigns, :args, args)
    render_shortcode(shortcode_name, assigns)
  end

  defp process_shortcode([_, shortcode_name, arg_str, inner_content], assigns) do
    args = parse_arg(arg_str)

    assigns =
      Map.put(assigns, :inner_content, inner_content)
      |> Map.put(:args, args)

    render_shortcode(shortcode_name, assigns)
  end

  defp parse_arg(arg_str) do
    arg_str =
      String.replace(arg_str, ~r/“|”/, "\"")
      |> String.trim()

    Regex.scan(~r/(".*?"|[\w]+)/, arg_str)
    |> Enum.map(fn [_, value] ->
      case Jason.decode(String.trim(value)) do
        {:ok, value} -> value
        _err -> nil
      end
    end)
  end

  defp parse_kw(arg_str) do
    Regex.scan(~r/([\w_]+):\s+(.+?)[,\s]/, "#{arg_str} ")
    |> Enum.map(fn [_, k, v] ->
      case Jason.decode(v) do
        {:ok, value} -> {String.to_atom(k), Jason.decode!(v)}
        _ -> {String.to_atom(k), nil}
      end
    end)
    |> Enum.into(Keyword.new())
  end

  def render_shortcode(name, assigns) do
    Phoenix.View.render_existing(
      ChubiWeb.ThemeHelpers.theme_module("ShortCodeView"),
      "#{name}.html",
      assigns
    ) ||
      ChubiWeb.BuiltInShortCode.render_built_in_shortcode(name, assigns)
  end
end
