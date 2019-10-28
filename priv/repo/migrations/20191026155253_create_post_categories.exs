defmodule Chubi.Repo.Migrations.CreatePostCategories do
  use Ecto.Migration

  def change do
    create table(:post_categories, primary_key: false) do
      add :post_id, references(:posts, on_delete: :delete_all)
      add :cateogry_id, references(:categories, on_delete: :delete_all)
    end

    create index(:post_categories, [:post_id])
    create index(:post_categories, [:cateogry_id])
  end
end
