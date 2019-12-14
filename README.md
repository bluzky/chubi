# Chubi supports theme 🎉

Log in to Admin space and select a theme from the dropdown. Refresh the front page to apply new theme.

# Chubi
Chubi is a simple blog, it can be easily customize and add new functions.
Inspired by Hugo static site generator, and I want a simple admin interface to write new post instead of rebuild and deploy website.

# Demo
This is demo blog

- [Front page](http://demo.sachcuabo.com)
- [Admin](http://demo.sachcuabo.com/admin)

```
username: admin
password: 123123
```


I build 2 site with Chubi
- [Chagioca](http://chagioca.com)
- [Sample blog](http://bluzky.sachcuabo.com/)



# Document

1. [About `Chubi`](docs/1.what_is_chu_bi.md)
2. [Getting started](docs/2.Getting started.md)
3. [Start writing](docs/3.Start writing.md)
4. [Configuration](docs/4.Configuration.md)
5. [Theme directory structure](docs/5.Theme directory structure.md)
6. [Template look up](docs/6.Template look up.md)
7. [Template variables and helper functions](docs/7.Template variables and helper functions.md)
8. [Shortcode](docs/Shortcode.md)

# 1. Install

1. Clone project with `git@github.com:bluzky/chubi.git`
2. Install dependencies with `mix deps.get`
3. Create and migrate your database with `mix ecto.setup`
4. Install Node.js dependencies with `cd assets && npm install && npm run dev`
5. Start Phoenix endpoint with `mix phx.server`

Now you can visit [`localhost:4000`](http://localhost:4000) from your browser.


# 2. Write your first post
Visit [localhost:4000/admin](http://localhost:4000/admin) to use admin functions.

This is login credential
```
username: admin
password: 123123
```

Click button `New post` to start writing a new post
This is the format of a post

```markdown
---
title: this is a title
slug: my-first-post
date: 2019-10-01
categories: CategoryA, CateogryB
tags: Tag1, Tag2
draft: true
cover: "your photo url here"

---

this is excerpt

---

your blog content here

```

 **The post has 3 sections separated by `---`**

## Metadata

- **title**: your post title
- **slug**[optional]: slug in used to access your article, instead of using id. `slug` will be automatically generated from `title` if you don't set it.
- **date**: published date. It is used to order your posts.
- **categories**: List of your post's categorie. If category does not exist, it will be added to database
- **tags**: Your post's tags. It will be added to database if not existing.
- **draft**: Set it to `false` to publish your post.
- **cover**[optional]: Provide a cover photo for your post if your template use it.

## Excerpt[Optional]
The second sections after the Metadata section is post's exerpt

## Post content
If there is only 2 sections, the second section will be used as post content. If there are 3 sections, 3rd section is used as post content


# 3. Create a page
Similar to post, but there are some differences:
- Page has only 2 sections, `metadata` and `content`. 
- Page doesn't have `categories` and `tags`
- Page support `template` options which allow you to set template layout for your page. Templates are stored in `lib/chubi_web/templates/page_templates`

This is a sample page
```markdown
title: this is a page with template
is_draft: false
template: a_custom_template
---

# hello, This is a page with custom template

----
## what is Markdown?
see [Wikipedia](https://en.wikipedia.org/wiki/Markdown)

> Markdown is a lightweight markup language, originally created by John Gruber and Aaron Swartz allowing people "to write using an easy-to-read, easy-to-write plain text format, then convert it to structurally valid XHTML (or HTML)".

----
## usage
1. Write markdown text in this textarea.
2. Click 'HTML Preview' button.
```

# 4. Config file

## Site params
Config file `config/site_params.exs`, this file store config for the website. You can store any kind of information that is used in your template.
This is config file for current template
```elixir
use Mix.Config

config :chubi,
  theme: "chubi", # default theme
  site_params: [
    title: "Dzung Nguyen",
    sub_title: "Blue is Orange",
    intro:
      "Welcome to my personal blog. My name is Dzung Nguyen, I am a full-stack web developer. That's it.",
    ga: "my code",
    author: %{
      fullname: "Dzung Nguyen",
      email: "bluesky.1289@gmail.com",
      avatar: "https://i.pravatar.cc/300",
      bio:
        "Hello! I am Dzung, I like blogging about interesting things. I don't talk much. When talking I don't have time to observe and think a bout the world."
    },
    menu: [
      main: [
        %{
          label: "Home",
          url: "/"
        },
        %{
          label: "Elixir",
          url: "/categories/elixir"
        },
        %{
          label: "Categories",
          url: "/categories"
        },
        %{
          label: "About me",
          url: "/pages/about-me"
        }
      ]
    ]
  ]

```
You can add any key to `site_params`, you can access theme in variable `@site_params` in the template.

## Admin config
Admin credential is store in `config/dev.exs` or `config/prod.exs` depends on your current environment. You should change it to your username and password.

```
config :chubi,
  auth_config: [
    username: "admin",
    password: "123123",
    realm: "Hey! Log in to admin"
  ]
```

## Upload file config
```elixir
config :belt, Belt.Provider.Filesystem,
  default: [directory: Path.expand("priv/uploads"), base_url: "http://localhost:4000/uploads/"],
  directory: ""
```
For my project, I store uploaded file locally in directory `priv/uploads` and serve themes at `/uploads`. To generate correct url for your uploaded file, you must replace `base_url: "http://localhost:4000/uploads/"]` to `base_url: "<your_host>/uploads/"]`

[Belt](https://hex.pm/packages/belt) provide `S3 provider` and `SFTP provider`, so you can easily edit project to store your file on S3 or FTP server. 

# 5. Features
- Easy to customize template
- Simple admin interface
- Support Page and Post
- Support Shortcode
- Support Mardown format


# 6. What it doesn't support
- Comment: You can use Disqu or Facebook comment plugin, so I wan to keep it as simple as possible
- User and permission management: It's not an essential functions of a blog. I use Basic Auth for admin authentication. You can roll out your own user management functions.
- Media library: it is nice to have, but I don't want to make it too compicated.



# 7. Credit
- Blog template [Clean blog](https://startbootstrap.com/themes/clean-blog/)
- Admin template [Tabler admin template](https://preview.tabler.io/index.html)
