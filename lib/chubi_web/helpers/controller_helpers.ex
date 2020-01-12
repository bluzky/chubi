defmodule ChubiWeb.ControllerHelpers do
  import Phoenix.Controller, except: [render: 2, render: 3]

  def render(conn, template, assigns) do
    view_scope =
      view_module(conn)
      |> to_string
      |> String.split(".")
      |> List.last()

    view_module = ChubiWeb.ThemeHelpers.current_theme_module(view_scope)

    conn
    |> put_view(view_module)
    |> Phoenix.Controller.render(template, assigns)
  end

  def render_page(conn, assigns) do
    page = assigns[:page]

    conn
    |> put_page_layout(page)
    |> render_first_match(
      ["page_#{page.slug}.html", "page.html"],
      assigns
    )
  end

  defp put_page_layout(conn, page) do
    if page.template do
      put_layout(conn, {ChubiWeb.PageTemplateView, "#{page.template}.html"})
    else
      conn
    end
  end

  # render first matched template
  def render_first_match(conn, template_list, assigns) do
    theme = Application.get_env(:chubi, :theme)
    root = Phoenix.Template.module_to_template_root(view_module(conn), ChubiWeb, "View")
    root = ChubiWeb.ThemeHelpers.current_theme_directory("templates/#{root}")

    template =
      Enum.find(template_list, fn template ->
        Phoenix.Template.find_all(root, "#{template}*")
        |> length()
        |> Kernel.>(0)
      end)

    if template do
      render(conn, template, assigns)
    else
      raise "No template found"
    end
  end
end
