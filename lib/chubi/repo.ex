defmodule Chubi.Repo do
  # use Ecto.Repo,
  #   otp_app: :chubi,
  #   adapter: Ecto.Adapters.Postgres

  use Ecto.Repo, otp_app: :chubi, adapter: Etso.Adapter
end
