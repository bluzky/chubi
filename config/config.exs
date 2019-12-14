# This file is responsible for configuring your application
# and its dependencies with the aid of the Mix.Config module.
#
# This configuration file is loaded before any dependency and
# is restricted to this project.

# General application configuration
use Mix.Config

{site_config, _} = Code.eval_file("config/site_params.exs")
base_uri = URI.parse(site_config[:base_url] || "http://localhost:4000/")

config :chubi,
  ecto_repos: [Chubi.Repo]

# Configures the endpoint
config :chubi, ChubiWeb.Endpoint,
  url: [host: base_uri.host, port: 80],
  secret_key_base: "rRJ5y7cSEORj3g/KmlDJTut4Z+0Y1v2w0ieqnln4Gw94Q43DQWo8DuHnwxj6C55F",
  render_errors: [view: ChubiWeb.ErrorView, accepts: ~w(html json)],
  pubsub: [name: Chubi.PubSub, adapter: Phoenix.PubSub.PG2]

# Configures Elixir's Logger
config :logger, :console,
  format: "$time $metadata[$level] $message\n",
  metadata: [:request_id]

# Use Jason for JSON parsing in Phoenix
config :phoenix, :json_library, Jason

# Import environment specific config. This must remain at the bottom
# of this file so it overrides the configuration defined above.

config :chubi, site_config

# config upload directory and base url for uploader
config :belt, Belt.Provider.Filesystem,
  default: [
    directory: Path.expand("priv/uploads"),
    base_url: URI.merge(base_uri, "/uploads/") |> to_string()
  ]

import_config "#{Mix.env()}.exs"
