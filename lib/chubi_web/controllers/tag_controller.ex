defmodule ChubiWeb.TagController do
  use ChubiWeb, :controller

  alias Chubi.Content
  alias Chubi.PostMeta
  alias ChubiWeb.ControllerHelpers

  def index(conn, params) do
    paginator = PostMeta.paginate_tags(params)

    ControllerHelpers.render(conn, "list.html",
      items: paginator.entries,
      paginator: paginator
    )
  end

  def show(conn, %{"slug" => tag_slug} = params) do
    tag = PostMeta.get_tag_by!(slug: tag_slug)

    paginator = Content.paginate_posts_by_tag(tag.slug, params)

    ControllerHelpers.render_first_match(
      conn,
      ["tag_#{tag.slug}.html", "single.html"],
      posts: paginator.entries,
      paginator: paginator,
      tag: tag
    )
  end
end
