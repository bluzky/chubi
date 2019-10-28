defmodule <%= inspect schema.module %> do
  use Ecto.Schema
  import Ecto.Changeset

  <%= if schema.binary_id do %>
  @primary_key {:id, :binary_id, autogenerate: true}
  @foreign_key_type :binary_id<% end %>
  schema <%= inspect schema.table %> do
    <%= for {k, v} <- schema.types do %>
    field <%= inspect k %>, <%= inspect v %><%= schema.defaults[k] %>
    <% end %>
    <%= for {_, k, _, _} <- schema.assocs do %>
    field <%= inspect k %>, <%= if schema.binary_id do %>:binary_id<% else %>:id<% end %>
    <% end %>
    timestamps()
  end

  @default_fields [
    :id,
    :inserted_at,
    :updated_at
  ]

  @required_fields [
  ]

  @doc false
  def changeset(<%= schema.singular %>, attrs) do
    <%= schema.singular %>
    |> cast(attrs, __MODULE__.__schema__(:fields) -- @default_fields)
    |> validate_required(@required_fields)
    <%= for k <- schema.uniques do %>
    |> unique_constraint(<%= inspect k %>)
    <% end %>
  end

  def fields() do
    opts = [
    ]

    Enum.map(__MODULE__.__schema__(:fields) -- @default_fields, fn f ->
      {f, __MODULE__.__schema__(:type, f), [required: f in @required_fields] ++ (opts[f] || [])}
    end)
  end
end
