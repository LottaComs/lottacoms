import { useState, useMemo } from "react";
import type { Job } from "../lib/jobs";

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
        job.salary.toLowerCase().includes(q),
    );
  }, [jobs, query]);

  if (jobs.length === 0) {
    return (
      <p className="text-center text-gray-500 py-12">{labels.empty}</p>
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
          className="w-full max-w-md mx-auto block rounded-lg border border-gray-300 px-4 py-3 text-sm text-gray-900 placeholder-gray-400 focus:border-brand-green-600 focus:ring-1 focus:ring-brand-green-600 outline-none transition-colors"
        />
      </div>

      {filtered.length === 0 ? (
        <p className="text-center text-gray-500 py-8">{labels.noResults}</p>
      ) : (
        <div className="grid gap-4 md:grid-cols-2">
          {filtered.map((job) => (
            <a
              key={job.slug}
              href={`${jobsBasePath}/${job.slug}`}
              className="block rounded-xl border border-gray-200 bg-white p-6 hover:border-brand-green-300 hover:shadow-md transition-all group"
            >
              <h3 className="text-lg font-bold text-gray-900 group-hover:text-brand-green-700 transition-colors mb-3">
                {job.title}
              </h3>
              <div className="flex flex-wrap gap-x-6 gap-y-2 text-sm text-gray-500">
                {job.location && (
                  <span className="flex items-center gap-1.5">
                    <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    {job.location}
                  </span>
                )}
                {job.salary && (
                  <span className="flex items-center gap-1.5">
                    <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
                    </svg>
                    {job.salary}
                  </span>
                )}
              </div>
              <span className="inline-block mt-4 text-sm font-medium text-brand-green-700 group-hover:underline">
                {labels.viewDetails} →
              </span>
            </a>
          ))}
        </div>
      )}
    </div>
  );
}
