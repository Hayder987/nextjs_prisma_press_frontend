import { cookies } from "next/headers";

export const getMyPosts = async () =>{
    const cookieStore = await cookies();
    
      const accessToken = cookieStore.get("accessToken")?.value || null;
    
      if (!accessToken) {
        return {
          success: false,
          message: "User not logged in!",
        };
      }

    
      const res = await fetch(`${process.env.BACKEND_API_URL}/api/posts/my-posts`, {
        headers: {
          // Authorization : accessToken as unknown as string,
          // Authorization : `${accessToken}`,
          // Authorization : `Bearer ${accessToken}`
    
          Cookie: `accessToken=${accessToken}`,
        },
        cache: "force-cache",
        next: {
          revalidate: 60 * 60 * 6,
          tags: ["my-posts"],
        },
      });
    
      const result = await res.json();
   
      return result;
}