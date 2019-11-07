defmodule Chubi.ContentTest do
  use Chubi.DataCase

  alias Chubi.Content

  describe "posts" do
    alias Chubi.Content.Post

    @valid_attrs %{
      content: "some content",
      excerpt: "some excerpt",
      format: "some format",
      is_draft: true,
      date: "2010-04-17T14:00:00Z",
      title: "some title"
    }
    @update_attrs %{
      content: "some updated content",
      excerpt: "some updated excerpt",
      format: "some updated format",
      is_draft: false,
      date: "2011-05-18T15:01:01Z",
      title: "some updated title"
    }
    @invalid_attrs %{
      content: nil,
      excerpt: nil,
      format: nil,
      is_draft: nil,
      date: nil,
      title: nil
    }

    def post_fixture(attrs \\ %{}) do
      {:ok, post} =
        attrs
        |> Enum.into(@valid_attrs)
        |> Content.create_post()

      post
    end

    test "list_posts/0 returns all posts" do
      post = post_fixture()
      assert Content.list_posts() == [post]
    end

    test "get_post!/1 returns the post with given id" do
      post = post_fixture()
      assert Content.get_post!(post.id) == post
    end

    test "create_post/1 with valid data creates a post" do
      assert {:ok, %Post{} = post} = Content.create_post(@valid_attrs)
      assert post.content == "some content"
      assert post.excerpt == "some excerpt"
      assert post.format == "some format"
      assert post.is_draft == true
      assert post.date == DateTime.from_naive!(~N[2010-04-17T14:00:00Z], "Etc/UTC")
      assert post.title == "some title"
    end

    test "create_post/1 with invalid data returns error changeset" do
      assert {:error, %Ecto.Changeset{}} = Content.create_post(@invalid_attrs)
    end

    test "update_post/2 with valid data updates the post" do
      post = post_fixture()
      assert {:ok, %Post{} = post} = Content.update_post(post, @update_attrs)
      assert post.content == "some updated content"
      assert post.excerpt == "some updated excerpt"
      assert post.format == "some updated format"
      assert post.is_draft == false
      assert post.date == DateTime.from_naive!(~N[2011-05-18T15:01:01Z], "Etc/UTC")
      assert post.title == "some updated title"
    end

    test "update_post/2 with invalid data returns error changeset" do
      post = post_fixture()
      assert {:error, %Ecto.Changeset{}} = Content.update_post(post, @invalid_attrs)
      assert post == Content.get_post!(post.id)
    end

    test "delete_post/1 deletes the post" do
      post = post_fixture()
      assert {:ok, %Post{}} = Content.delete_post(post)
      assert_raise Ecto.NoResultsError, fn -> Content.get_post!(post.id) end
    end

    test "change_post/1 returns a post changeset" do
      post = post_fixture()
      assert %Ecto.Changeset{} = Content.change_post(post)
    end
  end

  describe "pages" do
    alias Chubi.Content.Page

    @valid_attrs %{
      content: "some content",
      cover: "some cover",
      format: "some format",
      html_content: "some html_content",
      is_draft: true,
      slug: "some slug",
      title: "some title"
    }
    @update_attrs %{
      content: "some updated content",
      cover: "some updated cover",
      format: "some updated format",
      html_content: "some updated html_content",
      is_draft: false,
      slug: "some updated slug",
      title: "some updated title"
    }
    @invalid_attrs %{
      content: nil,
      cover: nil,
      format: nil,
      html_content: nil,
      is_draft: nil,
      slug: nil,
      title: nil
    }

    def page_fixture(attrs \\ %{}) do
      {:ok, page} =
        attrs
        |> Enum.into(@valid_attrs)
        |> Content.create_page()

      page
    end

    test "list_pages/0 returns all pages" do
      page = page_fixture()
      assert Content.list_pages() == [page]
    end

    test "get_page!/1 returns the page with given id" do
      page = page_fixture()
      assert Content.get_page!(page.id) == page
    end

    test "create_page/1 with valid data creates a page" do
      assert {:ok, %Page{} = page} = Content.create_page(@valid_attrs)
      assert page.content == "some content"
      assert page.cover == "some cover"
      assert page.format == "some format"
      assert page.html_content == "some html_content"
      assert page.is_draft == true
      assert page.slug == "some slug"
      assert page.title == "some title"
    end

    test "create_page/1 with invalid data returns error changeset" do
      assert {:error, %Ecto.Changeset{}} = Content.create_page(@invalid_attrs)
    end

    test "update_page/2 with valid data updates the page" do
      page = page_fixture()
      assert {:ok, %Page{} = page} = Content.update_page(page, @update_attrs)
      assert page.content == "some updated content"
      assert page.cover == "some updated cover"
      assert page.format == "some updated format"
      assert page.html_content == "some updated html_content"
      assert page.is_draft == false
      assert page.slug == "some updated slug"
      assert page.title == "some updated title"
    end

    test "update_page/2 with invalid data returns error changeset" do
      page = page_fixture()
      assert {:error, %Ecto.Changeset{}} = Content.update_page(page, @invalid_attrs)
      assert page == Content.get_page!(page.id)
    end

    test "delete_page/1 deletes the page" do
      page = page_fixture()
      assert {:ok, %Page{}} = Content.delete_page(page)
      assert_raise Ecto.NoResultsError, fn -> Content.get_page!(page.id) end
    end

    test "change_page/1 returns a page changeset" do
      page = page_fixture()
      assert %Ecto.Changeset{} = Content.change_page(page)
    end
  end
end
