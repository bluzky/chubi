defmodule Chubi.Application do
  # See https://hexdocs.pm/elixir/Application.html
  # for more information on OTP Applications
  @moduledoc false

  use Application

  def start(_type, _args) do
    # List all child processes to be supervised
    children = [
      # Start the Ecto repository
      Chubi.Repo,
      # Start the endpoint when the application starts
      ChubiWeb.Endpoint,
      {ConCache, [name: :db_cache, ttl_check_interval: false]}
      # Starts a worker by calling: Chubi.Worker.start_link(arg)
      # {Chubi.Worker, arg},
    ]

    # See https://hexdocs.pm/elixir/Supervisor.html
    # for other strategies and supported options
    opts = [strategy: :one_for_one, name: Chubi.Supervisor]
    rs = Supervisor.start_link(children, opts)

    Chubi.DataImporter.import_all()

    rs
  end

  # Tell Phoenix to update the endpoint configuration
  # whenever the application is updated.
  def config_change(changed, _new, removed) do
    ChubiWeb.Endpoint.config_change(changed, removed)
    :ok
  end
end
