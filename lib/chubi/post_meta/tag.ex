defmodule Chubi.PostMeta.Tag do
  use Chubi, :model

  schema "tags" do
    field(:name, :string)
    field(:slug, :string)
    field(:post_id, :integer)
    timestamps
  end

  @doc false
  def changeset(tag, attrs) do
    tag
    |> cast(attrs, [:name, :slug, :post_id])
    |> EctoUtils.slugify(:name, :slug)
    |> validate_required([:name, :slug])
  end
end
