"use client";

import { AlonsoData } from "@/lib/data/site-metadata";
import { createContext, useContext } from "react";

type SiteMetadata = {
  // name: string;
  // short_description: string;
  alonsoData: AlonsoData
  // ...whatever other fields your table has
};

const SiteMetadataContext = createContext<SiteMetadata | null>(null);

export function SiteMetadataProvider({
  data,
  children,
}: {
  data: SiteMetadata;
  children: React.ReactNode;
}) {
  return (
    <SiteMetadataContext.Provider value={data}>
      {children}
    </SiteMetadataContext.Provider>
  );
}

export function useSiteMetadata() {
  const ctx = useContext(SiteMetadataContext);
  if (!ctx) {
    throw new Error("useSiteMetadata must be used within SiteMetadataProvider");
  }
  return ctx;
}