defmodule ChubiWeb.ThemeHelpers do
  def theme_module(suffix \\ nil) do
    theme = Application.get_env(:chubi, :theme)
    module_name = "ChubiWeb.Themes.#{Phoenix.Naming.camelize(theme)}"

    if suffix do
      String.to_atom("#{module_name}.#{suffix}")
    else
      String.to_existing_atom(module_name)
    end
  end
end
