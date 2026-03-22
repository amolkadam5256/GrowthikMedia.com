import React from 'react';

interface StatsBarProps {
  stats: {
    value: string;
    label: string;
  }[];
}

export default function StatsBar({ stats }: StatsBarProps) {
  return (
    <div className="bg-white dark:bg-gray-900 border border-gray-100 dark:border-gray-800 rounded-xl p-6 shadow-xl flex flex-wrap justify-between gap-6 w-full md:w-auto">
      {stats.map((stat, i) => (
        <div key={i} className="flex flex-col items-center flex-1 min-w-[100px] text-center">
          <span className="block text-3xl font-black text-gray-900 dark:text-white mb-1">{stat.value}</span>
          <span className="text-xs text-gray-500 uppercase font-semibold tracking-wide">{stat.label}</span>
          {i !== stats.length - 1 && (
            <div className="hidden md:block w-px bg-gray-200 dark:bg-gray-800 absolute right-0 top-0 bottom-0" />
          )}
        </div>
      ))}
    </div>
  );
}
