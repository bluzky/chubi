defmodule ChubiWeb.Themes.Chubi do
  @moduledoc """
  The entrypoint for defining your web interface, such
  as controllers, views, channels and so on.

  This can be used in your application as:

      use ChubiWeb, :controller
      use ChubiWeb, :view

  The definitions below will be executed for every view,
  controller, etc, so keep them short and clean, focused
  on imports, uses and aliases.

  Do NOT define functions inside the quoted expressions
  below. Instead, define any helper function in modules
  and import those modules here.
  """

  def view do
    quote do
      use Phoenix.View,
        root: "lib/chubi_web/themes/#{"chubi"}/templates",
        namespace: ChubiWeb.Themes.Chubi

      import Phoenix.Controller,
        only: [
          get_csrf_token: 0,
          get_flash: 2,
          view_module: 1,
          view_template: 1,
          current_url: 1,
          current_url: 2,
          current_path: 1,
          current_path: 2
        ]

      # Use all HTML functionality (forms, tags, etc)
      use Phoenix.HTML
      import ChubiWeb.ErrorHelpers
      import ChubiWeb.ViewHelpers
      import ChubiWeb.ShortCodeHelpers, only: [compile_shortcode: 2, compile_shortcode: 1]
      import ChubiWeb.ThemeHelpers, only: [partial: 2]
      import ChubiWeb.Gettext
      alias ChubiWeb.Router.Helpers, as: Routes
    end
  end

  @doc """
  When used, dispatch to the appropriate controller/view/etc.
  """
  defmacro __using__(which) when is_atom(which) do
    apply(__MODULE__, which, [])
  end
end
