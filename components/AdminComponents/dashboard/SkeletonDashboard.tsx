const shimmer = "animate-pulse bg-gray-200 dark:bg-gray-800/60";

const barClasses =
  "rounded-md border border-gray-200/60 dark:border-white/5 bg-white/60 dark:bg-gray-900/50 shadow-sm";

function SkeletonCard({ lines = 2 }: { lines?: number }) {
  return (
    <div className={`${barClasses} ${shimmer} h-28 p-4`}>
      <div className="h-3 w-24 rounded-full bg-gray-300/60 dark:bg-gray-700/70" />
      <div className="mt-3 h-6 w-16 rounded-full bg-gray-300/60 dark:bg-gray-700/70" />
      {lines > 1 && (
        <div className="mt-3 h-2 w-28 rounded-full bg-gray-300/60 dark:bg-gray-700/70" />
      )}
    </div>
  );
}

export default function SkeletonDashboard() {
  return (
    <div className="space-y-8">
      {/* Section A */}
      <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        {Array.from({ length: 4 }).map((_, idx) => (
          <SkeletonCard key={`k-${idx}`} lines={3} />
        ))}
      </div>

      {/* Section B */}
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {Array.from({ length: 3 }).map((_, idx) => (
          <SkeletonCard key={`s-${idx}`} lines={2} />
        ))}
      </div>

      {/* Section C */}
      <div className="grid gap-4 lg:grid-cols-2">
        <div className={`${barClasses} ${shimmer} h-80`} />
        <div className="space-y-4">
          <div className={`${barClasses} ${shimmer} h-40`} />
          <div className={`${barClasses} ${shimmer} h-40`} />
        </div>
      </div>

      {/* Section D */}
      <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {Array.from({ length: 9 }).map((_, idx) => (
          <div
            key={`q-${idx}`}
            className={`${barClasses} ${shimmer} h-20 rounded-xl`}
          />
        ))}
      </div>
    </div>
  );
}
