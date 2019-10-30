defmodule Chubi.Repo.Migrations.PageAddPublishAtAndTemplate do
  use Ecto.Migration

  def change do
    alter table(:pages) do
      add :published_at, :utc_datetime
      add :template, :text
    end
  end
end
