import fs from "fs";
import path from "path";

const commentsFile = path.join(process.cwd(), "data/comments.json");

export interface Comment {
  id: string;
  name: string;
  message: string;
  date: string;
}

function readComments(): Record<string, Comment[]> {
  if (!fs.existsSync(commentsFile)) return {};
  const data = fs.readFileSync(commentsFile, "utf-8");
  return JSON.parse(data);
}

function writeComments(comments: Record<string, Comment[]>) {
  fs.writeFileSync(commentsFile, JSON.stringify(comments, null, 2));
}

export function getComments(slug: string): Comment[] {
  const all = readComments();
  return all[slug] || [];
}

export function addComment(slug: string, name: string, message: string): Comment {
  const all = readComments();
  if (!all[slug]) all[slug] = [];

  const comment: Comment = {
    id: `${Date.now()}-${Math.random().toString(36).slice(2, 8)}`,
    name,
    message,
    date: new Date().toISOString(),
  };

  all[slug].push(comment);
  writeComments(all);
  return comment;
}
