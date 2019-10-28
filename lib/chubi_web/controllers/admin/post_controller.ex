defmodule ChubiWeb.Admin.PostController do
  use ChubiWeb, :controller

  alias Chubi.Content
  alias Chubi.Content.PostQuery
  alias Chubi.Content.Post
  alias Chubi.Repo
  alias ChubiWeb.PostFilterParams

  def index(conn, params) do
    filters =
      PostFilterParams.from(params)
      |> Params.to_map()

    paginator =
      PostQuery.filter_post(filters)
      |> Chubi.Paginator.new(params)

    posts =
      paginator.entries
      |> Repo.preload([:categories, :tags])

    render(conn, "index.html", posts: posts, paginator: paginator)
  end

  def new(conn, _params) do
    changeset = Content.change_post(%Post{})
    render(conn, "new.html", changeset: changeset)
  end

  def create(conn, %{"post" => post_params}) do
    post_params = Map.put(post_params, "format", "markdown")

    case Content.create_post(post_params) do
      {:ok, post} ->
        conn
        |> put_flash(:info, "Post created successfully.")
        |> redirect(to: Routes.admin_post_path(conn, :show, post))

      {:error, %Ecto.Changeset{} = changeset} ->
        render(conn, "new.html", changeset: changeset)
    end
  end

  def show(conn, %{"id" => id}) do
    post = Content.get_post!(id)
    render(conn, "show.html", post: post)
  end

  def edit(conn, %{"id" => id}) do
    post =
      Content.get_post!(id)
      |> Repo.preload([:tags, :categories])

    changeset = Content.change_post(post)
    render(conn, "edit.html", post: post, changeset: changeset)
  end

  def update(conn, %{"id" => id, "post" => post_params}) do
    post_params = Map.put(post_params, "format", "markdown")

    post =
      Content.get_post!(id)
      |> Repo.preload([:tags, :categories])

    case Content.update_post(post, post_params) do
      {:ok, post} ->
        conn
        |> put_flash(:info, "Post updated successfully.")
        |> redirect(to: Routes.admin_post_path(conn, :show, post))

      {:error, %Ecto.Changeset{} = changeset} ->
        render(conn, "edit.html", post: post, changeset: changeset)
    end
  end

  def delete(conn, %{"id" => id}) do
    post = Content.get_post!(id)
    {:ok, _post} = Content.delete_post(post)

    conn
    |> put_flash(:info, "Post deleted successfully.")
    |> redirect(to: Routes.admin_post_path(conn, :index))
  end
end
