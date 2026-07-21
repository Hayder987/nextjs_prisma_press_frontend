"use client";

import { useEffect } from "react";
import Link from "next/link";
import { AlertTriangle, Home, RotateCcw } from "lucide-react";

import { Button } from "@/components/ui/button";

export default function Error({
  error,
  unstable_retry,
}: {
  error: Error & { digest?: string };
  unstable_retry: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <section className="flex min-h-screen items-center justify-center bg-background px-6">
      <div className="w-full max-w-lg rounded-2xl border bg-card p-8 text-center shadow-sm">
        {/* Animated Icon */}
        <div className="mx-auto mb-6 flex h-20 w-20 animate-pulse items-center justify-center rounded-full bg-destructive/10">
          <AlertTriangle className="h-10 w-10 text-destructive" />
        </div>

        <span className="rounded-full border px-3 py-1 text-sm text-muted-foreground">
          Unexpected Error
        </span>

        <h1 className="mt-5 text-3xl font-bold">
          Oops! Something went wrong
        </h1>

        <p className="mt-3 text-muted-foreground">
          An unexpected error occurred while loading this page.
          Please try again or return to the homepage.
        </p>

        {process.env.NODE_ENV === "development" && (
          <div className="mt-6 rounded-lg bg-muted p-4 text-left">
            <p className="mb-2 text-sm font-semibold">
              Development Error
            </p>

            <pre className="overflow-auto text-xs whitespace-pre-wrap text-destructive">
              {error.message}
            </pre>
          </div>
        )}

        <div className="mt-8 flex justify-center gap-4">
          <Button onClick={() => unstable_retry()}>
            <RotateCcw className="mr-2 h-4 w-4" />
            Try Again
          </Button>

          <Button variant="outline" asChild>
            <Link href="/">
              <Home className="mr-2 h-4 w-4" />
              Home
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}