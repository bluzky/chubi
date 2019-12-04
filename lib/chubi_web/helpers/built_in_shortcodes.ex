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

  def render_built_in_shortcode(_, _), do: nil
end
