defmodule Chubi.Content.MarkdownParser do
  def parse(data, _params) do
    [frontmatter, markdown] = String.split(data, ~r/\r*\n-{3,}\r*\n/, parts: 2)

    parse_meta(frontmatter)
    |> Map.merge(parse_content(markdown))
    |> Map.put("content", data)
  end

  defp parse_meta(yaml) do
    :yamerl_constr.string(yaml)
    |> List.first()
    |> Enum.map(fn {k, v} -> {to_string(k), to_string(v)} end)
    |> Enum.into(%{})
  end

  defp parse_content(data) do
    parts = String.split(data, ~r/\r*\n-{3,}\r*\n/, parts: 2)

    case parts do
      [excerpt, content] ->
        %{
          "excerpt" => markdown_to_html(excerpt),
          "html_content" => markdown_to_html(content)
        }

      [content] ->
        %{"html_content" => markdown_to_html(content)}

      _ ->
        %{"html_content" => markdown_to_html(data)}
    end
  end

  defp markdown_to_html(text) do
    Earmark.as_html(text)
    |> case do
      {:ok, html, _} ->
        html

      err ->
        nil
    end
  end
end
