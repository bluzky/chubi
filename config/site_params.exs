use Mix.Config

config :chubi,
  theme: "wordify",
  site_params: [
    title: "Chả giò cá",
    sub_title: "Hương vị của biển",
    intro:
      "Chả giò cá là món ăn đặc sản nổi tiếng của vùng đất Bà Rịa. Chả giò cá là sự kết hợp hài hoà từ rau xanh tươi của núi và cá mềm ngọt từ biển khơi.",
    image: "/images/chagio.jpg",
    ga: "UA-40665301-5",
    author: %{
      fullname: "Chuso Foods",
      email: "bluesky.1289@gmail.com",
      avatar: "/images/logo.png",
      bio:
        "Thấu hiểu được mong muốn về những bữa ăn tươi ngon và an toàn cho gia đình bạn. Chuso Foods lựa chọn và đem đến cho bạn những thực phẩm vệ sinh, an toàn và tốt cho sức khoẻ."
    },
    menu: [
      main: [
        %{
          label: "Trang chủ",
          url: "/"
        },
        %{
          label: "Chả giò cá Châu Đức",
          url: "/pages/cha-gio-ca"
        },
        %{
          label: "Về Chuso Foods",
          url: "/pages/about-us"
        },
        %{
          label: "Liên hệ",
          url: "/pages/contact"
        }
      ]
    ]
  ]
