import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import localFont from "next/font/local";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Analytics } from "@vercel/analytics/next";
import "@/app/globals.css";
import { Sidebar } from "@/src/components/navigation/Sidebar";
import { getSiteMetadata } from "@/lib/data/site-metadata";
import { SiteMetadataProvider } from "@/src/providers/SiteMetadataProviders";

const myFont = localFont({
  // src: "./fonts/GT-Sectra-Fine-Regular.ttf",
  src: "./fonts/GT-Sectra-Regular.ttf",
  display: "swap",
  variable: "--font-sectra",
});

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// export const metadata: Metadata = {
//   title: "Alonso Huayta - Portfolio",
//   description: "porfolio for alonso huayta full stack Developer",
// };

export async function generateMetadata(): Promise<Metadata> {

  const site = await getSiteMetadata()
  console.log("site metadata:", site)
  return {
    title: site.name,
    description: site.short_description,
    // openGraph: { images: [site.og_image] },
  }
}



export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const site = {
    alonsoData: await getSiteMetadata()}; // dedupes with the call above if cached



  return (
    <html lang="en">
      <body
        // className={`${geistSans.variable} ${geistMono.variable} ${myFont.className} antialiased`}
        className={` ${myFont.variable} antialiased`}
      >
        <SiteMetadataProvider data={site}>

        {children}
        <SpeedInsights />
        <Analytics />
        </SiteMetadataProvider>

      </body>
    </html>
  );
}