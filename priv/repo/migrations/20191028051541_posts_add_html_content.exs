defmodule Chubi.Repo.Migrations.PostsAddHtmlContent do
  use Ecto.Migration

  def change do
    alter table(:posts) do
      add :html_content, :text
    end
  end
end
