import { BackButton } from "@/src/components/ui/BackButton";
import { experiences } from "@/src/config/work";

export default function ProtectioPage() {
  return (
    <main className="min-h-screen font-sans w-full bg-gradient-to-br from-gray-50 to-gray-100">
      <BackButton />

      <div className="max-w-5xl mx-auto px-8 py-24">
        {/* Header Section */}
        <div className="mb-16">
          <h1 className="text-6xl font-bold mb-4 tracking-tight">
            Enrollment Resources-Stack Developer
          </h1>
          <div className="flex items-center gap-4 text-gray-600 text-lg">
            <span className="font-semibold">Protectio</span>
            <span>•</span>
            <span>2024 - Present</span>
          </div>
        </div>

        {/* Overview Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-semibold mb-6">Overview</h2>
          <p className="text-xl leading-8 text-gray-700">
            Led development of scalable full-stack applications, supporting APIs
            and user/admin interfaces with Next.js and Express. Converted Figma
            designs into production-ready components, integrated external
            platforms (Salesforce, Zoom, Google Analytics, OpenAI), established
            CI/CD pipelines, and ensured reliability through unit, integration,
            and E2E testing of key workflows.
          </p>
        </section>

        {/* Key Responsibilities */}
      </div>
    </main>
  );
}
