defmodule Chubi.PostMeta.Category do
  use Chubi, :model

  schema "categories" do
    field(:name, :string)
    field(:slug, :string)
    timestamps
  end

  @doc false
  def changeset(category, attrs) do
    category
    |> cast(attrs, [:name, :slug])
    |> EctoUtils.slugify(:name, :slug)
    |> validate_required([:name, :slug])
  end
end
