export interface Job {
  slug: string;
  title: string;
  summary: string;
  salary: string;
  location: string;
  description: string;
  requirements: string;
  benefits: string;
  tags: string[];
}

/** Read all job markdown files from content/jobs/ at build time. */
export function getJobs(): Job[] {
  const files = import.meta.glob<{
    frontmatter: Record<string, unknown>;
  }>("/content/jobs/*.md", { eager: true });

  return Object.entries(files).map(([filepath, mod]) => {
    const filename = filepath.split("/").pop()!;
    const data = mod.frontmatter;
    return {
      slug: filename.replace(/\.md$/, ""),
      title: (data.title as string) ?? "",
      summary: (data.summary as string) ?? "",
      salary: (data.salary as string) ?? "",
      location: (data.location as string) ?? "",
      description: (data.description as string) ?? "",
      requirements: (data.requirements as string) ?? "",
      benefits: (data.benefits as string) ?? "",
      tags: (data.tags as string[]) ?? [],
    } satisfies Job;
  });
}
