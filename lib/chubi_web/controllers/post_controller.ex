defmodule ChubiWeb.PostController do
  use ChubiWeb, :controller

  alias Chubi.Content
  alias Chubi.Content.PostQuery
  alias Chubi.Content.Post
  alias Chubi.PostMeta
  alias Chubi.Repo

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

    render_list_category(conn,
      posts: posts,
      paginator: paginator,
      category: category
    )
  end

  def show(conn, %{"slug" => slug}) do
    post =
      Content.get_post_by!(slug: slug)
      |> Repo.preload([:categories, :tags])

    render_post(conn, post: post)
  end

  defp render_list_category(conn, assigns) do
    cagegory = assigns[:category]

    render_first_match(
      conn,
      ["list_category_#{cagegory.slug}.html", "list_category.html", "list.html"],
      assigns
    )
  end

  defp render_list_tag(conn, assigns) do
    tag = assigns[:tag]

    render_first_match(
      conn,
      ["list_tag_#{tag.slug}.html", "list_tag.html", "list.html"],
      assigns
    )
  end

  defp render_post(conn, assigns) do
    post = assigns[:post]

    render_first_match(
      conn,
      ["post_#{post.slug}.html", "post.html"],
      assigns
    )
  end

  # render first matched template
  defp render_first_match(conn, templates_list, assigns) do
    root = Phoenix.Template.module_to_template_root(ChubiWeb.PostView, ChubiWeb, "View")
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
