defmodule Chubi.Content.Post do
  use Chubi, :model

  alias Chubi.PostMeta.Category
  alias Chubi.PostMeta.Tag
  alias Chubi.Repo
  import Ecto.Query

  schema "posts" do
    field(:title, :string)
    field(:slug, :string)
    field(:content, :string)
    field(:excerpt, :string)
    field(:format, :string)

    field(:is_draft, :boolean, default: false)
    field(:published_at, :utc_datetime)

    many_to_many(:tags, Tag, join_through: "post_tags")
    many_to_many(:categories, Category, join_through: "post_categories")

    timestamps()
  end

  @required_fields [:title, :content, :format]
  @optional_fields [:slug, :excerpt, :is_draft]

  @doc false
  def changeset(post, attrs) do
    post
    |> cast(attrs, @required_fields ++ @optional_fields)
    |> EctoUtils.sluggify(:title, :slug)
    |> validate_required(@required_fields)
    |> put_assoc(:tags, parse_assoc(attrs, Tag))
    |> put_assoc(:categories, parse_assoc(attrs, Category))
  end

  # take from http://blog.plataformatec.com.br/2016/12/many-to-many-and-upserts/
  defp parse_assoc(params, model) do
    (params["tags"] || "")
    |> String.split(",")
    |> Enum.map(&String.trim/1)
    |> Enum.reject(&(&1 == ""))
    |> insert_and_get_all(model)
  end

  defp insert_and_get_all([], model) do
    []
  end

  defp insert_and_get_all(names, model) do
    maps =
      Enum.map(names, fn name ->
        model.changeset(struct(model, %{}), %{name: name})
        |> apply_changes()
        |> Map.take([:name, :slug])
      end)

    Repo.insert_all(model, maps, on_conflict: :nothing)
    Repo.all(from(t in model, where: t.name in ^names))
  end
end
