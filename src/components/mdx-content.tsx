"use client";

import { run } from "@mdx-js/mdx";
import * as runtime from "react/jsx-runtime";
import { useEffect, useState } from "react";

export default function MDXContent({ code }: { code: string }) {
  const [Content, setContent] = useState<React.ComponentType | null>(null);

  useEffect(() => {
    (async () => {
      const mod = await run(code, {
        ...runtime,
        baseUrl: import.meta.url,
      });
      setContent(() => mod.default);
    })();
  }, [code]);

  if (!Content) return null;

  return (
    <article className="prose">
      <Content />
    </article>
  );
}
