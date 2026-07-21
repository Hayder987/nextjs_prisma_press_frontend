import Link from "next/link";
import { Home, TriangleAlert } from "lucide-react";

import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <section className="flex min-h-screen items-center justify-center bg-background px-6">
      <div className="flex max-w-lg flex-col items-center text-center">
        {/* Animated Logo */}
        <div className="mb-8 flex h-24 w-24 items-center justify-center rounded-full border bg-primary/10 animate-bounce">
          <TriangleAlert className="h-12 w-12 text-primary" />
        </div>

        <span className="mb-3 rounded-full border px-4 py-1 text-sm text-muted-foreground">
          Error 404
        </span>

        <h1 className="text-4xl font-bold tracking-tight">
          Page Not Found
        </h1>

        <p className="mt-4 text-muted-foreground">
          Sorry, the page {"you're"} looking for {"doesn't"} exist or may have been
          moved.
        </p>

        <div className="mt-8">
          <Button asChild size="lg">
            <Link href="/">
              <Home className="mr-2 h-4 w-4" />
              Back to Home
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}