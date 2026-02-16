"use client";

import { navigationItems } from "@/src/config/navigation";
import { useActiveSection } from "@/src/hooks/useActiveSection";
import { useState } from "react";

export const Sidebar = () => {
  const sectionIds = navigationItems.map((item) => item.id);
  const activeSection = useActiveSection(sectionIds);
  const [hoveredSection, setHoveredSection] = useState<string | null>(null);

  return (
    <nav
      className="fixed left-8 top-1/2 -translate-y-1/2 z-50 hidden md:flex flex-col gap-4"
      aria-label="Section navigation"
    >
      {navigationItems.map((item) => {
        const isActive = activeSection === item.id;
        const isHovered = hoveredSection === item.id;

        return (
          <a
            key={item.id}
            href={item.href}
            aria-label={`Navigate to ${item.label}`}
            className="relative group"
            onMouseEnter={() => setHoveredSection(item.id)}
            onMouseLeave={() => setHoveredSection(null)}
          >
            <div
              className={`flex items-center justify-center gap-3 text-foreground/40 group-hover:text-foreground transition-all duration-300 px-3 py-2 relative ${
                isActive ? "font-bold text-foreground" : ""
              }`}
            >
              <div className="">{item.label}</div>
              {/* Gradient border on bottom */}
              <div
                className={`absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-gray-300 to-transparent transition-opacity duration-300 ${
                  isActive ? "opacity-100" : "opacity-20 group-hover:opacity-40"
                }`}
              />
            </div>
            {/* Tooltip */}
            {/* {isHovered && ( */}
            {/*   <span className="absolute left-6 top-1/2 -translate-y-1/2 whitespace-nowrap bg-foreground text-background px-3 py-1 rounded text-sm font-medium"> */}
            {/*     {item.label} */}
            {/*   </span> */}
            {/* )} */}
          </a>
        );
      })}
    </nav>
  );
};
