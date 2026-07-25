"use server"

import { isAccessTokenExist } from "@/services/refreshToken";

export const getPremiumNewsById = async ({ id }: { id: string }) =>{
const accessToken = await isAccessTokenExist()

    const res = await fetch(`${process.env.BACKEND_API_URL}/api/premium/${id}`,{
        headers: {
         Cookie: `accessToken=${accessToken}`
        },
        cache : "no-cache",
        next : {
            revalidate : 60 * 60,
            tags : ["premium-news"]
        }
    });

    const result = await res.json();

    return result
}