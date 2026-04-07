"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";

type Service = {
  name: string;
  link: string;
};

const allServices: Service[] = [
  // --- Development ---
  { name: "Website Design & Development", link: "/services/website-development/" },
  { name: "WordPress Development", link: "/services/wordpress-development/" },
  { name: "eCommerce Development", link: "/services/ecommerce-development/" },
  { name: "Custom Web Applications", link: "/services/web-application/" },
  { name: "Software Development", link: "/services/software-development/" },
  { name: "Website Maintenance", link: "/services/website-maintenance/" },
  { name: "Application Maintenance", link: "/services/application-maintenance/" },
];

export function FilterableServices() {
  return (
    <div className="mt-12">
      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        {allServices.map((service, idx) => (
          <Link
            href={service.link}
            key={idx}
            className="group flex items-center justify-between p-4 bg-(--surface) border border-(--border) rounded-xl hover:border-(--color-primary) hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
          >
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-(--background) flex items-center justify-center border border-(--border) group-hover:bg-(--color-primary) group-hover:border-transparent transition-colors shadow-sm">
                <CheckCircle2 className="w-4 h-4 text-(--text-secondary) group-hover:text-white transition-colors" />
              </div>
              <span className="font-bold text-sm text-(--text-primary) group-hover:text-(--color-primary) transition-colors">
                {service.name}
              </span>
            </div>
            <ArrowRight className="w-4 h-4 text-(--border) group-hover:text-(--color-primary) transform group-hover:translate-x-1 transition-all" />
          </Link>
        ))}
      </div>
    </div>
  );
}
