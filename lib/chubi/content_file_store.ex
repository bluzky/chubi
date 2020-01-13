defmodule Chubi.ContentFileStore do
  alias Chubi.Content.Post
  alias Chubi.Content.Page
  @content_dir "./priv/content"

  def content_directory(suffix \\ "") do
    @content_dir
    |> Path.join(suffix)
    |> Path.absname()
  end

  def ensure_directory(path) do
    if File.dir?(path) do
      path
    else
      File.mkdir_p!(path)
      path
    end
  end

  defp directory(post) do
    case post do
      %Post{} ->
        ensure_directory(content_directory("posts"))

      %Page{} ->
        ensure_directory(content_directory("pages"))

      _ ->
        nil
    end
  end

  defp extension(post) do
    case post.format do
      "markdown" -> "md"
      _ -> "json"
    end
  end

  defp content(%Post{} = post) do
    case post.format do
      "markdown" ->
        post.content

      _ ->
        post
        |> Map.drop([:__meta__, :__struct__])
        |> Map.merge(%{
          categories: Enum.join(Enum.map(post.categories, & &1.name)),
          tags: Enum.join(Enum.map(post.tags, & &1.name))
        })
        |> Jason.encode!()
    end
  end

  defp content(%Page{} = post) do
    case post.format do
      "markdown" ->
        post.content

      _ ->
        post
        |> Map.drop([:__meta__, :__struct__])
        |> Jason.encode!()
    end
  end

  defp file_path(post) do
    Path.join(directory(post), "#{post.slug}.#{extension(post)}")
  end

  def write(post) do
    File.write(file_path(post), content(post), [:write])
  end

  def delete(post) do
    File.rm(file_path(post))
  end
end
