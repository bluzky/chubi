defmodule ChubiWeb.CategoryController do
  use ChubiWeb, :controller

  alias Chubi.Content
  alias Chubi.PostMeta
  alias ChubiWeb.ControllerHelpers

  def index(conn, params) do
    paginator = PostMeta.paginate_categories(params)

    ControllerHelpers.render(conn, "list.html",
      items: paginator.entries,
      paginator: paginator
    )
  end

  def show(conn, %{"slug" => category_slug} = params) do
    category = PostMeta.get_category_by!(slug: category_slug)

    paginator = Content.paginate_posts_by_category(category.slug, params)

    ControllerHelpers.render_first_match(
      conn,
      ["category_#{category.slug}.html", "single.html"],
      posts: paginator.entries,
      paginator: paginator,
      category: category
    )
  end
end
