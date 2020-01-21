defmodule ChubiWeb.Themes.Casper2 do
  def info do
    %{
      name: "Casper2",
      author: "Author",
      email: "your email",
      description: "This is a basic theme",
      thumbnail: "",
      repo: ""
    }
  end

  def view do
    quote do
      use Phoenix.View,
        root: "lib/chubi_web/themes/casper2/templates",
        namespace: ChubiWeb.Themes.Casper2

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
