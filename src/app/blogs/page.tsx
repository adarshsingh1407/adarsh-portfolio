"use client";

import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { useTranslations } from "next-intl";
import { BLOG_IMAGES } from "@/lib/constants";

interface BlogPost {
  title: string;
  description: string;
  date: string;
}

export default function BlogsPage() {
  const t = useTranslations();

  // Get blog posts from translations
  const blogPosts = t.raw("blog.posts") as BlogPost[];

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-2">{t("pages.blogs.title")}</h1>
        <p className="text-muted-foreground">{t("pages.blogs.subtitle")}</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {Array.isArray(blogPosts) &&
          blogPosts.map((post: BlogPost, index: number) => (
            <Card
              key={index}
              className="overflow-hidden hover:shadow-lg transition-shadow"
            >
              <div className="aspect-video relative overflow-hidden">
                <img
                  src={BLOG_IMAGES[index] || BLOG_IMAGES[0]}
                  alt={post.title}
                  className="object-cover w-full h-full hover:scale-105 transition-transform duration-300"
                />
              </div>
              <CardHeader>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm text-muted-foreground">
                    {post.date}
                  </span>
                </div>
                <CardTitle className="line-clamp-2">{post.title}</CardTitle>
                <CardDescription className="line-clamp-3">
                  {post.description}
                </CardDescription>
              </CardHeader>
            </Card>
          ))}
      </div>
    </div>
  );
}
