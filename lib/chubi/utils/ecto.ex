defmodule Chubi.EctoUtils do
  alias Ecto.Changeset
  require Logger
  import ChubiWeb.Gettext

  defmacro def_enum(prefix, values) do
    quote bind_quoted: [prefix: prefix, values: values] do
      def unquote(:"#{prefix}_enum")(), do: unquote(values)

      Enum.map(values, fn value ->
        def unquote(:"#{prefix}_#{value}")() do
          gettext(unquote(value))
          unquote(value)
        end
      end)
    end
  end

  def slugify(changeset, data_field, slug_field) do
    data = Changeset.get_change(changeset, data_field)
    slug = Changeset.get_change(changeset, slug_field)

    if not is_nil(data) or not is_nil(slug) do
      Changeset.put_change(changeset, slug_field, Slugger.slugify_downcase(slug || data))
    else
      changeset
    end
  end
end
