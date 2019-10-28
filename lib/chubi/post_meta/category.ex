defmodule Chubi.PostMeta.Category do
  use Chubi, :model

  @primary_key false
  schema "categories" do
    field(:name, :string)
    field(:slug, :string)
  end

  @doc false
  def changeset(category, attrs) do
    category
    |> cast(attrs, [:name, :slug])
    |> EctoUtils.sluggify(:name, :slug)
    |> validate_required([:name, :slug])
  end
end
