defmodule Chubi.Repo.Migrations.PageAddPublishAtAndTemplate do
  use Ecto.Migration

  def change do
    alter table(:pages) do
      add :date, :utc_datetime
      add :template, :text
    end
  end
end
