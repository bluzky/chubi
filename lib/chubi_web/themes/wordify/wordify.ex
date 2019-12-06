defmodule ChubiWeb.Themes.Wordify do
  def info do
    %{
      name: "Wordify",
      author: "Dzung Nguyen",
      email: "blusky.1289@gmail.com",
      description: "Wordify is a simple blog theme with sidebar",
      thumbnail: "",
      repo: ""
    }
  end

  def view do
    quote do
      use Phoenix.View,
        root: "lib/chubi_web/themes/wordify/templates",
        namespace: ChubiWeb.Themes.Wordify

      use ChubiWeb, :view
    end
  end

  @doc """
  When used, dispatch to the appropriate controller/view/etc.
  """
  defmacro __using__(which) when is_atom(which) do
    apply(__MODULE__, which, [])
  end
end
