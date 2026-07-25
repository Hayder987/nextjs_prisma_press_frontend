"use server";

import { isAccessTokenExist } from "@/services/refreshToken";

export const getPublicPostById = async ({ id }: { id: string }) => {

    const accessToken = await isAccessTokenExist()

    const res = await fetch(`${process.env.BACKEND_API_URL}/api/posts/${id}`,{
        headers: {
         Cookie: `accessToken=${accessToken}`
        },
        cache : "no-cache",
        next : {
            revalidate : 60 * 60,
            tags : ["single-news"]
        }
    });

    const result = await res.json();

    return result

};
