'use client'

import { useSiteMetadata } from "@/src/providers/SiteMetadataProviders";

export const AboutSection = () => {
  const siteMetadata = useSiteMetadata();
  const { alonsoData } = siteMetadata;

  if (!alonsoData) {
    return <div>Loading...</div>;
  }
  
  const { about_me } = alonsoData;



  return (
    <div className="flex justify-center flex-col h-screen">
      <div className="flex flex-col items-center text-center w-full py-20 gap-10">
        <h2 className="text-6xl font-semibold tracking-tight">About Me</h2>
        <div className="max-w-2xl space-y-6">

<div
          className="text-xl leading-8"
          dangerouslySetInnerHTML={{ __html: about_me }}

        >

        </div>

        </div>
      </div>
    </div>
  );
};
