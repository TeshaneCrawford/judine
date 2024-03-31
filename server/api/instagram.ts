import { InstagramMedia } from "~/types/instagram-post";

interface InstagramResponse {
  data: InstagramMedia[]
}

export default defineEventHandler(async (event) => {
  const accessToken = 'IGQWRORjN3dTBRSnFMUThjaHp6WEhkbzlQdl95dkNNU3R0UUtnVGtWVV8tRER3RzltZA2oxWFZA2VktnVzhvTTN6ZAWVQdTFNNWRrbGs1XzhocmtDX0NvdU1aMXFLeWR6dXoxTlYxMWl3VWdPUFAtQVU0SVlRcjVWQ0EZD';

  const response = await fetch(
    `https://graph.instagram.com/me/media?fields=id,media_type,media_url,caption&access_token=${accessToken}`
  );

  const data: InstagramResponse = await response.json();
  return data;
});
