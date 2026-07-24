import { NewsCard } from "@/app/(publicGroup)/_components/news/NewsCard";
import { IPost } from "@/lib/types";
import { getPremiumNews } from "../../_actions/getPremiumNews";
import PremiumPagination from "./PremiumPagination";
import { Suspense } from "react";
import { NewsSkeleton } from "./NewsSkeleton";


export async function PremiumNewsList({
  searchParams,
}: {
  searchParams?: Promise<{ [key: string]: string | string[] | undefined }>
}) {

   const query = await searchParams;
  const result = await getPremiumNews({query});

  if (!result.success || !result.data?.length) {
    return (
      <p className="py-12 text-center text-muted-foreground">
        No news found.
      </p>
    );
  }

  return (
    <div className="space-y-8">
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {result.data.map((post: IPost) => (
          <NewsCard key={post.id} post={post} />
        ))}
      </div>
     
        <div className="">
        {
          result?.data.length > 0 ? (
            <PremiumPagination meta={result?.meta}/>
          ): ''
        }
      </div>

    </div>
  );
}
