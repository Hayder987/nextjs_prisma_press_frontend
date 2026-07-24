"use server";

import { cookies } from "next/headers";

export const getPremiumNews = async ({
  query,
}: {
  query?: { [key: string]: string | string[] | undefined };
}) => {
                    
  const params = new URLSearchParams(); //javascript class use

  if (query && query.title) params.set("title", query.title as string);
  if (query && query.content) params.set("content", query.content as string);
  if (query && query.searchTerm) params.set("searchTerm", query.searchTerm as string);
  if (query && query.sortBy) params.set("sortBy", query.sortBy as string);
  if (query && query.sortOrder) params.set("sortOrder", query.sortOrder as string);
  if (query && query?.tags) {
  params.set(
    "tags",
    Array.isArray(query.tags) ? query.tags.join(",") : query.tags
  );
}
  if (query && query.limit) params.set("limit", String(query.limit as string));
  if (query && query.page) params.set("page", String(query.page as string));


  const cookieStore = await cookies();

  const accessToken = cookieStore.get("accessToken")?.value || null;

  if (!accessToken) {
    return {
      success: false,
      message: "User not logged in!",
    };
  }

  const res = await fetch(`${process.env.BACKEND_API_URL}/api/premium/posts?${params.toString()}`, {
    headers: {
      // Authorization : accessToken as unknown as string,
      // Authorization : `${accessToken}`,
      // Authorization : `Bearer ${accessToken}`

      Cookie: `accessToken=${accessToken}`,
    },
    cache: "no-cache",
    next: {
      revalidate: 60 * 60 * 6,
      tags: ["premium-posts"],
    },
  });

  const result = await res.json();

  return result;
};
