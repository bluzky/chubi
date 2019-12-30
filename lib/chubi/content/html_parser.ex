defmodule Chubi.Content.HtmlParser do
  def parse(data) do
    %{"content" => data, "html_content" => data}
  end
end
