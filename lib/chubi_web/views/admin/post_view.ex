defmodule ChubiWeb.Admin.PostView do
  use ChubiWeb, :admin_view

  def render("scripts." <> page, assigns) when page in ["new.html", "edit.html"] do
    case Application.get_env(:chubi, :post_format) do
      "markdown" ->
        """
        <script src="#{Routes.static_path(assigns.conn, "/js/admin/markdown_editor.js")}"></script>
        """

      _ ->
        """
        <script src="#{Routes.static_path(assigns.conn, "/js/admin/html_editor.js")}"></script>
        """
    end
  end

  def render("styles." <> page, assigns) when page in ["new.html", "edit.html"] do
    case Application.get_env(:chubi, :post_format) do
      "markdown" ->
        """
        <link rel="stylesheet" type="text/css" href="#{
          Routes.static_path(assigns.conn, "/css/admin/markdown_editor.css")
        }"/>
        """

      _ ->
        """
        <link rel="stylesheet" type="text/css" href="#{
          Routes.static_path(assigns.conn, "/css/admin/html_editor.css")
        }"/>
        """
    end
  end
end
