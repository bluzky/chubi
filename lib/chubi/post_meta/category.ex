defmodule Chubi.PostMeta.Category do
  use Chubi, :model

  schema "categories" do
    field(:name, :string)
    field(:slug, :string)
    field(:post_id, :integer)
    timestamps
  end

  @doc false
  def changeset(category, attrs) do
    category
    |> cast(attrs, [:name, :slug, :post_id])
    |> EctoUtils.slugify(:name, :slug)
    |> validate_required([:name, :slug])
  end
end
