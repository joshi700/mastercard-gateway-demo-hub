import { flowGroups } from "./flows";

export default function HomePage() {
  const totalFlows = flowGroups.reduce((n, g) => n + g.flows.length, 0);

  return (
    <main className="min-h-screen">
      {/* Header */}
      <header className="border-b border-neutral-200 bg-white">
        <div className="mx-auto max-w-6xl px-6 py-10">
          <h1 className="text-4xl font-semibold tracking-tight text-neutral-900">
            Demo Hub
          </h1>
          <p className="mt-2 max-w-2xl text-neutral-600">
            A central launcher for integration demos. Pick a flow below and open it in a
            new tab to walk through the experience with the customer.
          </p>
          <p className="mt-4 text-sm text-neutral-500">
            {flowGroups.length} categories · {totalFlows} demos
          </p>
        </div>
      </header>

      {/* Groups */}
      <div className="mx-auto max-w-6xl px-6 py-12 space-y-14">
        {flowGroups.map((group) => (
          <section key={group.category}>
            <div className="mb-6 flex items-baseline justify-between gap-4">
              <div>
                <h2 className="text-2xl font-semibold tracking-tight text-neutral-900">
                  {group.category}
                </h2>
                <p className="mt-1 text-sm text-neutral-600">{group.blurb}</p>
              </div>
              <span className="text-sm text-neutral-400">
                {group.flows.length} demo{group.flows.length === 1 ? "" : "s"}
              </span>
            </div>

            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {group.flows.map((flow) => (
                <div
                  key={flow.title}
                  className="group relative flex flex-col rounded-xl border border-neutral-200 bg-white p-5 transition hover:border-neutral-900 hover:shadow-sm"
                >
                  {/* Stretched link — clicking the card opens the demo (when there is one) */}
                  {flow.url && (
                    <a
                      href={flow.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`Open ${flow.title} demo`}
                      className="absolute inset-0 rounded-xl"
                    />
                  )}
                  <div className="flex items-start justify-between gap-3">
                    <h3 className="text-base font-semibold text-neutral-900 group-hover:text-black">
                      {flow.title}
                    </h3>
                    {flow.inDevelopment && (
                      <span className="shrink-0 rounded-full bg-amber-100 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wider text-amber-800">
                        In Development
                      </span>
                    )}
                  </div>
                  <p className="mt-2 flex-1 text-sm text-neutral-600">{flow.description}</p>
                  {flow.url && (
                    <div className="mt-4 flex items-center justify-between">
                      <span className="truncate text-xs text-neutral-400">
                        {flow.url.replace(/^https?:\/\//, "")}
                      </span>
                      <span className="inline-flex items-center gap-1 text-sm font-medium text-neutral-900">
                        Open Demo
                        <svg
                          width="14"
                          height="14"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="transition group-hover:translate-x-0.5"
                        >
                          <path d="M7 17 17 7" />
                          <path d="M7 7h10v10" />
                        </svg>
                      </span>
                    </div>
                  )}
                  {((flow.guides && flow.guides.length > 0) ||
                    (flow.videos && flow.videos.length > 0) ||
                    (flow.postman && flow.postman.length > 0)) && (
                    <div className="relative z-10 mt-4 space-y-3 border-t border-neutral-100 pt-3">
                      {flow.guides && flow.guides.length > 0 && (
                        <div>
                          <div className="mb-2 flex items-center gap-1.5 text-[11px] font-semibold uppercase tracking-wider text-neutral-400">
                            <svg
                              width="13"
                              height="13"
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            >
                              <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" />
                              <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" />
                            </svg>
                            {flow.guides.length === 1 && flow.guides[0].label === "Guide"
                              ? "Help Guide"
                              : "Help Guides"}
                          </div>
                          <div className="flex flex-wrap gap-2">
                            {flow.guides.map((g) => (
                              <a
                                key={g.url}
                                href={g.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-1 rounded-lg border border-neutral-200 bg-neutral-50 px-2.5 py-1 text-xs font-medium text-neutral-700 transition hover:border-neutral-900 hover:text-black"
                              >
                                {g.label}
                              </a>
                            ))}
                          </div>
                        </div>
                      )}
                      {flow.videos && flow.videos.length > 0 && (
                        <div>
                          <div className="mb-2 flex items-center gap-1.5 text-[11px] font-semibold uppercase tracking-wider text-neutral-400">
                            <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor">
                              <path d="M8 5v14l11-7z" />
                            </svg>
                            {flow.videos.length === 1 ? "Integration Video" : "Integration Videos"}
                          </div>
                          <div className="flex flex-wrap gap-2">
                            {flow.videos.map((v) => (
                              <a
                                key={v.url}
                                href={v.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-1.5 rounded-lg border border-red-200 bg-red-50 px-2.5 py-1 text-xs font-medium text-red-700 transition hover:border-red-600 hover:text-red-800"
                              >
                                <svg width="11" height="11" viewBox="0 0 24 24" fill="currentColor">
                                  <path d="M8 5v14l11-7z" />
                                </svg>
                                {v.label}
                              </a>
                            ))}
                          </div>
                        </div>
                      )}
                      {flow.postman && flow.postman.length > 0 && (
                        <div>
                          <div className="mb-2 flex items-center gap-1.5 text-[11px] font-semibold uppercase tracking-wider text-neutral-400">
                            <svg
                              width="13"
                              height="13"
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            >
                              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                              <path d="M7 10l5 5 5-5" />
                              <path d="M12 15V3" />
                            </svg>
                            Postman
                          </div>
                          <div className="flex flex-wrap gap-2">
                            {flow.postman.map((p) => (
                              <a
                                key={p.url}
                                href={p.url}
                                download
                                className="inline-flex items-center gap-1.5 rounded-lg border border-orange-200 bg-orange-50 px-2.5 py-1 text-xs font-medium text-orange-700 transition hover:border-orange-600 hover:text-orange-800"
                              >
                                <svg
                                  width="11"
                                  height="11"
                                  viewBox="0 0 24 24"
                                  fill="none"
                                  stroke="currentColor"
                                  strokeWidth="2"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                >
                                  <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                                  <path d="M7 10l5 5 5-5" />
                                  <path d="M12 15V3" />
                                </svg>
                                {p.label}
                              </a>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </section>
        ))}
      </div>

    </main>
  );
}
