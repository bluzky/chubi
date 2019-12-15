defmodule Mix.Tasks.Chubi.New.Theme do
  @shortdoc "Generate a theme sekeleton"

  @moduledoc """
  Generate a theme sekeleton
  """

  use Mix.Task
  require Logger

  @doc false
  def run(args) do
    theme_identifier = List.first(args)

    if theme_identifier do
      theme_identifier = String.downcase(theme_identifier)
      theme_module = Phoenix.Naming.camelize(theme_identifier)
      theme_directory = ChubiWeb.ThemeHelpers.theme_directory(theme_identifier)

      File.mkdir(theme_directory)
      |> case do
        :ok ->
          File.cp_r!("priv/templates/theme", theme_directory)

          context = [
            theme_directory: theme_directory,
            theme_module: theme_module,
            theme_identifier: theme_identifier
          ]

          compile_template(theme_directory, context)

        {:error, _} ->
          Logger.error("Cannot create theme directory at: #{theme_directory}")
      end
    else
      Logger.error("No theme name is specified")
    end
  end

  def compile_template(directory, context) do
    File.ls(directory)
    |> case do
      {:ok, files} ->
        files
        |> Enum.each(fn file ->
          path = Path.join(directory, file)

          cond do
            File.dir?(path) ->
              compile_template(path, context)

            String.ends_with?(file, ".ex") || String.ends_with?(file, ".eex") ->
              content = EEx.eval_file(path, context)
              File.write!(path, content, [:write])

            true ->
              nil
          end
        end)

      _err ->
        Logger.error("Cannot read files from directory #{directory}")
    end
  end
end
