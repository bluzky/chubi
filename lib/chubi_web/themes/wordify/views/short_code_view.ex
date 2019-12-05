defmodule ChubiWeb.Themes.Wordify.ShortCodeView do
  use ChubiWeb.Themes.Wordify, :view

  def render_shortcode("youtube", %{args: [video_id]}) do
    """
    <div class="embed video-player">
    <iframe class="youtube-player" type="text/html" width="640" height="385" src="https://www.youtube.com/embed/#{
      video_id
    }" allowfullscreen frameborder="0">
    </iframe>
    </div>
    """
  end

  def render_shortcode(name, assigns) do
    Phoenix.View.render_existing(ChubiWeb.ShortCodeView, "#{name}.html", assigns)
  end
end
