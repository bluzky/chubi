defmodule ChubiWeb.PostFilterParams do
  use Params.Schema, %{
    is_draft: [field: :boolean, default: false],
    q: :string
  }
end
