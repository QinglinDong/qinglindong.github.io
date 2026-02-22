import Link from "next/link";
import { getAllPosts } from "@/lib/posts";

export default function Home() {
  const posts = getAllPosts();

  return (
    <div>
      <section className="mb-12">
        <h1 className="text-3xl font-bold tracking-tight mb-3">Writing</h1>
        <p className="text-muted leading-relaxed">
          Notes on AI agents, evaluation, and the craft of building intelligent systems.
        </p>
      </section>

      {posts.length === 0 ? (
        <p className="text-muted">No posts yet. Check back soon.</p>
      ) : (
        <div className="space-y-1">
          {posts.map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="group block py-4 -mx-3 px-3 rounded-lg hover:bg-border/40 transition-colors"
            >
              <div className="flex items-baseline justify-between gap-4">
                <h2 className="font-medium group-hover:text-accent transition-colors">
                  {post.title}
                </h2>
                <time className="text-sm text-muted shrink-0 tabular-nums">
                  {formatDate(post.date)}
                </time>
              </div>
              {post.summary && (
                <p className="text-sm text-muted mt-1 line-clamp-2">
                  {post.summary}
                </p>
              )}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}

function formatDate(dateStr: string): string {
  if (!dateStr) return "";
  const date = new Date(dateStr);
  return date.toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });
}
