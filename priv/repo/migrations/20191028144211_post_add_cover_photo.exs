defmodule Chubi.Repo.Migrations.PostAddCoverPhoto do
  use Ecto.Migration

  def change do
    alter table(:posts) do
      add :cover, :text
    end
  end
end
