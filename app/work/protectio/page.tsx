import { BackButton } from "@/src/components/ui/BackButton";

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
            Leading the design of the Protectio API backend, a critical
            component of the Onboard Wallet infrastructure. Focused on creating
            a seamless and secure experience for users while ensuring robust
            functionality and scalability. Integrating with third-party services
            and internal tools to provide a comprehensive solution for our
            users.
          </p>
        </section>

        {/* Key Responsibilities */}
        <section className="mb-16">
          <h2 className="text-3xl font-semibold mb-6">Key Responsibilities</h2>
          <ul className="space-y-4 text-lg text-gray-700">
            <li className="flex gap-3">
              <span className="text-2xl">•</span>
              <span>
                Designed and implemented scalable API architecture for the
                Onboard Wallet platform
              </span>
            </li>
            <li className="flex gap-3">
              <span className="text-2xl">•</span>
              <span>
                Integrated third-party payment processors and security services
              </span>
            </li>
            <li className="flex gap-3">
              <span className="text-2xl">•</span>
              <span>
                Collaborated with frontend teams to ensure seamless API
                integration
              </span>
            </li>
            <li className="flex gap-3">
              <span className="text-2xl">•</span>
              <span>
                Implemented comprehensive testing and monitoring solutions
              </span>
            </li>
          </ul>
        </section>

        {/* Technologies Used */}
        <section className="mb-16">
          <h2 className="text-3xl font-semibold mb-6">Technologies Used</h2>
          <div className="flex flex-wrap gap-3">
            {[
              "Node.js",
              "TypeScript",
              "Express",
              "PostgreSQL",
              "Redis",
              "Docker",
              "AWS",
              "REST API",
              "GraphQL",
            ].map((tech) => (
              <span
                key={tech}
                className="px-4 py-2 bg-black text-white rounded-full text-sm font-medium"
              >
                {tech}
              </span>
            ))}
          </div>
        </section>

        {/* Impact Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-semibold mb-6">Impact</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="text-4xl font-bold text-black mb-2">99.9%</div>
              <div className="text-gray-600">API Uptime</div>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="text-4xl font-bold text-black mb-2">50ms</div>
              <div className="text-gray-600">Avg Response Time</div>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="text-4xl font-bold text-black mb-2">10K+</div>
              <div className="text-gray-600">Daily API Calls</div>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
