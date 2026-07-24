/* eslint-disable @typescript-eslint/no-explicit-any */
"use server"
import { revalidateTag } from "next/cache";
import { cookies } from "next/headers";


type PostState = {
    success: true,
    statusCode: number,
    message: string,
    data: Record<string, any>
}

// create post actions
export const createPost = async (prevState:PostState, formData:FormData)=>{

   const payload = {
        title: formData.get("title"),
        content: formData.get("content"),
        thumbnail: formData.get("thumbnail"),
        tags: (formData.get("tags") as string).split(", "),
        isPremium: formData.get("isPremium") === "on"
    }

    const cookieStore = await cookies();

    const accessToken = cookieStore.get("accessToken")?.value || null;
    
      if (!accessToken) {
        return {
          success: false,
          message: "User not logged in!",
        };
      }

    
      const res = await fetch(`${process.env.BACKEND_API_URL}/api/posts`, {
        method : "POST",
        headers: {
          // Authorization : accessToken as unknown as string,
          // Authorization : `${accessToken}`,
          // Authorization : `Bearer ${accessToken}`
    
          Cookie: `accessToken=${accessToken}`,
          "Content-Type": "application/json",
        },
        body : JSON.stringify(payload)
      });
    
      const result = await res.json();

      if(result.success){
        revalidateTag("my-posts", {
            expire : 0
        })
    }

    if(result.success && result.data.isPremium){
        revalidateTag("premium-posts", {
            expire : 0
        })
    }else{
        revalidateTag("all-news", {
            expire:0
        })
    }
   
      return result;
}

// update post updatePost
export const updatePost = async (postId:string , prevState:PostState, formData:FormData)=>{

    const payload = {
        title: formData.get("title") ?? "",
        content: formData.get("content") ?? "",
        thumbnail: formData.get("thumbnail") ?? "",
        tags: (formData.get("tags") as string).split(", ") ?? "",
        isPremium: formData.get("isPremium") === "on"
    }

    const cookieStore = await cookies();

    const accessToken = cookieStore.get("accessToken")?.value || null;
    
      if (!accessToken) {
        return {
          success: false,
          message: "User not logged in!",
        };
      }

    
      const res = await fetch(`${process.env.BACKEND_API_URL}/api/posts/${postId}`, {
        method : "PATCH",
        headers: {
          // Authorization : accessToken as unknown as string,
          // Authorization : `${accessToken}`,
          // Authorization : `Bearer ${accessToken}`
    
          Cookie: `accessToken=${accessToken}`,
          "Content-Type": "application/json",
        },
        body : JSON.stringify(payload)
      });
    
      const result = await res.json();

      if(result.success){
        revalidateTag("my-posts", {
            expire : 0
        })
    }

    if(result.success && result.data.isPremium){
        revalidateTag("premium-posts", {
            expire : 0
        })
    }else{
        revalidateTag("all-news", {
            expire:0
        })
    }
   
      return result;
};


// get my post actions
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