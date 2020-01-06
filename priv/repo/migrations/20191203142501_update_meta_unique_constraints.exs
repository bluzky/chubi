defmodule Chubi.Repo.Migrations.UpdateMetaUniqueConstraints do
  use Ecto.Migration

  def up do
    create unique_index(:categories, [:slug])
    create unique_index(:tags, [:slug])
  end

  def down do
    drop_if_exists unique_index(:categories, [:slug])
    drop_if_exists unique_index(:tags, [:slug])
  end
end
