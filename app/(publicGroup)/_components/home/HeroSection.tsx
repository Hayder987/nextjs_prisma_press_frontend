"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, BookOpen, Sparkles } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { usePathname } from "next/navigation";

export default function HeroSection() {

    const pathname = usePathname();


  return (
    <section className={`relative overflow-hidden ${pathname==="/" ? "mt-10" :"hidden" }`}>
      <div className="absolute inset-0 bg-linear-to-r from-black/80 via-black/60 to-black/30 z-10" />

      <Image
        src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1800&q=80"
        alt="Programming Workspace"
        fill
        priority
        className="object-cover"
      />

      <div className="relative z-20 container mx-auto flex min-h-[85vh] items-center px-4">
        <div className="max-w-3xl text-white">
          <Badge className="mb-6 bg-primary px-4 py-1 text-sm">
            <Sparkles className="mr-2 h-4 w-4" />
            Welcome to Prisma Press
          </Badge>

          <h1 className="text-5xl font-extrabold leading-tight md:text-7xl">
            Learn Modern
            <span className="block text-primary">
              Web Development
            </span>
            Like a Pro
          </h1>

          <p className="mt-6 max-w-2xl text-lg leading-8 text-gray-200 md:text-xl">
            Explore high-quality tutorials on Next.js, React, Prisma,
            PostgreSQL, TypeScript, Tailwind CSS, AI Integration, Backend
            Development, and Modern Software Engineering.
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <Button asChild size="lg">
              <Link href="/news">
                <BookOpen className="mr-2 h-5 w-5" />
                Explore Articles
              </Link>
            </Button>

            <Button
              asChild
              size="lg"
              variant="secondary"
            >
              <Link href="/premium">
                Premium Posts
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>

          <div className="mt-14 grid grid-cols-3 gap-8 max-w-xl">
            <div>
              <h3 className="text-3xl font-bold">500+</h3>
              <p className="text-gray-300">Articles</p>
            </div>

            <div>
              <h3 className="text-3xl font-bold">25K+</h3>
              <p className="text-gray-300">Readers</p>
            </div>

            <div>
              <h3 className="text-3xl font-bold">100+</h3>
              <p className="text-gray-300">Premium Guides</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}