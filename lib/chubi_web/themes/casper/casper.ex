defmodule CasperTheme do
  def view do
    quote do
      use Phoenix.View,
        root: "lib/chubi_web/themes/casper/templates",
        namespace: ChubiWeb

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

      def partial(name, assigns) do
        render(ChubiWeb.PartialView, name, assigns)
      end

      # Use all HTML functionality (forms, tags, etc)
      use Phoenix.HTML
      import ChubiWeb.ErrorHelpers
      import ChubiWeb.ViewHelpers
      import ChubiWeb.ShortCodeHelpers, only: [compile_shortcode: 2, compile_shortcode: 1]
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
