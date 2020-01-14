defmodule Chubi.Content do
  @moduledoc """
  The Content context.
  """

  use Chubi, :business
  alias Chubi.Content.Post
  alias Chubi.ContentFileStore, as: FileStore

  def list_posts(query_params \\ %{}) do
    Post
    |> Filter.apply(query_params)
    |> order_by(desc: :date)
    |> Repo.all()
    |> Repo.preload(:tags)
    |> Repo.preload(:categories)
  end

  def paginate_posts(query_params, paging_params) do
    list_posts
    |> Paginator.new(paging_params)
  end

  def paginate_published_posts(paging_params) do
    paginate_posts(%{draft: false}, paging_params)
  end

  def paginate_posts_by_tag(tag_slug, paging_params) do
    list_posts
    |> Enum.filter(fn post ->
      Enum.any?(post.tags || [], &(&1.slug == tag_slug))
    end)
    |> Paginator.new(paging_params)
  end

  def paginate_posts_by_category(category_slug, paging_params) do
    list_posts
    |> Enum.filter(fn post ->
      Enum.any?(post.categories || [], &(&1.slug == category_slug))
    end)
    |> Paginator.new(paging_params)
  end

  @doc """
  Gets a single post.

  Raises `Ecto.NoResultsError` if the Post does not exist.

  ## Examples

      iex> get_post!(123)
      %Post{}

      iex> get_post!(456)
      ** (Ecto.NoResultsError)

  """
  def get_post!(id) do
    Repo.get!(Post, id)
    |> Repo.preload(:tags)
    |> Repo.preload(:categories)
  end

  def get_post_by!(filters) do
    Repo.get_by!(Post, filters)
    |> Repo.preload(:tags)
    |> Repo.preload(:categories)
  end

  @doc """
  Creates a post.

  ## Examples

      iex> create_post(%{field: value})
      {:ok, %Post{}}

      iex> create_post(%{field: bad_value})
      {:error, %Ecto.Changeset{}}

  """

  @content_parser_map [html: Chubi.Content.HtmlParser, markdown: Chubi.Content.MarkdownParser]

  def create_post(params) do
    attrs = parse_content(params)

    %Post{}
    |> Post.changeset(attrs)
    |> Repo.insert()
    |> write_to_file
  end

  @doc """
  Updates a post.

  ## Examples

      iex> update_post(post, %{field: new_value})
      {:ok, %Post{}}

      iex> update_post(post, %{field: bad_value})
      {:error, %Ecto.Changeset{}}

  """
  def update_post(%Post{} = post, params) do
    attrs = parse_content(params)

    post
    |> Post.changeset(attrs)
    |> Repo.update()
    |> write_to_file
  end

  @doc """
  Deletes a Post.

  ## Examples

      iex> delete_post(post)
      {:ok, %Post{}}

      iex> delete_post(post)
      {:error, %Ecto.Changeset{}}

  """
  def delete_post(%Post{} = post) do
    Repo.delete(post)
  end

  @doc """
  Returns an `%Ecto.Changeset{}` for tracking post changes.

  ## Examples

      iex> change_post(post)
      %Ecto.Changeset{source: %Post{}}

  """
  def change_post(%Post{} = post) do
    Post.changeset(post, %{})
  end

  alias Chubi.Content.Page

  @doc """
  Returns the list of pages.

  ## Examples

      iex> list_pages()
      [%Page{}, ...]

  """
  def list_pages do
    Repo.all(Page)
  end

  def paginate_pages(query_params, paging_params) do
    Page
    |> Filter.apply(query_params)
    |> order_by(desc: :date)
    |> Repo.all()
    |> Paginator.new(paging_params)
  end

  @doc """
  Gets a single page.

  Raises `Ecto.NoResultsError` if the Page does not exist.

  ## Examples

      iex> get_page!(123)
      %Page{}

      iex> get_page!(456)
      ** (Ecto.NoResultsError)

  """
  def get_page!(id), do: Repo.get!(Page, id)
  def get_page_by!(filters), do: Repo.get_by!(Page, filters)

  @doc """
  Creates a page.

  ## Examples

      iex> create_page(%{field: value})
      {:ok, %Page{}}

      iex> create_page(%{field: bad_value})
      {:error, %Ecto.Changeset{}}

  """
  def create_page(params \\ %{}) do
    attrs = parse_content(params)

    %Page{}
    |> Page.changeset(attrs)
    |> Repo.insert()
    |> write_to_file
  end

  @doc """
  Updates a page.

  ## Examples

      iex> update_page(page, %{field: new_value})
      {:ok, %Page{}}

      iex> update_page(page, %{field: bad_value})
      {:error, %Ecto.Changeset{}}

  """
  def update_page(%Page{} = page, params \\ %{}) do
    attrs = parse_content(params)

    page
    |> Page.changeset(attrs)
    |> Repo.update()
    |> write_to_file
  end

  @doc """
  Deletes a Page.

  ## Examples

      iex> delete_page(page)
      {:ok, %Page{}}

      iex> delete_page(page)
      {:error, %Ecto.Changeset{}}

  """
  def delete_page(%Page{} = page) do
    Repo.delete(page)
  end

  @doc """
  Returns an `%Ecto.Changeset{}` for tracking page changes.

  ## Examples

      iex> change_page(page)
      %Ecto.Changeset{source: %Page{}}

  """
  def change_page(%Page{} = page) do
    Page.changeset(page, %{})
  end

  defp parse_content(%{"content" => content} = params) do
    format = params["format"] || Application.get_env(:chubi, :post_format) || "html"
    parser = Keyword.get(@content_parser_map, String.to_atom(format))
    attrs = parser.parse(content)

    Map.merge(params, attrs)
    |> Map.put("format", format)
  end

  defp write_to_file({:ok, content}) do
    FileStore.write(content)
    {:ok, content}
  end

  defp write_to_file(rs), do: rs

  defp delete_content_file({:ok, content} = rs) do
    FileStore.delete(content)
  end

  defp delete_content_file(rs), do: rs
end
