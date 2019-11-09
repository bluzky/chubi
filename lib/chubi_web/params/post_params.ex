defmodule ChubiWeb.PostFilterParams do
  use Params.Schema, %{
    draft: [field: :boolean, default: false],
    q: :string
  }
end
