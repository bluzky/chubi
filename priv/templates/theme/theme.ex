defmodule ChubiWeb.Themes.<%= theme_module %> do
  def info do
    %{
      name: "<%= theme_module %>",
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
        root: "lib/chubi_web/themes/<%= theme_identifier %>/templates",
        namespace: ChubiWeb.Themes.<%= theme_module %>

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
