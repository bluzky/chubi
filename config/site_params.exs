use Mix.Config

config :chubi,
  theme: "chubi",
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
