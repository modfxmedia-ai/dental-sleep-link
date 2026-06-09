import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { POSTS, getPost, getRelated } from "@/lib/posts";
import PostView from "./PostView";
import ArticleJsonLd from "@/components/seo/ArticleJsonLd";
import { SITE_URL } from "@/lib/seo";

type Params = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return POSTS.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) return { title: "Post not found" };
  const path = `/blog/${slug}`;
  return {
    title: post.title,
    description: post.excerpt,
    alternates: { canonical: path },
    openGraph: {
      title: post.title,
      description: post.excerpt,
      url: path,
      images: [{ url: `${SITE_URL}${post.image}`, width: 1200, height: 630, alt: post.imageAlt }],
      type: "article",
      publishedTime: post.date,
      authors: [post.author.name],
      tags: post.tags,
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.excerpt,
      images: [`${SITE_URL}${post.image}`],
    },
  };
}

export default async function Page({ params }: Params) {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) notFound();
  const related = getRelated(slug, 2);
  return (
    <>
      <ArticleJsonLd post={post} />
      <PostView post={post} related={related} />
    </>
  );
}
