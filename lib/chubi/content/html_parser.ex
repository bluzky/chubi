defmodule Chubi.Content.HtmlParser do
  def parse(data, params) do
    %{
      "content" => data,
      "html_content" => data,
      "categories" => Enum.join(params["categories"] || [], ","),
      "tags" => Enum.join(params["tags"] || [], ",")
    }
  end
end
