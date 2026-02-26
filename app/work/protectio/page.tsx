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
            Protectio Full-Stack Developer
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
        <section className="mb-16">
          <h2 className="text-3xl font-semibold mb-6">Key Responsibilities</h2>
          <ul className="space-y-4 text-lg text-gray-700">
            <li className="flex gap-3">
              <span className="text-2xl">•</span>
              <span>
                Refactor and optimizeded backend services to improve performance
                and scalability in a high-traffic environment
              </span>
            </li>
            <li className="flex gap-3">
              <span className="text-2xl">•</span>
              <span>
                Integrated third-party APIs (Salesforce, Zoom, Google Analytics,
                OpenAI) to enhance application functionality
              </span>
            </li>
            <li className="flex gap-3">
              <span className="text-2xl">•</span>
              <span>
                Refactor and optimized frontend components to improve
                performance and user experience, resulting in a 30% reduction in
                load times and a 20% increase in user engagement
              </span>
            </li>
            <li className="flex gap-3">
              <span className="text-2xl">•</span>
              <span>
                Implemented CI/CD pipelines using GitHub Actions, automating
                testing and deployment processes to ensure faster and more
                reliable releases
              </span>
            </li>

            <li className="flex gap-3">
              <span className="text-2xl">•</span>
              <span>
                Developed and maintained comprehensive unit, integration, and
                E2E tests for critical workflows, achieving 95% test coverage
                and significantly <strong>reducing production bugs</strong>
              </span>
            </li>
          </ul>
        </section>

        {/* Technologies Used */}
        <section className="mb-16">
          <h2 className="text-3xl font-semibold mb-6">Technologies Used</h2>
          <div className="flex flex-wrap gap-3">
            {experiences[0].techStack.map((tech, index) => (
              <span
                key={index}
                className="px-4 py-2 bg-black text-white rounded-full text-sm font-medium"
              >
                {tech}
              </span>
            ))}
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-3xl font-semibold mb-6">Projects</h2>
          <ul className="space-y-4 text-lg text-gray-700">
            <li className="flex gap-3">
              <span className="text-2xl">•</span>
              <span>
                Refactor Api and Admin Dashboard: Refactored and optimized
                backend services to improve performance and scalability in a
                high-traffic environment, resulting in a 30% reduction in load
                times and a 20% increase in user engagement.
              </span>
            </li>
            <li className="flex gap-3">
              <span className="text-2xl">•</span>
              <span>
                Third-Party API Integrations: Integrated third-party APIs
                (Salesforce, Zoom, Google Analytics, OpenAI) to enhance
                application functionality and provide users with a seamless
                experience.
              </span>
            </li>

            <li className="flex gap-3">
              <span className="text-2xl">•</span>
              <span>
                Deployment Automation: Implemented CI/CD pipelines using GitHub
                and Google Cloud Build, automating testing and deployment
                processes to ensure faster and more reliable releases, reducing
                deployment time by 50% and almost eliminating downtime during
                updates.
              </span>
            </li>

            <li className="flex gap-3">
              <span className="text-2xl">•</span>
              <span>
                Migrated existing UI to Next.js , improving performance and
                maintainability while ensuring a seamless user experience. This
                migration resulted in a 45% improvement in page load times and a
                more responsive interface.
              </span>
            </li>
          </ul>
        </section>
        {/* Impact Section */}
        {/* <section className="mb-16"> */}
        {/*   <h2 className="text-3xl font-semibold mb-6">Impact</h2> */}
        {/*   <div className="grid grid-cols-1 md:grid-cols-3 gap-6"> */}
        {/*     <div className="bg-white p-6 rounded-lg shadow-md"> */}
        {/*       <div className="text-4xl font-bold text-black mb-2">99.9%</div> */}
        {/*       <div className="text-gray-600">API Uptime</div> */}
        {/*     </div> */}
        {/*     <div className="bg-white p-6 rounded-lg shadow-md"> */}
        {/*       <div className="text-4xl font-bold text-black mb-2">50ms</div> */}
        {/*       <div className="text-gray-600">Avg Response Time</div> */}
        {/*     </div> */}
        {/*     <div className="bg-white p-6 rounded-lg shadow-md"> */}
        {/*       <div className="text-4xl font-bold text-black mb-2">10K+</div> */}
        {/*       <div className="text-gray-600">Daily API Calls</div> */}
        {/*     </div> */}
        {/*   </div> */}
        {/* </section> */}
      </div>
    </main>
  );
}
