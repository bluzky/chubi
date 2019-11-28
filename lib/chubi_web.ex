defmodule ChubiWeb do
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

  def controller do
    quote do
      use Phoenix.Controller, namespace: ChubiWeb

      import Plug.Conn
      import ChubiWeb.Gettext
      alias ChubiWeb.Router.Helpers, as: Routes
    end
  end

  def view do
    quote do
      use Phoenix.View,
        root: "lib/chubi_web/templates",
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

  def admin_controller do
    quote do
      use Phoenix.Controller, namespace: ChubiWeb

      import Plug.Conn
      import ChubiWeb.Gettext
      alias ChubiWeb.Router.Helpers, as: Routes
    end
  end

  def admin_view do
    quote do
      use Phoenix.View,
        root: "lib/chubi_web/templates",
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

      # Use all HTML functionality (forms, tags, etc)
      use Phoenix.HTML

      import ChubiWeb.ErrorHelpers
      import ChubiWeb.Admin.InputHelpers
      import ChubiWeb.Admin.ViewHelpers
      import ChubiWeb.Gettext
      alias ChubiWeb.Router.Helpers, as: Routes
    end
  end

  def router do
    quote do
      use Phoenix.Router
      import Plug.Conn
      import Phoenix.Controller
    end
  end

  def channel do
    quote do
      use Phoenix.Channel
      import ChubiWeb.Gettext
    end
  end

  @doc """
  When used, dispatch to the appropriate controller/view/etc.
  """
  defmacro __using__(which) when is_atom(which) do
    apply(__MODULE__, which, [])
  end
end
