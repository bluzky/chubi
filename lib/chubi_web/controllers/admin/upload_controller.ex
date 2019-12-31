defmodule ChubiWeb.Admin.UploadController do
  use ChubiWeb, :controller

  alias Chubi.Uploader

  def create(conn, %{"file" => file}) do
    case Uploader.store(file) do
      {:ok, %{identifier: identifier}} ->
        json(conn, %{
          status: "OK",
          data: %{
            url: Uploader.url(identifier),
            identifier: identifier,
            path: Routes.static_path(conn, "/uploads/#{identifier}")
          }
        })

      {:error, err} ->
        json(conn, %{status: "ERROR", message: "Cannot upload file"})
    end
  end

  def delete(conn, %{"file" => identifier}) do
    case Uploader.delete(identifier) do
      {:ok, %{identifier: identifier}} ->
        json(conn, %{status: "OK", data: %{message: "File is deleted"}})

      {:error, err} ->
        json(conn, %{status: "ERROR", message: "Cannot delete file"})
    end
  end
end
