"use server";

import { redirect } from "next/navigation";
import { RegisterState } from "../_interface/authInterface";

export async function registerUserAction(
  prevState: RegisterState,
  formData: FormData,
): Promise<RegisterState> {

  const name = formData.get("name");
  const email = formData.get("email");
  const password = formData.get("password");
  const profilePhoto = formData.get("profilePhoto");
  const bio = formData.get("bio");

  const payload = {
    name,
    email,
    password,
    profilePhoto,
    bio,
  };

  const res = await fetch(`${process.env.BACKEND_API_URL}/api/users/register`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(payload),
  });

  const result: RegisterState = await res.json();

  if (!res.ok) {
  return {
    success: false,
    message: result.message || "Registration failed",
  };
}
  
  if(result.success){
    redirect(`/login?email=${encodeURIComponent(String(result.data?.user?.email))}`);
  }

  return {
    success: result.success,
    message: result.message,
  };
}
