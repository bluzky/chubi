defmodule ChubiWeb.ThemeHelpers do
  def current_theme_module(suffix \\ nil) do
    theme = current_theme_name()
    theme_module(theme, suffix)
  end

  def theme_module(theme, suffix \\ nil) do
    module_name = "Elixir.ChubiWeb.Themes.#{Phoenix.Naming.camelize(theme)}"

    if suffix do
      String.to_existing_atom("#{module_name}.#{suffix}")
    else
      String.to_existing_atom(module_name)
    end
  end

  def current_theme_directory(suffix \\ "") do
    theme = Process.get(:theme)
    theme_directory(theme, suffix)
  end

  def theme_directory(theme \\ nil, suffix \\ "") do
    "lib/chubi_web/themes/#{theme}"
    |> Path.join(suffix)
  end

  def list_theme() do
    directory = theme_directory()

    directory
    |> File.ls()
    |> case do
      {:ok, files} ->
        Enum.filter(files, &File.dir?(Path.join(directory, &1)))
        |> IO.inspect()
        |> Enum.map(fn theme ->
          module = theme_module(theme)

          module.info()
          |> Map.put(:identifier, theme)
        end)

      {:error, _} ->
        []
    end
  end

  def current_theme() do
    theme = current_theme_name()

    list_theme()
    |> Enum.find(&(&1.identifier == theme))
  end

  def current_theme_name do
    Process.get(:theme) || Application.get_env(:chubi, :theme)
  end

  def partial(template, assigns) do
    Phoenix.View.render(current_theme_module("PartialView"), template, assigns)
  end
end
