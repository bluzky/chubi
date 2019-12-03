defmodule ChubiWeb.ControllerHelpers do
  import Phoenix.Controller

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
    case render_theme_template(conn, template_list, assigns) do
      %Plug.Conn{} = conn -> conn
      _ -> render_default_template(conn, template_list, assigns)
    end
  end

  defp render_theme_template(conn, templates_list, assigns) do
    {theme, theme_module} = Application.get_env(:chubi, :theme)
    root = Phoenix.Template.module_to_template_root(view_module(conn), ChubiWeb, "View")

    root = "lib/chubi_web/themes/#{theme}/templates/#{root}"

    template =
      Enum.find(templates_list, fn template ->
        Phoenix.Template.find_all(root, "#{template}*")
        |> length()
        |> Kernel.>(0)
      end)

    if template do
      view_scope =
        view_module(conn)
        |> to_string
        |> String.split(".")
        |> List.last()

      conn
      |> put_view(String.to_existing_atom("#{theme_module}.#{view_scope}"))
      |> render(template, assigns)
    end
  end

  defp render_default_template(conn, templates_list, assigns) do
    root = Phoenix.Template.module_to_template_root(view_module(conn), ChubiWeb, "View")
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
