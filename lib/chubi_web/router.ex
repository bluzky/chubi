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

  pipeline :preview do
    plug(BasicAuth, use_config: {:chubi, :auth_config})
  end

  pipeline :app do
    plug(ChubiWeb.Plugs.PutBlogInfo)
  end

  scope "/", ChubiWeb do
    pipe_through([:browser, :app])
    get("/", PageController, :index)
    get("/posts", PostController, :index)
    get("/posts/:slug", PostController, :show)
    get("/category/:slug", PostController, :by_category)
    get("/pages/:slug", PageController, :show)
    get("/tags", TagController, :index)
    get("/categories", CategoryController, :index)
    get("/categories/:slug", CategoryController, :show)
  end

  scope "/preview", ChubiWeb do
    pipe_through([:browser, :preview, :app])

    get("/posts/:id", PreviewController, :show_post)
    get("/pages/:id", PreviewController, :show_page)
  end

  scope "/admin", ChubiWeb.Admin, as: "admin" do
    pipe_through([:browser, :admin])
    get("/", PageController, :index)
    resources("/tags", TagController)
    resources("/categories", CategoryController)
    resources("/posts", PostController)
    resources("/pages", PageController)

    post("/upload", UploadController, :create)
    delete("/upload", UploadController, :delete)
  end
end
