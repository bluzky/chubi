defmodule ChubiWeb.Themes.Chubi do
  def info do
    %{
      name: "Chubi default theme",
      author: "Dzung Nguyen",
      email: "blusky.1289@gmail.com",
      description: "This is chubi default theme",
      thumbnail: "",
      repo: ""
    }
  end

  def view do
    quote do
      use Phoenix.View,
        root: "lib/chubi_web/themes/chubi/templates",
        namespace: ChubiWeb.Themes.Chubi

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
