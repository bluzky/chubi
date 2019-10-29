defmodule Chubi do
  @moduledoc """
  Chubi keeps the contexts that define your domain
  and business logic.

  Contexts are also responsible for managing your data, regardless
  if it comes from the database, an external API or others.
  """
  def model do
    quote do
      use Ecto.Schema
      import Ecto.Changeset
      alias Chubi.EctoUtils
    end
  end

  def query do
    quote do
      alias Chubi.Filter
      alias Chubi.Paginator
      alias Chubi.EctoUtils
      import Ecto.Query
    end
  end

  def business do
    quote do
      alias Chubi.Filter
      alias Chubi.Paginator
      import Ecto.Query
      alias Chubi.Repo
    end
  end

  defmacro __using__(which) when is_atom(which) do
    apply(__MODULE__, which, [])
  end
end
