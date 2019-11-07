defmodule Chubi.Content.Page do
  use Chubi, :model

  schema "pages" do
    field(:title, :string)
    field(:slug, :string)
    field(:content, :string)
    field(:cover, :string)
    field(:html_content, :string)
    field(:format, :string, default: "markdown")
    field(:is_draft, :boolean, default: false)

    field(:date, :utc_datetime)
    field(:template, :string)

    timestamps()
  end

  @doc false
  def changeset(page, attrs) do
    page
    |> cast(attrs, [
      :title,
      :slug,
      :content,
      :html_content,
      :format,
      :is_draft,
      :cover,
      :template
    ])
    |> EctoUtils.cast_date(attrs, :date)
    |> EctoUtils.slugify(:title, :slug)
    |> validate_required([:title, :slug, :content, :html_content, :format])
  end
end
