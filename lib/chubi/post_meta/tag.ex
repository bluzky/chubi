defmodule Chubi.PostMeta.Tag do
  use Chubi, :model

  schema "tags" do
    field(:name, :string)
    field(:slug, :string)
    timestamps
  end

  @doc false
  def changeset(tag, attrs) do
    tag
    |> cast(attrs, [:name, :slug])
    |> EctoUtils.slugify(:name, :slug)
    |> validate_required([:name, :slug])
  end
end
