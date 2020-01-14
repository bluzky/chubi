defmodule Chubi.DataImporter do
  alias Chubi.Content
  alias Chubi.ContentFileStore, as: FileStore

  def import_all do
    import_pages()
    import_posts()
  end

  def import_pages do
    FileStore.read_all_pages()
    |> Enum.each(fn attr ->
      Content.create_page(attr)
    end)
  end

  def import_posts do
    FileStore.read_all_posts()
    |> Enum.each(fn attr ->
      Content.create_post(attr)
    end)
  end
end
