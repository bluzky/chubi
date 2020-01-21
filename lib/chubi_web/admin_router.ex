defmodule ChubiWeb.AdminRouter do
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
    plug(ChubiWeb.Plugs.PutSiteSetting)
    plug(ChubiWeb.Plugs.LoadSiteParams)
  end

  pipeline :preview do
    plug(BasicAuth, use_config: {:chubi, :auth_config})
  end

  pipeline :app do
    plug(ChubiWeb.Plugs.PutSiteSetting)
    plug(ChubiWeb.Plugs.LoadSiteParams)
    # put this at end of pipeline
    plug(ChubiWeb.Plugs.PutSiteLayout)
  end

  scope "/", ChubiWeb.Admin, path: "/admin" do
    pipe_through([:browser, :admin])
    get("/", PostController, :index)
    resources("/tags", TagController)
    resources("/categories", CategoryController)
    resources("/posts", PostController)
    resources("/pages", PageController)

    post("/upload", UploadController, :create)
    delete("/upload", UploadController, :delete)

    get("/settings/set_theme", SettingController, :set_theme)
    get("/settings/export", SettingController, :export_content)
    post("/settings/import", SettingController, :import_content)
  end
end
