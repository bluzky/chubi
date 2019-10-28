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

  def require_one(changeset, keys) do
    valid =
      Enum.reduce(keys, false, fn key, acc ->
        value = Changeset.get_field(changeset, key)

        if value not in [nil, "", [], %{}] do
          true
        else
          false or acc
        end
      end)

    if not valid do
      Enum.reduce(keys, changeset, fn key, acc ->
        Changeset.add_error(
          acc,
          key,
          dgettext(
            "errors",
            "At least one of these keys %{keys} must be set",
            keys: inspect(keys)
          )
        )
      end)
    else
      changeset
    end
  end

  def require_not_or_both(changeset, key1, key2) do
    value1 = Changeset.get_field(changeset, key1)
    value2 = Changeset.get_field(changeset, key2)

    if (is_nil(value1) and is_nil(value2)) or (not is_nil(value1) and not is_nil(value2)) do
      changeset
    else
      Changeset.add_error(
        changeset,
        key1,
        "this combination of #{key1} and #{key2} is not allowed"
      )
      |> Changeset.add_error(key2, "this combination of #{key1} and #{key2} is not allowed")
    end
  end

  def cast_date(changeset, params, field, format \\ "{YYYY}/{0M}/{0D}", opts \\ []) do
    _parse_date(changeset, params, field, format, opts)
  end

  def cast_datetime(
        changeset,
        params,
        field,
        format \\ "{YYYY}-{0M}-{0D}T{h24}:{m}:{s}{Z}",
        opts \\ []
      ) do
    _parse_date(changeset, params, field, format, opts)
  end

  defp _parse_date(changeset, params, fields, format, opts) when is_list(fields) do
    Enum.reduce(fields, changeset, &_parse_date(&2, params, &1, format, opts))
  end

  defp _parse_date(changeset, params, field, format, _opts) do
    value = Map.get(params, field) || Map.get(params, to_string(field))

    if value in [nil, ""] do
      changeset
    else
      case Timex.parse(value, format) do
        {:ok, parsed_value} ->
          Changeset.put_change(changeset, :"#{field}", Timex.to_datetime(parsed_value))

        {:error, message} ->
          Logger.error("#{inspect(message)}")
          Changeset.add_error(changeset, :"#{field}", "Invalid format")
      end
    end
  end

  @doc """
  cast date range string to datetime  and put in the changeset
  keys:
  - start_time
  - end_time

  default date separator is `-`

  Example:
  cast_daterange(changeset, %{daterange: "01/21/2019 - 02/21/2019"}, "{0M}/{0D}/{YYYY}", separator: "-")
  """
  def cast_daterange(changeset, params, field, opts \\ []) do
    separator = Keyword.get(opts, :separator, "-")
    format = Keyword.get(opts, :format, "{0M}/{0D}/{YYYY}")
    daterange = Map.get(params, field) || Map.get(params, to_string(field))

    if daterange do
      parts =
        String.split(daterange, separator)
        |> Enum.map(&String.trim/1)

      with true <- length(parts) == 2,
           {:ok, start_time} <- Timex.parse(Enum.at(parts, 0), format),
           {:ok, end_time} <- Timex.parse(Enum.at(parts, 1), format) do
        end_time =
          end_time
          |> Timex.end_of_day()

        changeset
        |> Changeset.put_change(:start_time, Timex.to_datetime(start_time))
        |> Changeset.put_change(:end_time, Timex.to_datetime(end_time))
      else
        _ -> Changeset.add_error(changeset, field, dgettext("errors", "Invalid timerange"))
      end
    else
      changeset
    end
  end

  @doc """
  Clean upload in the changese if it does not exist in the stored value
  """
  def clean_upload(changeset, field, uploader) do
    change = Changeset.get_change(changeset, field)
    value = Map.get(changeset.data, field)

    cond do
      changeset.valid? and not is_nil(change) and not is_nil(value) ->
        apply(uploader, :delete, [value.identifier])

      not changeset.valid? and is_map(change) ->
        apply(uploader, :delete, [change.identifier])

      true ->
        nil
    end

    changeset
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
