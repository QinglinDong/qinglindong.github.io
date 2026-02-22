import { notFound } from "next/navigation";
import { getPostBySlug, getAllSlugs } from "@/lib/posts";
import { compileMDX } from "@/lib/mdx";
import MDXContent from "@/components/mdx-content";
import Comments from "@/components/comments";
import Link from "next/link";
import type { Metadata } from "next";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return getAllSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return {};
  return {
    title: post.meta.title,
    description: post.meta.summary,
  };
}

export default async function BlogPost({ params }: Props) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) notFound();

  const code = await compileMDX(post.content);

  return (
    <article>
      <header className="mb-10">
        <Link
          href="/"
          className="text-sm text-muted hover:text-foreground transition-colors mb-6 inline-block"
        >
          &larr; Back
        </Link>
        <h1 className="text-3xl font-bold tracking-tight mb-3">
          {post.meta.title}
        </h1>
        <div className="flex items-center gap-3 text-sm text-muted">
          <time>{formatDate(post.meta.date)}</time>
          <span>&middot;</span>
          <span>{post.meta.readingTime}</span>
        </div>
        {post.meta.tags.length > 0 && (
          <div className="flex gap-2 mt-3">
            {post.meta.tags.map((tag: string) => (
              <span
                key={tag}
                className="text-xs px-2 py-0.5 rounded-full bg-border text-muted"
              >
                {tag}
              </span>
            ))}
          </div>
        )}
      </header>

      <MDXContent code={code} />
      <Comments slug={slug} />
    </article>
  );
}

function formatDate(dateStr: string): string {
  if (!dateStr) return "";
  const date = new Date(dateStr);
  return date.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}
