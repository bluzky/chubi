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
    field(:html_content, :string)
    field(:excerpt, :string)
    field(:format, :string, default: "markdown")
    field(:cover, :string)

    field(:draft, :boolean, default: true)
    field(:date, :utc_datetime)

    many_to_many(:tags, Tag, join_through: "post_tags", on_replace: :delete)
    many_to_many(:categories, Category, join_through: "post_categories", on_replace: :delete)

    timestamps()
  end

  @required_fields [:title, :content, :format, :html_content]
  @optional_fields [:slug, :excerpt, :draft, :cover]

  @doc false
  def changeset(post, attrs) do
    post
    |> cast(attrs, @required_fields ++ @optional_fields)
    |> EctoUtils.cast_date(attrs, :date)
    |> default_date
    |> EctoUtils.slugify(:title, :slug)
    |> validate_required(@required_fields)
    |> put_assoc(:tags, parse_assoc(attrs, "tags", Tag))
    |> put_assoc(:categories, parse_assoc(attrs, "categories", Category))
  end

  def default_date(changeset) do
    date = get_field(changeset, :date)

    if date do
      changeset
    else
      date =
        DateTime.utc_now()
        |> DateTime.truncate(:second)

      put_change(changeset, :date, date)
    end
  end

  # take from http://blog.plataformatec.com.br/2016/12/many-to-many-and-upserts/
  defp parse_assoc(params, key, model) do
    (params[key] || "")
    |> String.split(",")
    |> Enum.map(&String.trim/1)
    |> Enum.reject(&(&1 == ""))
    |> insert_and_get_all(model)
  end

  defp insert_and_get_all([], _model) do
    []
  end

  defp insert_and_get_all(names, model) do
    maps =
      Enum.map(names, fn name ->
        model.changeset(struct(model, %{}), %{name: name})
        |> apply_changes()
        |> Map.take([:name, :slug])
        |> Map.merge(%{
          inserted_at:
            Timex.now() |> Timex.to_naive_datetime() |> NaiveDateTime.truncate(:second),
          updated_at: Timex.now() |> Timex.to_naive_datetime() |> NaiveDateTime.truncate(:second)
        })
      end)

    slugs = Enum.map(maps, & &1.slug)

    Repo.insert_all(model, maps, on_conflict: :nothing)
    Repo.all(from(t in model, where: t.slug in ^slugs))
  end
end
