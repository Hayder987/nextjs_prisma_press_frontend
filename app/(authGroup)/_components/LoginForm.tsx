"use client";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Link from "next/link";
import { loginUserAction } from "../_actions/authAction";
import { useActionState, useEffect } from "react";
import { toast } from "sonner";
import { Spinner } from "@/components/ui/spinner";

const LoginForm = () => {
  const [state, action, pending] = useActionState(loginUserAction, false);

  useEffect(() => {
    if (!state) return;

    if (state.success) {
      toast.success(state.message || "User Login SuccessFully!");
    }

    if (!state.success) {
      toast.error(state.message || "Something Wrong! Login Failed");
    }
  }, [state]);

  return (
    <div className="shadow-xl rounded-xl shadow-blue-100">
      <Card className="w-full max-w-md">
        <CardHeader>
          <CardTitle>Login to your account</CardTitle>
          <CardDescription>
            Enter your email below to login to your account
          </CardDescription>
          <CardAction>
            <Link href={"/register"}>
              <p className="text-blue-700 hover:underline">Sign Up</p>
            </Link>
          </CardAction>
        </CardHeader>
        <CardContent>
          <form action={action}>
            <div className="flex flex-col gap-6">
              <div className="grid gap-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  name="email"
                  placeholder="m@example.com"
                  required
                />
              </div>
              <div className="grid gap-2">
                <div className="flex items-center">
                  <Label htmlFor="password">Password</Label>
                </div>
                <Input
                  id="password"
                  name={"password"}
                  type="password"
                  required
                />
                <a
                  href="#"
                  className=" text-sm text-left underline-offset-4 hover:underline"
                >
                  Forgot your password?
                </a>
              </div>
              <div className="">
                {pending ? (
                  <Button disabled className="w-full">
                    <Spinner data-icon="inline-start" />
                    Signing...
                  </Button>
                ) : (
                  <Button type="submit" className="w-full">
                    Login
                  </Button>
                )}
              </div>
            </div>
          </form>
        </CardContent>
        <CardFooter className="flex-col gap-2">
          <Button variant="outline" className="w-full">
            Login with Google
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
};

export default LoginForm;
