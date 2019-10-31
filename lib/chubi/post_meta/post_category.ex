defmodule Chubi.PostMeta.PostCategory do
  use Chubi, :model

  @primary_key false
  schema "post_categories" do
    field(:post_id, :id)
    field(:category_id, :id)
  end

  @doc false
  def changeset(post_category, attrs) do
    post_category
    |> cast(attrs, [:post_id, :cateogry_id])
    |> validate_required([:post_id, :cateogry_id])
  end
end
