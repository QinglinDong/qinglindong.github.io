import { compile } from "@mdx-js/mdx";
import remarkGfm from "remark-gfm";

export async function compileMDX(source: string) {
  const result = await compile(source, {
    outputFormat: "function-body",
    remarkPlugins: [remarkGfm],
  });
  return String(result);
}
