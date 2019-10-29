defmodule ChubiWeb.PageController do
  use ChubiWeb, :controller
  alias Chubi.Content

  def index(conn, _params) do
    render(conn, "index.html")
  end

  def show(conn, %{"slug" => slug}) do
    page = Content.get_page_by!(slug: slug)

    render_page(conn, page: page)
  end

  defp render_page(conn, assigns) do
    page = assigns[:page]

    render_first_match(
      conn,
      ["page_#{page.slug}.html", "page.html"],
      assigns
    )
  end

  # render first matched template
  defp render_first_match(conn, templates_list, assigns) do
    root = Phoenix.Template.module_to_template_root(ChubiWeb.PageView, ChubiWeb, "View")
    root = "lib/chubi_web/templates/#{root}"

    template =
      Enum.find(templates_list, fn template ->
        Phoenix.Template.find_all(root, "#{template}*")
        |> length()
        |> Kernel.>(0)
      end)

    if is_nil(template) do
      raise "No template found"
    else
      render(conn, template, assigns)
    end
  end
end
