defmodule Chubi.Uploader do
  defp build_config() do
    {:ok, config} = Belt.Provider.Filesystem.default()
    config
  end

  # Build base directory
  defp get_directory(base) do
    storage_dir = Belt.Config.get(Belt.Provider.Filesystem, :directory)
    now = DateTime.utc_now()
    timed_dir = "#{now.year}/#{now.month}"
    Path.join("#{storage_dir}/#{base}", timed_dir)
  end

  # build file name
  defp build_file_name(%{filename: filename}) do
    base_name = Path.basename(filename, Path.extname(filename))
    timestamp = Timex.now() |> Timex.to_unix()
    "#{base_name}_#{timestamp}#{Path.extname(filename)}"
  end

  # validate upload file
  def validate(_file) do
    true
  end

  @doc """
  Do store a Plug.Upload to storage
  if file is a string then do nothing.
  You can check and handle upload from URL if necessary
  """
  def store(file, opts \\ [])

  def store(%{path: path} = file, opts) do
    config = build_config()
    {dir, _} = Keyword.pop(opts, :base_dir)

    store_opts = [
      key: build_file_name(file),
      scope: get_directory(dir)
    ]

    IO.inspect(get_directory(dir))

    Belt.store(config, path, store_opts)
  end

  # store base 64 data
  def store("data:image/png;base64," <> raw, opts) do
    case Base.decode64(raw) do
      {:ok, data} ->
        config = build_config()
        {dir, _} = Keyword.pop(opts, :base_dir)

        store_opts = [
          key: UUID.uuid1() <> ".png",
          scope: get_directory(dir)
        ]

        Belt.store_data(config, data, store_opts)

      _ ->
        {:error, :invalid_file}
    end
  end

  # string data
  def store(path, _opts) when is_binary(path) do
    {:ok, %{identifier: path}}
  end

  def store(_, _opts) do
    {:error, :invalid_file}
  end

  @doc """
  Simply delete a file from storage
  """
  def delete(identifier) do
    config = build_config()
    Belt.delete(config, identifier)
  end

  @doc """
  Build full URL for a file identifier
  you can add function to skip url
  """
  def url(identifier) when identifier in ["", nil] do
    nil
  end

  def url("http" <> _ = url) do
    {:ok, url}
  end

  def url(identifier) do
    config = build_config()
    Belt.get_url(config, identifier)

    # serve_at = Belt.Config.get(Belt.Provider.Filesystem, :serve_at)
    # {:ok, Path.join(serve_at, identifier)}
  end
end
