defmodule ChubiWeb.ShortCodeView do
  use ChubiWeb, :view

  def html do
    """

    <h2>this is a short markdown to test</h2>
    <p><strong>Short code</strong></p>
    <ul>
    <li>For example: [[hello /]]
    </li>
    </ul>
    <p>this is another: [[greeting “Wangchuk” /]]</p>
    <p>with multiple argument: [[add 1, 2, 3 /]]</p>
    <p>with keyword list [[hello name: “dung”, age: 19 /]]</p>
    <p>block short code</p>
    <p>[[block]]
    Inner block content
    another row
    [[/block]]</p>
    <p>Block with argument:</p>
    <p>[[border width: 10]]
    Inner blog content</p>
    <p>with space
    [[/border]]</p>

    """
  end

  def compile_shortcode(html) do
    html
    |> compile_shortcode_block
    |> compile_shortcode_inline
  end

  defp compile_shortcode_block(html) do
    Regex.scan(~r/\[\[([_\w]+)([^\/]*)\]\](.+?)\[\[\/\w+?\]\]/sm, html)
    |> IO.inspect()
  end

  defp compile_shortcode_inline(html) do
    # Regex.scan(~r/\[\[([_\w]+)(.*?)(?:\s.*)?\/\]\]/m, html)
  end
end
