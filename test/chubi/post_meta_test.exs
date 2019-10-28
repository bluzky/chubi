defmodule Chubi.PostMetaTest do
  use Chubi.DataCase

  alias Chubi.PostMeta

  describe "tags" do
    alias Chubi.PostMeta.Tag

    @valid_attrs %{name: "some name", slug: "some slug"}
    @update_attrs %{name: "some updated name", slug: "some updated slug"}
    @invalid_attrs %{name: nil, slug: nil}

    def tag_fixture(attrs \\ %{}) do
      {:ok, tag} =
        attrs
        |> Enum.into(@valid_attrs)
        |> PostMeta.create_tag()

      tag
    end

    test "list_tags/0 returns all tags" do
      tag = tag_fixture()
      assert PostMeta.list_tags() == [tag]
    end

    test "get_tag!/1 returns the tag with given id" do
      tag = tag_fixture()
      assert PostMeta.get_tag!(tag.id) == tag
    end

    test "create_tag/1 with valid data creates a tag" do
      assert {:ok, %Tag{} = tag} = PostMeta.create_tag(@valid_attrs)
      assert tag.name == "some name"
      assert tag.slug == "some slug"
    end

    test "create_tag/1 with invalid data returns error changeset" do
      assert {:error, %Ecto.Changeset{}} = PostMeta.create_tag(@invalid_attrs)
    end

    test "update_tag/2 with valid data updates the tag" do
      tag = tag_fixture()
      assert {:ok, %Tag{} = tag} = PostMeta.update_tag(tag, @update_attrs)
      assert tag.name == "some updated name"
      assert tag.slug == "some updated slug"
    end

    test "update_tag/2 with invalid data returns error changeset" do
      tag = tag_fixture()
      assert {:error, %Ecto.Changeset{}} = PostMeta.update_tag(tag, @invalid_attrs)
      assert tag == PostMeta.get_tag!(tag.id)
    end

    test "delete_tag/1 deletes the tag" do
      tag = tag_fixture()
      assert {:ok, %Tag{}} = PostMeta.delete_tag(tag)
      assert_raise Ecto.NoResultsError, fn -> PostMeta.get_tag!(tag.id) end
    end

    test "change_tag/1 returns a tag changeset" do
      tag = tag_fixture()
      assert %Ecto.Changeset{} = PostMeta.change_tag(tag)
    end
  end

  describe "categories" do
    alias Chubi.PostMeta.Category

    @valid_attrs %{name: "some name", slug: "some slug"}
    @update_attrs %{name: "some updated name", slug: "some updated slug"}
    @invalid_attrs %{name: nil, slug: nil}

    def category_fixture(attrs \\ %{}) do
      {:ok, category} =
        attrs
        |> Enum.into(@valid_attrs)
        |> PostMeta.create_category()

      category
    end

    test "list_categories/0 returns all categories" do
      category = category_fixture()
      assert PostMeta.list_categories() == [category]
    end

    test "get_category!/1 returns the category with given id" do
      category = category_fixture()
      assert PostMeta.get_category!(category.id) == category
    end

    test "create_category/1 with valid data creates a category" do
      assert {:ok, %Category{} = category} = PostMeta.create_category(@valid_attrs)
      assert category.name == "some name"
      assert category.slug == "some slug"
    end

    test "create_category/1 with invalid data returns error changeset" do
      assert {:error, %Ecto.Changeset{}} = PostMeta.create_category(@invalid_attrs)
    end

    test "update_category/2 with valid data updates the category" do
      category = category_fixture()
      assert {:ok, %Category{} = category} = PostMeta.update_category(category, @update_attrs)
      assert category.name == "some updated name"
      assert category.slug == "some updated slug"
    end

    test "update_category/2 with invalid data returns error changeset" do
      category = category_fixture()
      assert {:error, %Ecto.Changeset{}} = PostMeta.update_category(category, @invalid_attrs)
      assert category == PostMeta.get_category!(category.id)
    end

    test "delete_category/1 deletes the category" do
      category = category_fixture()
      assert {:ok, %Category{}} = PostMeta.delete_category(category)
      assert_raise Ecto.NoResultsError, fn -> PostMeta.get_category!(category.id) end
    end

    test "change_category/1 returns a category changeset" do
      category = category_fixture()
      assert %Ecto.Changeset{} = PostMeta.change_category(category)
    end
  end

  describe "post_tags" do
    alias Chubi.PostMeta.PostTag

    @valid_attrs %{}
    @update_attrs %{}
    @invalid_attrs %{}

    def post_tag_fixture(attrs \\ %{}) do
      {:ok, post_tag} =
        attrs
        |> Enum.into(@valid_attrs)
        |> PostMeta.create_post_tag()

      post_tag
    end

    test "list_post_tags/0 returns all post_tags" do
      post_tag = post_tag_fixture()
      assert PostMeta.list_post_tags() == [post_tag]
    end

    test "get_post_tag!/1 returns the post_tag with given id" do
      post_tag = post_tag_fixture()
      assert PostMeta.get_post_tag!(post_tag.id) == post_tag
    end

    test "create_post_tag/1 with valid data creates a post_tag" do
      assert {:ok, %PostTag{} = post_tag} = PostMeta.create_post_tag(@valid_attrs)
    end

    test "create_post_tag/1 with invalid data returns error changeset" do
      assert {:error, %Ecto.Changeset{}} = PostMeta.create_post_tag(@invalid_attrs)
    end

    test "update_post_tag/2 with valid data updates the post_tag" do
      post_tag = post_tag_fixture()
      assert {:ok, %PostTag{} = post_tag} = PostMeta.update_post_tag(post_tag, @update_attrs)
    end

    test "update_post_tag/2 with invalid data returns error changeset" do
      post_tag = post_tag_fixture()
      assert {:error, %Ecto.Changeset{}} = PostMeta.update_post_tag(post_tag, @invalid_attrs)
      assert post_tag == PostMeta.get_post_tag!(post_tag.id)
    end

    test "delete_post_tag/1 deletes the post_tag" do
      post_tag = post_tag_fixture()
      assert {:ok, %PostTag{}} = PostMeta.delete_post_tag(post_tag)
      assert_raise Ecto.NoResultsError, fn -> PostMeta.get_post_tag!(post_tag.id) end
    end

    test "change_post_tag/1 returns a post_tag changeset" do
      post_tag = post_tag_fixture()
      assert %Ecto.Changeset{} = PostMeta.change_post_tag(post_tag)
    end
  end

  describe "post_categories" do
    alias Chubi.PostMeta.PostCategory

    @valid_attrs %{}
    @update_attrs %{}
    @invalid_attrs %{}

    def post_category_fixture(attrs \\ %{}) do
      {:ok, post_category} =
        attrs
        |> Enum.into(@valid_attrs)
        |> PostMeta.create_post_category()

      post_category
    end

    test "list_post_categories/0 returns all post_categories" do
      post_category = post_category_fixture()
      assert PostMeta.list_post_categories() == [post_category]
    end

    test "get_post_category!/1 returns the post_category with given id" do
      post_category = post_category_fixture()
      assert PostMeta.get_post_category!(post_category.id) == post_category
    end

    test "create_post_category/1 with valid data creates a post_category" do
      assert {:ok, %PostCategory{} = post_category} = PostMeta.create_post_category(@valid_attrs)
    end

    test "create_post_category/1 with invalid data returns error changeset" do
      assert {:error, %Ecto.Changeset{}} = PostMeta.create_post_category(@invalid_attrs)
    end

    test "update_post_category/2 with valid data updates the post_category" do
      post_category = post_category_fixture()
      assert {:ok, %PostCategory{} = post_category} = PostMeta.update_post_category(post_category, @update_attrs)
    end

    test "update_post_category/2 with invalid data returns error changeset" do
      post_category = post_category_fixture()
      assert {:error, %Ecto.Changeset{}} = PostMeta.update_post_category(post_category, @invalid_attrs)
      assert post_category == PostMeta.get_post_category!(post_category.id)
    end

    test "delete_post_category/1 deletes the post_category" do
      post_category = post_category_fixture()
      assert {:ok, %PostCategory{}} = PostMeta.delete_post_category(post_category)
      assert_raise Ecto.NoResultsError, fn -> PostMeta.get_post_category!(post_category.id) end
    end

    test "change_post_category/1 returns a post_category changeset" do
      post_category = post_category_fixture()
      assert %Ecto.Changeset{} = PostMeta.change_post_category(post_category)
    end
  end
end
