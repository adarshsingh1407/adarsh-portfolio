"use client";

import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { ScrollReveal } from "@/components/animations/ScrollReveal";
import blogs from "@/lib/data/blogs.json";
import Image from "next/image";
import { format } from "date-fns";

// Define a type for the blog post
interface BlogPost {
  guid: string;
  url: string;
  title: string;
  image: string;
  excerpt: string;
  date_published: string;
  author: { name: string; image?: string };
}

export default function BlogsPage() {
  // Use blogs.json data directly
  const blogPosts = (
    Array.isArray(blogs)
      ? blogs.filter(
          (post): post is BlogPost =>
            typeof post === "object" &&
            post !== null &&
            "guid" in post &&
            "url" in post &&
            "title" in post &&
            "image" in post &&
            "excerpt" in post &&
            "date_published" in post &&
            "author" in post
        )
      : []
  ) as BlogPost[];

  return (
    <div className="container mx-auto px-4 py-8">
      <ScrollReveal distance={0} direction="up">
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-2">Blogs</h1>
          <p className="text-muted-foreground">
            Curated posts from my Medium blog
          </p>
        </div>
      </ScrollReveal>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {blogPosts.map((post, idx) => {
          const imageUrl = post.image;
          const excerpt = post.excerpt;
          return (
            <ScrollReveal
              key={post.guid}
              delay={0.1 * idx}
              distance={10}
              viewportMargin="200px"
            >
              <a
                href={post.url}
                target="_blank"
                rel="noopener noreferrer"
                className="block group h-full"
              >
                <Card className="overflow-hidden hover:shadow-lg transition-all cursor-pointer pt-0 h-full flex flex-col group hover:bg-muted/50">
                  <div className="aspect-video relative overflow-hidden">
                    <Image
                      src={imageUrl as string}
                      alt={post.title}
                      fill
                      className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-300"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                    <div
                      id="blog-open-on-medium"
                      className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center"
                    >
                      <span className="px-4 py-2 rounded-md bg-black/50 text-white font-medium translate-y-2 scale-95 opacity-0 group-hover:translate-y-0 group-hover:scale-100 group-hover:opacity-100 transition-all duration-200 delay-100 hover:bg-black/70">
                        Open on Medium
                      </span>
                    </div>
                  </div>
                  <CardHeader className="flex-grow flex flex-col">
                    <div
                      id="blog-header"
                      className="flex items-center justify-between w-full mb-2"
                    >
                      <div className="flex items-center gap-2">
                        <Image
                          src="/adarsh-dp.png"
                          alt={post.author?.name}
                          width={24}
                          height={24}
                          className="rounded-full object-cover"
                        />
                        <span className="text-sm font-medium">
                          {post.author?.name}
                        </span>
                      </div>
                      <span className="text-sm text-muted-foreground">
                        {format(new Date(post.date_published), "MMM, yyyy")}
                      </span>
                    </div>
                    <div className="min-h-[2rem] mb-1">
                      <CardTitle className="line-clamp-2 group-hover:underline">
                        {post.title}
                      </CardTitle>
                    </div>
                    <CardDescription className="line-clamp-3">
                      {excerpt}
                    </CardDescription>
                  </CardHeader>
                </Card>
              </a>
            </ScrollReveal>
          );
        })}
      </div>
    </div>
  );
}
