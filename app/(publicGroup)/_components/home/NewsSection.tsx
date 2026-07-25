import Link from "next/link";
import { ArrowRight, Newspaper, Sparkles } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

export default function NewsSection() {
  return (
    <section className="relative overflow-hidden rounded-3xl border bg-linear-to-r from-slate-950 via-slate-900 to-slate-800 px-6 py-12 text-white md:px-10 lg:px-12">
      {/* Background Glow */}
      <div className="absolute -left-20 -top-20 h-60 w-60 rounded-full bg-primary/20 blur-3xl" />
      <div className="absolute -bottom-20 -right-20 h-72 w-72 rounded-full bg-sky-500/10 blur-3xl" />

      <div className="relative flex flex-col-reverse items-center justify-between gap-10 lg:flex-row">
        {/* Left Content */}
        <div className="max-w-2xl">
          <Badge className="mb-5">
            <Sparkles className="mr-2 size-4" />
            Latest Articles
          </Badge>

          <h1 className="text-4xl font-extrabold leading-tight tracking-tight md:text-5xl lg:text-6xl">
            Stay Ahead with the
            <span className="block text-primary">
              Latest Tech Insights
            </span>
          </h1>

          <p className="mt-6 text-base leading-8 text-slate-300 md:text-lg">
            Explore high-quality articles about Next.js, React, Prisma,
            PostgreSQL, TypeScript, Tailwind CSS, AI, Backend Development,
            and modern software engineering.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <Button asChild size="lg">
              <Link href="/premium">
                Explore Premium
                <ArrowRight className="ml-2 size-4" />
              </Link>
            </Button>

            <Button asChild variant="secondary" size="lg">
              <Link href="/news">
                Browse Articles
              </Link>
            </Button>
          </div>
        </div>

        {/* Right Icon */}
        <div className="flex h-52 w-52 items-center justify-center rounded-full border border-white/10 bg-white/5 backdrop-blur">
          <Newspaper className="size-24 text-primary" />
        </div>
      </div>
    </section>
  );
}