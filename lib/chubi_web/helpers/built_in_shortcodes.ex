defmodule ChubiWeb.BuiltInShortCode do
  def render_built_in_shortcode("youtube", %{args: [video_id]}) do
    """
    <div class="embed video-player">
    <iframe class="youtube-player" type="text/html" width="640" height="385" src="https://www.youtube.com/embed/#{
      video_id
    }" allowfullscreen frameborder="0">
    </iframe>
    </div>
    """
  end

  def render_built_in_shortcode("vimeo", %{args: [video_id]}) do
    """
    <iframe src="https://player.vimeo.com/video/#{video_id}" width="640" height="360" frameborder="0" allow="autoplay; fullscreen" allowfullscreen></iframe>
    """
  end

  def render_built_in_shortcode("gist", %{args: [id]}) do
    """
    <script src="https://gist.github.com/bluzky/#{id}.js"></script>
    """
  end

  def render_built_in_shortcode(_, _), do: nil
end
