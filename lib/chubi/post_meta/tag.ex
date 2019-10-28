defmodule Chubi.PostMeta.Tag do
  use Chubi, :model

  @primary_key false
  schema "tags" do
    field(:name, :string)
    field(:slug, :string)
  end

  @doc false
  def changeset(tag, attrs) do
    tag
    |> cast(attrs, [:name, :slug])
    |> EctoUtils.sluggify(:name, :slug)
    |> validate_required([:name, :slug])
  end
end
