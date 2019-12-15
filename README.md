
# Chubi
Chubi is a simple blog, it can be easily customize and add new functions.

[Demo](#demo)
[Document](#document)

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

1. [About `Chubi`](docs/1.what_is_chubi.md)
2. [Getting started](docs/2.getting_started.md)
3. [Start writing](docs/3.start_writing.md)
4. [Configuration](docs/4.Configuration.md)
5. [Create new theme](docs/5.create_new_theme.md)
6. [Template look up](docs/6.template_look_up.md)
7. [Template variables and helper functions](docs/7.template_variables_and_helper_functions.md)
8. [Shortcode](docs/8.Shortcode.md)

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


# 3. Features
- Easy to customize template
- Simple admin interface
- Support Page and Post
- Support Shortcode
- Support Mardown format
- Support theme


# 4. What it doesn't support
- Comment: You can use Disqu or Facebook comment plugin, so I wan to keep it as simple as possible
- User and permission management: It's not an essential functions of a blog. I use Basic Auth for admin authentication. You can roll out your own user management functions.
- Media library: it is nice to have, but I don't want to make it too compicated.



# 5. Credit
- Blog template [Clean blog](https://startbootstrap.com/themes/clean-blog/)
- Admin template [Tabler admin template](https://preview.tabler.io/index.html)
