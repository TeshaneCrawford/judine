import { getInstagramPosts } from "../utils/instagramhandler";

export default defineEventHandler(async (event) => {
  const paginationCode = event.context.params?.code ?? null; // Access query parameters
  const mode = event.context.params?.mode ?? null;

  const additionalParams = mode
    ? mode === "before"
      ? { before: paginationCode }
      : { after: paginationCode }
    : {};

  const outputData = await getInstagramPosts(additionalParams);

  event.node.res.setHeader(
    "Cache-Control",
    "public, s-maxage=3600, stale-while-revalidate=1800"
  );

  return outputData;
});
