defmodule ChubiWeb.Admin.PostView do
  use ChubiWeb, :admin_view

  def render("scripts." <> page, assigns) when page in ["new.html", "edit.html"] do
    """
    <script src="#{Routes.static_path(assigns.conn, "/js/admin/markdown_editor.js")}"></script>
    """
  end

  def render("styles." <> page, assigns) when page in ["new.html", "edit.html"] do
    """
    <link rel="stylesheet" type="text/css" href="#{
      Routes.static_path(assigns.conn, "/css/admin/markdown_editor.css")
    }"/>
    """
  end
end
