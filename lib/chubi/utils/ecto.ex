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

  def cast_date(changeset, params, field) do
    date_str = Map.get(params, field) || Map.get(params, to_string(field))

    if date_str do
      case Ecto.Type.cast(:date, date_str) do
        :error ->
          Ecto.Type.cast(:utc_datetime, date_str)

        {:ok, date} ->
          {:ok, Timex.to_datetime(date)}
      end
      |> case do
        {:ok, date} -> Changeset.put_change(changeset, field, date)
        _err -> Changeset.add_error(changeset, field, "invalid date")
      end
    else
      changeset
    end
  end
end
