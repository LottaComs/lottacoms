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
  const files = import.meta.glob<{
    frontmatter: Record<string, string>;
  }>("/content/jobs/*.md", { eager: true });

  return Object.entries(files).map(([filepath, mod]) => {
    const filename = filepath.split("/").pop()!;
    const data = mod.frontmatter;
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
