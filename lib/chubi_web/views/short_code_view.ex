defmodule ChubiWeb.ShortCodeView do
  use ChubiWeb, :view

  def render_shortcode("hello", _assigns) do
    "<h1>Hello</h1>"
  end

  def render_shortcode("greeting", %{args: [name]}) do
    "<h2>Welcome, #{name}</h2>"
  end

  def render_shortcode("add", %{args: [a, b, c]}) do
    "<h1> result: #{a + b + c}</h1>"
  end

  def render_shortcode(name, assigns) do
    Phoenix.View.render_existing(ChubiWeb.ShortCodeView, "#{name}.html", assigns)
  end
end
