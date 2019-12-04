defmodule ChubiWeb.ThemeHelpers do
  def theme_module(suffix \\ nil) do
    theme = Application.get_env(:chubi, :theme)
    module_name = "Elixir.ChubiWeb.Themes.#{Phoenix.Naming.camelize(theme)}"

    if suffix do
      String.to_existing_atom("#{module_name}.#{suffix}")
    else
      String.to_existing_atom(module_name)
    end
  end

  def theme_directory(suffix \\ "") do
    theme = Application.get_env(:chubi, :theme)

    "lib/chubi_web/themes/#{theme}"
    |> Path.join(suffix)
  end

  def theme_name do
    Application.get_env(:chubi, :theme)
  end

  def partial(template, assigns) do
    Phoenix.View.render(theme_module("PartialView"), template, assigns)
  end
end
