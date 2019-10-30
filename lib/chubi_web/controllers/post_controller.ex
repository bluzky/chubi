defmodule ChubiWeb.PostController do
  use ChubiWeb, :controller

  alias Chubi.Content
  alias Chubi.Content.PostQuery
  alias Chubi.Content.Post
  alias Chubi.PostMeta
  alias Chubi.Repo
  alias ChubiWeb.ControllerHelpers

  def index(conn, params) do
    paginator =
      PostQuery.published_posts()
      |> Chubi.Paginator.new(params)

    posts =
      paginator.entries
      |> Repo.preload([:categories, :tags])

    render(conn, "list.html", posts: posts, paginator: paginator)
  end

  def by_category(conn, %{"slug" => category_slug} = params) do
    category = PostMeta.get_category_by!(slug: category_slug)

    paginator =
      PostQuery.published_posts()
      |> PostQuery.with_category(category_slug)
      |> Chubi.Paginator.new(params)

    posts =
      paginator.entries
      |> Repo.preload([:categories, :tags])

    ControllerHelpers.render_first_match(
      conn,
      ["list_category_#{category.slug}.html", "list_category.html", "list.html"],
      posts: posts,
      paginator: paginator,
      category: category
    )
  end

  def by_tag(conn, %{"slug" => tag_slug} = params) do
    tag = PostMeta.get_tag_by!(slug: tag_slug)

    paginator =
      PostQuery.published_posts()
      |> PostQuery.with_tag(tag_slug)
      |> Chubi.Paginator.new(params)

    posts =
      paginator.entries
      |> Repo.preload([:categories, :tags])

    ControllerHelpers.render_first_match(
      conn,
      ["list_category_#{tag.slug}.html", "list_category.html", "list.html"],
      posts: posts,
      paginator: paginator,
      tag: tag
    )
  end

  def show(conn, %{"slug" => slug}) do
    post =
      Content.get_post_by!(slug: slug)
      |> Repo.preload([:categories, :tags])

    ControllerHelpers.render_first_match(
      conn,
      ["post_#{post.slug}.html", "post.html"],
      post: post
    )
  end
end
