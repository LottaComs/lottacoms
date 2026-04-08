import { useState, useMemo } from "react";
import type { Job } from "../lib/jobs";
import IconMapPin from "./icons/IconMapPin";
import IconCurrency from "./icons/IconCurrency";

interface Props {
  jobs: Job[];
  lang: string;
  labels: {
    searchPlaceholder: string;
    noResults: string;
    empty: string;
    salary: string;
    location: string;
    viewDetails: string;
    applyNow: string;
  };
  jobsBasePath: string;
}

export default function JobSearch({ jobs, lang, labels, jobsBasePath }: Props) {
  const [query, setQuery] = useState("");

  const filtered = useMemo(() => {
    if (!query.trim()) return jobs;
    const q = query.toLowerCase();
    return jobs.filter(
      (job) =>
        job.title.toLowerCase().includes(q) ||
        job.location.toLowerCase().includes(q) ||
        job.summary.toLowerCase().includes(q) ||
        job.tags.some((tag) => tag.toLowerCase().includes(q)),
    );
  }, [jobs, query]);

  if (jobs.length === 0) {
    return (
      <p className="text-center text-content-muted py-12">{labels.empty}</p>
    );
  }

  return (
    <div>
      <div className="mb-8">
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder={labels.searchPlaceholder}
          className="w-full max-w-md mx-auto block rounded-lg border border-divider-input px-4 py-3 text-sm text-content placeholder-content-subtle focus:border-brand-green-600 focus:ring-1 focus:ring-brand-green-600 outline-none transition-colors"
        />
      </div>

      {filtered.length === 0 ? (
        <p className="text-center text-content-muted py-8">{labels.noResults}</p>
      ) : (
        <div className="grid gap-4 md:grid-cols-2">
          {filtered.map((job) => (
            <a
              key={job.slug}
              href={`${jobsBasePath}/${job.slug}`}
              className="block rounded-xl border border-divider bg-white p-6 hover:border-brand-green-300 hover:shadow-md transition-all group"
            >
              <h3 className="text-lg font-bold text-content group-hover:text-brand-green-700 transition-colors mb-3">
                {job.title}
              </h3>
              <div className="flex flex-wrap gap-x-6 gap-y-2 text-sm text-content-muted">
                {job.location && (
                  <span className="flex items-center gap-1.5">
                    <IconMapPin className="w-4 h-4 text-content-subtle" />
                    {job.location}
                  </span>
                )}
                {job.salary && (
                  <span className="flex items-center gap-1.5">
                    <IconCurrency className="w-4 h-4 text-content-subtle" />
                    {job.salary}
                  </span>
                )}
              </div>
              {job.tags.length > 0 && (
                <div className="flex flex-wrap gap-2 mt-3">
                  {job.tags.map((tag) => (
                    <span key={tag} className="tag text-xs">
                      {tag}
                    </span>
                  ))}
                </div>
              )}
              <div className="flex items-center gap-4 mt-4">
                <span className="link">
                  {labels.viewDetails} →
                </span>
                <a
                  href={`${jobsBasePath}/${job.slug}#apply`}
                  onClick={(e) => e.stopPropagation()}
                  className="ml-auto btn-sm"
                >
                  {labels.applyNow}
                </a>
              </div>
            </a>
          ))}
        </div>
      )}
    </div>
  );
}
