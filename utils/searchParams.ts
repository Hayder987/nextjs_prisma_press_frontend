
export const createSearchParams = ({
  query,
}: {
  query?: { [key: string]: string | string[] | undefined };
}) =>{
    
  const params = new URLSearchParams();

  if (query && query.searchTerm)
    params.set("searchTerm", query.searchTerm as string);
  if (query && query.title) params.set("title", query.title as string);
  if (query && query.content) params.set("content", query.content as string);
  if (query && query.searchTerm)
    params.set("searchTerm", query.searchTerm as string);
  if (query && query.sortBy) params.set("sortBy", query.sortBy as string);
  if (query && query.sortOrder)
    params.set("sortOrder", query.sortOrder as string);
  if (query && query?.tags) {
    params.set(
      "tags",
      Array.isArray(query.tags) ? query.tags.join(",") : query.tags,
    );
  }
  if (query && query.limit) params.set("limit", String(query.limit as string));
  if (query && query.page) params.set("page", String(query.page as string));

  return params;
}