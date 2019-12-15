defmodule ChubiWeb.Themes.Simple do
  def info do
    %{
      name: "Simple",
      author: "Dzung Nguyen",
      email: "blusky.1289@gmail.com",
      description: "This is a basic theme",
      thumbnail: "",
      repo: ""
    }
  end

  def view do
    quote do
      use Phoenix.View,
        root: "lib/chubi_web/themes/simple/templates",
        namespace: ChubiWeb.Themes.Simple

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
