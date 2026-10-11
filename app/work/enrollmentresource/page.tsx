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
            Full-Stack Developer
          </h1>
          <div className="flex items-center gap-4 text-gray-600 text-lg">
            <span className="font-semibold">Enrollment Resources</span>
            <span>•</span>
            <span>2021 - 2024</span>
          </div>
        </div>

        {/* Overview Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-semibold mb-6">Overview</h2>

          <p className="text-xl leading-8 text-gray-700">
            Enrollment Resources, a digital marketing agency, I worked on SEO and marketing
            for multiple clients using Semrush, Google Search Console, Google Analytics and Google Tag Manager, grew organic
            traﬀic, ran marketing tests, tracked traﬀic across client sites with more than 1 million views a day, and built home
            sites and landing pages in WordPress and Next.js. At Protectio I built SEO and custom marketing tools that took
            the company’s SEO marketing from zero to production. I write clear documentation and use AI tools such as Claude
            Code and the OpenAI API every day.
          </p>


<ul className="mt-4 text-xl leading-8 text-gray-700 list-disc list-outside pl-6 space-y-2">
            <li>
              Worked on SEO and marketing for multiple clients with Semrush, Google Search Console, Google Analytics andGoogle Tag Manager, growing organic traﬀic and running marketing tests.
            </li>
            <li>
              Tracked traﬀic across client sites with more than 1 million views a day.
            </li>
            <li>
              Built client websites in WordPress and Next.js, including home sites and landing pages.
            </li>
            <li>
              Worked on Google and social media marketing improvements for client career schools.
            </li>
            <li>
              Built Puppeteer, Node.js and OpenAI crawler services that monitored website content across multiple clients, evaluating AI-generated copy for accuracy and consistency and flagging discrepancies for human review.
            </li>
            <li>
              Developed services for dynamic script injection and event-based triggers on multi-client platforms.
            </li>
            <li>
              Owned deployments independently across client environments with GitHub Actions, Docker and AWS.
            </li>

          </ul>


        </section>

        {/* Key Responsibilities */}
      </div>
    </main>
  );
}
