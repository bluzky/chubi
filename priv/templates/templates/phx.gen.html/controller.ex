defmodule <%= inspect context.web_module %>.<%= inspect Module.concat(schema.web_namespace, schema.alias) %>Controller do
  use <%= inspect context.web_module %>, :controller

  alias <%= inspect context.module %>
  alias <%= inspect schema.module %>

  def index(conn, params) do
    pagination = <%= inspect context.alias %>.list_<%= schema.plural %>_with_paging(params)

    conn
    |> assign(:title, "Listing <%= inspect schema.module %>")
    |> assign(:pagination, pagination)
    |> assign(:entries, pagination.entries)
    |> assign(:path, &Routes.<%= schema.route_helper %>_path/3)
    |> assign(:fields, [])
    |> assign(:filter_by, [])
    |> put_view(Y1commonWeb.PageView)
    |> render("listing.html")
  end

  def new(conn, _params) do
    changeset = <%= inspect context.alias %>.change_<%= schema.singular %>(%<%= inspect schema.alias %>{})

    conn
    |> assign(:path, &Routes.<%= schema.route_helper %>_path/3)
    |> assign(:changeset, changeset)
    |> assign(:model, <%= inspect schema.module %>)
    |> assign(:page_title, "New <%= inspect schema.module %>")
    |> assign(:form_title, "<%= inspect schema.module %> information")
    |> put_view(Y1commonWeb.PageView)
    |> render("new.html")
  end

  def create(conn, %{<%= inspect schema.singular %> => <%= schema.singular %>_params}) do
    case <%= inspect context.alias %>.create_<%= schema.singular %>(<%= schema.singular %>_params) do
      {:ok, <%= schema.singular %>} ->
        conn
        |> put_flash(:info, "<%= schema.human_singular %> created successfully.")
        |> redirect(to: Routes.<%= schema.route_helper %>_path(conn, :show, <%= schema.singular %>))

      {:error, %Ecto.Changeset{} = changeset} ->
        conn
        |> assign(:path, &Routes.<%= schema.route_helper %>_path/3)
        |> assign(:changeset, changeset)
        |> assign(:model, <%= inspect schema.module %>)
        |> assign(:page_title, "New <%= inspect schema.module %>")
        |> assign(:form_title, "<%= inspect schema.module %> information")
        |> put_view(Y1commonWeb.PageView)
        |> render("new.html")
    end
  end

  def show(conn, %{"id" => id}) do
    item = <%= inspect context.alias %>.get_<%= schema.singular %>!(id)

    conn
    |> assign(:item, item)
    |> assign(:fields, [])
    |> assign(:path, &Routes.<%= schema.route_helper %>_path/3)
    |> put_view(Y1commonWeb.PageView)
    |> render("show.html")
  end

  def edit(conn, %{"id" => id}) do
    item = <%= inspect context.alias %>.get_<%= schema.singular %>!(id)
    changeset = <%= inspect context.alias %>.change_<%= schema.singular %>(item)

    conn
    |> assign(:path, &Routes.<%= schema.route_helper %>_path/3)
    |> assign(:changeset, changeset)
    |> assign(:item, item)
    |> assign(:model, <%= inspect schema.module %>)
    |> assign(:page_title, "Edit <%= inspect schema.module %>")
    |> assign(:form_title, "<%= inspect schema.module %> information")
    |> put_view(Y1commonWeb.PageView)
    |> render("edit.html")
  end

  def update(conn, %{"id" => id, <%= inspect schema.singular %> => <%= schema.singular %>_params}) do
    item = <%= inspect context.alias %>.get_<%= schema.singular %>!(id)

    case <%= inspect context.alias %>.update_<%= schema.singular %>(item, <%= schema.singular %>_params) do
      {:ok, <%= schema.singular %>} ->
        conn
        |> put_flash(:info, "<%= schema.human_singular %> updated successfully.")
        |> redirect(to: Routes.<%= schema.route_helper %>_path(conn, :show, <%= schema.singular %>))

      {:error, %Ecto.Changeset{} = changeset} ->
        conn
        |> assign(:path, &Routes.<%= schema.route_helper %>_path/3)
        |> assign(:changeset, changeset)
        |> assign(:item, item)
        |> assign(:model, <%= inspect schema.module %>)
        |> assign(:page_title, "Edit <%= inspect schema.module %>")
        |> assign(:form_title, "<%= inspect schema.module %> information")
        |> put_view(Y1commonWeb.PageView)
        |> render("edit.html")
    end
  end

  def delete(conn, %{"id" => id}) do
    <%= schema.singular %> = <%= inspect context.alias %>.get_<%= schema.singular %>!(id)
    {:ok, _<%= schema.singular %>} = <%= inspect context.alias %>.delete_<%= schema.singular %>(<%= schema.singular %>)

    conn
    |> put_flash(:info, "<%= schema.human_singular %> deleted successfully.")
    |> redirect(to: Routes.<%= schema.route_helper %>_path(conn, :index))
  end
end
