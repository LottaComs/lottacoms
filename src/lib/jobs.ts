import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";

export interface Job {
  slug: string;
  title: string;
  salary: string;
  location: string;
  description: string;
  requirements: string;
  benefits: string;
}

/** Read all job markdown files from content/jobs/ at build time. */
export function getJobs(): Job[] {
  const jobsDir = path.resolve("content/jobs");

  if (!fs.existsSync(jobsDir)) return [];

  return fs
    .readdirSync(jobsDir)
    .filter((f) => f.endsWith(".md"))
    .map((filename) => {
      const raw = fs.readFileSync(path.join(jobsDir, filename), "utf-8");
      const { data } = matter(raw);
      return {
        slug: filename.replace(/\.md$/, ""),
        title: data.title ?? "",
        salary: data.salary ?? "",
        location: data.location ?? "",
        description: data.description ?? "",
        requirements: data.requirements ?? "",
        benefits: data.benefits ?? "",
      } satisfies Job;
    });
}
