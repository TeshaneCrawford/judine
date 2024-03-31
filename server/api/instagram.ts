import type { InstagramMedia } from "~/types/instagram-post";

interface InstagramResponse {
  data: InstagramMedia[]
}

export default defineEventHandler(async (event) => {
  const accessToken = '';

  const response = await fetch(
    `https://graph.instagram.com/me/media?fields=id,media_type,media_url,caption&access_token=${accessToken}`
  );

  const data: InstagramResponse = await response.json();
  return data;
});
