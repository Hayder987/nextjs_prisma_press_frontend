import React from "react";
import { getPremiumNewsById } from "../../_actions/getPremiumNewsById";
import PostDetails from "../../_components/news/PostDetails";

const PremiumSingleNewsPage = async ({
  params,
}: {
  params: Promise<{ id: string }>;
}) => {
  const { id } = await params;

  const post = await getPremiumNewsById({ id });

  if (!post.success) {
    return <div className="text-center py-10 text-xl">Post not found</div>;
  }

  return (
    <div>
      <PostDetails mode={"premium"} post={post?.data} />
    </div>
  );
};

export default PremiumSingleNewsPage;
