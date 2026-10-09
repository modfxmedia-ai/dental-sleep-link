import {
  ECONOMICS_COLUMNS,
  ECONOMICS_DISCLOSURE,
  ECONOMICS_ROWS,
  ECONOMICS_SUBTITLE,
  ECONOMICS_TITLE,
} from "@/lib/economics";

export default function EconomicsTable() {
  return (
    <div className="mt-12 grid items-start gap-6 lg:grid-cols-[1.4fr_0.8fr]">
      <div className="overflow-hidden rounded-[2rem] border border-navy/10 bg-white shadow-sm ring-1 ring-navy/5">
        <div className="border-b border-navy/10 px-6 py-5 sm:px-8">
          <h3 className="text-xl font-bold text-navy">{ECONOMICS_TITLE}</h3>
          <p className="mt-2 text-sm leading-relaxed text-navy/70">
            {ECONOMICS_SUBTITLE}
          </p>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full min-w-[36rem] text-left text-sm">
            <caption className="sr-only">{ECONOMICS_TITLE}</caption>
            <thead>
              <tr className="bg-navy text-white">
                <th scope="col" className="px-6 py-3 font-semibold sm:px-8">
                  Annual amounts
                </th>
                {ECONOMICS_COLUMNS.map((col) => (
                  <th
                    key={col.volume}
                    scope="col"
                    className="px-4 py-3 text-right font-semibold"
                  >
                    {col.volume}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {ECONOMICS_ROWS.map((row) => (
                <tr
                  key={row.key}
                  className={
                    row.emphasis
                      ? "bg-teal/10 font-semibold text-navy"
                      : "border-t border-navy/5 text-navy/80"
                  }
                >
                  <th
                    scope="row"
                    className="px-6 py-3 font-medium sm:px-8"
                  >
                    {row.label}
                  </th>
                  {ECONOMICS_COLUMNS.map((col) => (
                    <td
                      key={col.volume}
                      className="px-4 py-3 text-right tabular-nums"
                    >
                      {col[row.key]}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="border-t border-navy/10 px-6 py-4 text-xs leading-relaxed text-navy/60 sm:px-8">
          Volume labels only. A third or high scenario is not shown while it
          awaits confirmation. These are not described as typical results.
        </p>
      </div>
      <aside className="rounded-[2rem] border border-navy/10 bg-navy/[0.03] p-6 text-sm leading-relaxed text-navy/75 sm:p-8">
        <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-teal-dark">
          How to read this illustration
        </p>
        <p className="mt-3">{ECONOMICS_DISCLOSURE}</p>
      </aside>
    </div>
  );
}
