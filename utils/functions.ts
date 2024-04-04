interface QueryParams {
  [key: string]: string | number;
}
export function generateUrl(baseUrl: string, queryParams: QueryParams): string {
  const queryString = Object.entries(queryParams)
    .map(
      ([key, value]) =>
        `${encodeURIComponent(key)}=${encodeURIComponent(String(value))}`
    )
    .join("&");
  return `${baseUrl}?${queryString}`;
}