defmodule ChubiWeb.Router do
  use ChubiWeb, :router

  pipeline :browser do
    plug(:accepts, ["html"])
    plug(:fetch_session)
    plug(:fetch_flash)
    plug(:protect_from_forgery)
    plug(:put_secure_browser_headers)
  end

  pipeline :admin do
    plug(:put_layout, {ChubiWeb.Admin.LayoutView, "app.html"})
    plug(BasicAuth, use_config: {:chubi, :auth_config})
  end

  pipeline :app do
  end

  scope "/", ChubiWeb do
    pipe_through(:browser)
    get("/", PostController, :index)
    get("/posts/:slug", PostController, :show)
    get("/category/:slug", PostController, :by_category)
  end

  scope "/admin", ChubiWeb.Admin, as: "admin" do
    pipe_through([:browser, :admin])
    get("/", PageController, :index)
    resources("/tags", TagController)
    resources("/categories", CategoryController)
    resources("/posts", PostController)
  end
end
