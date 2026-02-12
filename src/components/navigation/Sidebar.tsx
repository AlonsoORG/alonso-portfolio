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
              className={`rounded-full bg-foreground transition-all duration-300 ${
                isActive
                  ? "w-3 h-3 opacity-100"
                  : "w-2 h-2 opacity-30 hover:opacity-60 hover:scale-110"
              }`}
            />
            {/* Tooltip */}
            {isHovered && (
              <span className="absolute left-6 top-1/2 -translate-y-1/2 whitespace-nowrap bg-foreground text-background px-3 py-1 rounded text-sm font-medium">
                {item.label}
              </span>
            )}
          </a>
        );
      })}
    </nav>
  );
};
