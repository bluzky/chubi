defmodule Chubi.Repo.Migrations.CreatePosts do
  use Ecto.Migration

  def change do
    create table(:posts) do
      add :title, :text, null: false
      add :slug, :text
      add :excerpt, :text
      add :content, :text, null: false
      add :format, :string, default: "html"
      add :is_draft, :boolean, default: true, null: false
      add :published_at, :utc_datetime

      timestamps()
    end
  end
end
