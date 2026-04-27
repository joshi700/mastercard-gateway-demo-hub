import { flowGroups } from "./flows";

export default function HomePage() {
  const totalFlows = flowGroups.reduce((n, g) => n + g.flows.length, 0);

  return (
    <main className="min-h-screen">
      {/* Header */}
      <header className="border-b border-neutral-200 bg-white">
        <div className="mx-auto max-w-6xl px-6 py-10">
          <div className="flex items-center gap-3">
            <svg width="44" height="28" viewBox="0 0 44 28" aria-hidden>
              <circle cx="15" cy="14" r="13" fill="#EB001B" />
              <circle cx="29" cy="14" r="13" fill="#F79E1B" fillOpacity="0.92" />
            </svg>
            <span className="text-xs font-medium uppercase tracking-widest text-neutral-500">
              Mastercard Gateway
            </span>
          </div>
          <h1 className="mt-4 text-4xl font-semibold tracking-tight text-neutral-900">
            Demo Hub
          </h1>
          <p className="mt-2 max-w-2xl text-neutral-600">
            A central launcher for Mastercard Gateway integration demos. Pick a flow below
            and open it in a new tab to walk through the experience with the customer.
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
                <a
                  key={flow.url}
                  href={flow.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex flex-col rounded-xl border border-neutral-200 bg-white p-5 transition hover:border-neutral-900 hover:shadow-sm"
                >
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
                </a>
              ))}
            </div>
          </section>
        ))}
      </div>

      {/* Footer */}
      <footer className="border-t border-neutral-200 bg-white">
        <div className="mx-auto max-w-6xl px-6 py-6 text-xs text-neutral-500">
          Internal sales demo hub · Not affiliated with Mastercard public properties.
        </div>
      </footer>
    </main>
  );
}
