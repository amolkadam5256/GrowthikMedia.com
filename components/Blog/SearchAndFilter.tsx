"use client";
import React, { useState, useEffect, useRef } from "react";
import { Search, X, SlidersHorizontal, ChevronDown, TrendingUp, Clock, Star, Calendar } from "lucide-react";
import type { BlogFilters, SortOption } from "@/lib/blog/types";
import { CATEGORIES, TAGS } from "@/lib/blog/data";

interface SearchAndFilterProps {
  filters: BlogFilters;
  onFiltersChange: (filters: BlogFilters) => void;
  totalResults: number;
}

const SORT_OPTIONS: { value: SortOption; label: string; icon: React.ElementType }[] = [
  { value: "newest", label: "Newest First", icon: Calendar },
  { value: "oldest", label: "Oldest First", icon: Calendar },
  { value: "popular", label: "Most Popular", icon: Star },
  { value: "trending", label: "Trending", icon: TrendingUp },
];

const READING_TIME_OPTIONS = [
  { value: "any", label: "Any Length" },
  { value: "short", label: "Quick Read (<5 min)" },
  { value: "medium", label: "Medium (5–10 min)" },
  { value: "long", label: "Deep Dive (>10 min)" },
];

export default function SearchAndFilter({ filters, onFiltersChange, totalResults }: SearchAndFilterProps) {
  const [showFilters, setShowFilters] = useState(false);
  const [localSearch, setLocalSearch] = useState(filters.search);
  const searchRef = useRef<HTMLInputElement>(null);
  const debounceRef = useRef<ReturnType<typeof setTimeout>>(undefined);

  // Debounced search
  useEffect(() => {
    clearTimeout(debounceRef.current);
    debounceRef.current = setTimeout(() => {
      onFiltersChange({ ...filters, search: localSearch });
    }, 300);
    return () => clearTimeout(debounceRef.current);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [localSearch]);

  const setFilter = <K extends keyof BlogFilters>(key: K, value: BlogFilters[K]) => {
    onFiltersChange({ ...filters, [key]: value });
  };

  const clearAll = () => {
    setLocalSearch("");
    onFiltersChange({ search: "", category: "", tag: "", author: "", sort: "newest", readingTime: "any" });
  };

  const activeFilterCount = [
    filters.category,
    filters.tag,
    filters.author,
    filters.readingTime !== "any" ? filters.readingTime : "",
  ].filter(Boolean).length;

  return (
    <div className="w-full">
      {/* ── Search + Controls Row ── */}
      <div className="flex flex-col sm:flex-row gap-3">
        {/* Search Bar */}
        <div className="relative flex-1">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-(--text-secondary)" />
          <input
            ref={searchRef}
            type="text"
            value={localSearch}
            onChange={(e) => setLocalSearch(e.target.value)}
            placeholder="Search articles, authors, topics..."
            className="w-full h-12 pl-11 pr-10 rounded-xl border border-(--border) bg-(--surface) text-(--text-primary) placeholder:text-(--text-secondary) text-sm font-medium focus:outline-none focus:border-(--color-primary) focus:ring-2 focus:ring-(--color-primary)/10 transition-all"
          />
          {localSearch && (
            <button
              onClick={() => setLocalSearch("")}
              className="absolute right-3 top-1/2 -translate-y-1/2 w-6 h-6 flex items-center justify-center rounded-full bg-(--border) hover:bg-(--color-primary)/10 transition-colors"
            >
              <X className="w-3 h-3 text-(--text-secondary)" />
            </button>
          )}
        </div>

        {/* Sort Dropdown */}
        <div className="relative">
          <select
            value={filters.sort}
            onChange={(e) => setFilter("sort", e.target.value as SortOption)}
            className="h-12 pl-4 pr-10 rounded-xl border border-(--border) bg-(--surface) text-(--text-primary) text-sm font-medium focus:outline-none focus:border-(--color-primary) focus:ring-2 focus:ring-(--color-primary)/10 transition-all appearance-none cursor-pointer min-w-[160px]"
          >
            {SORT_OPTIONS.map((opt) => (
              <option key={opt.value} value={opt.value}>
                {opt.label}
              </option>
            ))}
          </select>
          <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-(--text-secondary) pointer-events-none" />
        </div>

        {/* Filter Toggle */}
        <button
          onClick={() => setShowFilters(!showFilters)}
          className={`h-12 px-5 rounded-xl border font-semibold text-sm flex items-center gap-2 transition-all shrink-0 ${
            showFilters || activeFilterCount > 0
              ? "bg-(--color-primary) border-(--color-primary) text-white"
              : "border-(--border) bg-(--surface) text-(--text-primary) hover:border-(--color-primary)/50"
          }`}
        >
          <SlidersHorizontal className="w-4 h-4" />
          Filters
          {activeFilterCount > 0 && (
            <span className="w-5 h-5 bg-white text-(--color-primary) rounded-full text-xs font-black flex items-center justify-center">
              {activeFilterCount}
            </span>
          )}
        </button>
      </div>

      {/* ── Expanded Filters Panel ── */}
      {showFilters && (
        <div className="mt-4 p-5 bg-(--surface) border border-(--border) rounded-2xl animate-fadeIn">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {/* Category */}
            <div>
              <label className="text-xs font-bold text-(--text-secondary) uppercase tracking-wider block mb-2">
                Category
              </label>
              <div className="flex flex-wrap gap-2">
                <button
                  onClick={() => setFilter("category", "")}
                  className={`px-3 py-1.5 rounded-full text-xs font-bold transition-all ${
                    !filters.category
                      ? "bg-(--color-primary) text-white"
                      : "bg-(--background) border border-(--border) text-(--text-secondary) hover:border-(--color-primary)/50"
                  }`}
                >
                  All
                </button>
                {CATEGORIES.map((cat) => (
                  <button
                    key={cat.id}
                    onClick={() => setFilter("category", filters.category === cat.slug ? "" : cat.slug)}
                    className="px-3 py-1.5 rounded-full text-xs font-bold transition-all border"
                    style={
                      filters.category === cat.slug
                        ? { backgroundColor: cat.color, borderColor: cat.color, color: "white" }
                        : { backgroundColor: "var(--background)", borderColor: "var(--border)", color: "var(--text-secondary)" }
                    }
                  >
                    {cat.name} ({cat.count})
                  </button>
                ))}
              </div>
            </div>

            {/* Reading Time */}
            <div>
              <label className="text-xs font-bold text-(--text-secondary) uppercase tracking-wider block mb-2">
                Reading Time
              </label>
              <div className="flex flex-col gap-1.5">
                {READING_TIME_OPTIONS.map((opt) => (
                  <button
                    key={opt.value}
                    onClick={() => setFilter("readingTime", opt.value as BlogFilters["readingTime"])}
                    className={`flex items-center gap-2 px-3 py-2 rounded-lg text-xs font-semibold transition-all text-left ${
                      filters.readingTime === opt.value
                        ? "bg-(--color-primary)/10 text-(--color-primary) border border-(--color-primary)/20"
                        : "hover:bg-(--background) text-(--text-secondary)"
                    }`}
                  >
                    <Clock className="w-3 h-3" />
                    {opt.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Popular Tags */}
            <div>
              <label className="text-xs font-bold text-(--text-secondary) uppercase tracking-wider block mb-2">
                Tags
              </label>
              <div className="flex flex-wrap gap-2">
                {TAGS.slice(0, 8).map((tag) => (
                  <button
                    key={tag.id}
                    onClick={() => setFilter("tag", filters.tag === tag.slug ? "" : tag.slug)}
                    className={`px-3 py-1.5 rounded-full text-xs font-bold transition-all border ${
                      filters.tag === tag.slug
                        ? "bg-(--color-primary) border-(--color-primary) text-white"
                        : "bg-(--background) border-(--border) text-(--text-secondary) hover:border-(--color-primary)/50"
                    }`}
                  >
                    #{tag.name}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Clear & Results */}
          <div className="flex items-center justify-between mt-5 pt-4 border-t border-(--border)">
            <p className="text-sm text-(--text-secondary) font-medium">
              <span className="font-black text-(--text-primary)">{totalResults}</span> articles found
            </p>
            {activeFilterCount > 0 && (
              <button
                onClick={clearAll}
                className="text-xs font-bold text-(--color-primary) hover:opacity-70 transition-opacity flex items-center gap-1"
              >
                <X className="w-3 h-3" /> Clear all filters
              </button>
            )}
          </div>
        </div>
      )}

      {/* ── Active Filter Chips ── */}
      {activeFilterCount > 0 && !showFilters && (
        <div className="flex flex-wrap gap-2 mt-3">
          {filters.category && (
            <span className="flex items-center gap-1.5 px-3 py-1.5 bg-(--color-primary)/10 text-(--color-primary) rounded-full text-xs font-bold border border-(--color-primary)/20">
              {CATEGORIES.find((c) => c.slug === filters.category)?.name}
              <button onClick={() => setFilter("category", "")}><X className="w-3 h-3" /></button>
            </span>
          )}
          {filters.tag && (
            <span className="flex items-center gap-1.5 px-3 py-1.5 bg-(--color-primary)/10 text-(--color-primary) rounded-full text-xs font-bold border border-(--color-primary)/20">
              #{TAGS.find((t) => t.slug === filters.tag)?.name}
              <button onClick={() => setFilter("tag", "")}><X className="w-3 h-3" /></button>
            </span>
          )}
          {filters.readingTime !== "any" && (
            <span className="flex items-center gap-1.5 px-3 py-1.5 bg-(--color-primary)/10 text-(--color-primary) rounded-full text-xs font-bold border border-(--color-primary)/20">
              {READING_TIME_OPTIONS.find((o) => o.value === filters.readingTime)?.label}
              <button onClick={() => setFilter("readingTime", "any")}><X className="w-3 h-3" /></button>
            </span>
          )}
        </div>
      )}
    </div>
  );
}
