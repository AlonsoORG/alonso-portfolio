"use client";

import { useEffect, useRef, useState } from "react";

export default function FullPageSection({
  children,
  id,
  className = "",
}: {
  children?: React.ReactNode;
  id?: string;
  className?: string;
}) {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      {
        threshold: 0.15, // Trigger when 15% of section is visible
        rootMargin: "0px",
      },
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      id={id}
      className={`flex min-h-screen h-screen w-full flex-col px-8 mx-auto ${className} ${
        isVisible ? "section-visible" : "section-hidden"
      }`}
    >
      {children}
    </section>
  );
}
