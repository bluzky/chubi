defmodule ChubiWeb.Admin.PageController do
  use ChubiWeb, :controller

  alias Chubi.Content
  alias Chubi.Content.Page
  alias Chubi.Content.Post
  alias Chubi.Content.PostQuery
  alias Chubi.Paginator

  def index(conn, params) do
    paginator = Content.paginate_pages(%{}, params)
    render(conn, "index.html", pages: paginator.entries, paginator: paginator)
  end

  def new(conn, _params) do
    changeset = Content.change_page(%Page{})
    render(conn, "new.html", changeset: changeset)
  end

  def create(conn, %{"page" => params}) do
    params
    |> Content.create_page()
    |> case do
      {:ok, page} ->
        conn
        |> put_flash(:info, "Page created successfully.")
        |> redirect(to: Routes.admin_page_path(conn, :show, page))

      {:error, %Ecto.Changeset{} = changeset} ->
        render(conn, "new.html", changeset: changeset)
    end
  end

  def show(conn, %{"id" => id}) do
    page = Content.get_page!(id)
    render(conn, "show.html", page: page)
  end

  def edit(conn, %{"id" => id}) do
    page = Content.get_page!(id)
    changeset = Content.change_page(page)
    render(conn, "edit.html", page: page, changeset: changeset)
  end

  def update(conn, %{"id" => id, "page" => params}) do
    page = Content.get_page!(id)

    page
    |> Content.update_page(params)
    |> case do
      {:ok, page} ->
        conn
        |> put_flash(:info, "Page updated successfully.")
        |> redirect(to: Routes.admin_page_path(conn, :show, page))

      {:error, %Ecto.Changeset{} = changeset} ->
        render(conn, "edit.html", page: page, changeset: changeset)
    end
  end

  def delete(conn, %{"id" => id}) do
    page = Content.get_page!(id)
    {:ok, _page} = Content.delete_page(page)

    conn
    |> put_flash(:info, "Page deleted successfully.")
    |> redirect(to: Routes.admin_page_path(conn, :index))
  end
end
