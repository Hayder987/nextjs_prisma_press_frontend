"use server";

import { createSearchParams } from "@/utils/searchParams";


export const getAllNews = async ({
  query,
}: {
  query?: { [key: string]: string | string[] | undefined };
}) => {
  

//   const params = new URLSearchParams();
//   if (query && query.searchTerm)
//     params.set("searchTerm", query.searchTerm as string);
//   if (query && query.title) params.set("title", query.title as string);
//   if (query && query.content) params.set("content", query.content as string);
//   if (query && query.searchTerm)
//     params.set("searchTerm", query.searchTerm as string);
//   if (query && query.sortBy) params.set("sortBy", query.sortBy as string);
//   if (query && query.sortOrder)
//     params.set("sortOrder", query.sortOrder as string);
//   if (query && query?.tags) {
//     params.set(
//       "tags",
//       Array.isArray(query.tags) ? query.tags.join(",") : query.tags,
//     );
//   }
//   if (query && query.limit) params.set("limit", String(query.limit as string));
//   if (query && query.page) params.set("page", String(query.page as string));


// using reusable function

 const params = createSearchParams({query})


  const res = await fetch(`${process.env.BACKEND_API_URL}/api/posts?${params.toString()}`, {
    cache: "no-cache",
    next: {
      revalidate: 60 * 60 * 4,
      tags: ["all-news"],
    },
  });

  const result = await res.json();
  return result;
};
