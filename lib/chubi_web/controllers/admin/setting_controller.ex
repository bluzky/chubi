defmodule ChubiWeb.Admin.SettingController do
  use ChubiWeb, :controller
  alias Chubi.Content

  def set_theme(conn, %{"theme" => theme}) do
    conn
    |> put_session(:theme, theme)
    |> redirect(to: Routes.post_path(conn, :index))
  end

  def export_content(conn, _params) do
    posts =
      Content.list_posts()
      |> Enum.map(&Chubi.ContentFileStore.write_mem(&1))
      |> Enum.map(fn {file_name, content} ->
        {String.to_charlist(Path.join("posts/", file_name)), content}
      end)

    pages =
      Content.list_pages()
      |> Enum.map(&Chubi.ContentFileStore.write_mem(&1))
      |> Enum.map(fn {file_name, content} ->
        {String.to_charlist(Path.join("pages/", file_name)), content}
      end)

    with {:ok, {filename, data}} = :zip.create("blog-content.zip", posts ++ pages, [:memory]) do
      # download file
      conn
      |> Plug.Conn.put_resp_content_type("application/octet-stream")
      |> Plug.Conn.put_resp_header(
        "content-disposition",
        "attachment; filename=\"#{filename}\""
      )
      |> Plug.Conn.send_resp(:ok, data)
    else
      _ ->
        conn
        |> put_flash(:error, gettext("Cannot generate template"))
        |> redirect(to: Routes.post_path(conn, :index))
    end
  end

  def select_import(conn, _) do
  end

  def import_content(conn, %{%{path: path} => file}) do
    with {:ok, files} <- :zip.extract(path, [:memory]) do
      rs =
        Enum.map(files, fn {_filename, content} ->
          attrs =
            case Path.extname(file_path) do
              ".md" -> %{"content" => content, "format" => "markdown"}
              _ -> Jason.decode!(content)
            end

          if String.starts_with?(file_path, "posts") do
            Content.create_post(attrs)
          else
            Content.create_page(attrs)
          end
        end)

      success = Enum.filter(rs, &(elem(&1, 0) == :ok))

      conn
      |> put_flash(:error, gettext("Cannot import content"))
      |> redirect(to: Routes.setting_path(conn, :select_import))
    else
      conn
      |> put_flash(:error, gettext("Cannot import content"))
      |> redirect(to: Routes.setting_path(conn, :select_import))
    end
  end
end
