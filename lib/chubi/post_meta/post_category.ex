defmodule Chubi.PostMeta.PostCategory do
  use Chubi, :model

  schema "post_categories" do
    field(:post_id, :id)
    field(:cateogry_id, :id)
    timestamps()
  end

  @doc false
  def changeset(post_category, attrs) do
    post_category
    |> cast(attrs, [:post_id, :cateogry_id])
    |> validate_required([:post_id, :cateogry_id])
  end
end
