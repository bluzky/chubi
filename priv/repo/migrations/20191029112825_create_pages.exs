defmodule Chubi.Repo.Migrations.CreatePages do
  use Ecto.Migration

  def change do
    create table(:pages) do
      add :title, :text
      add :slug, :text
      add :content, :text
      add :html_content, :text
      add :format, :string
      add :is_draft, :boolean, default: false, null: false
      add :cover, :string

      timestamps()
    end

  end
end
