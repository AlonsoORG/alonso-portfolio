export const ContactSection = () => {
  return (
    <div className="flex justify-center flex-col h-screen">
      <div className="flex flex-col items-center text-center w-full py-20 gap-10">
        <h2 className="text-6xl font-semibold tracking-tight">Get in Touch</h2>
        <div className="max-w-2xl space-y-8">
          <p className="text-xl leading-8">
            I'm always interested in hearing about new projects and opportunities.
            Whether you have a question or just want to say hi, feel free to reach out.
          </p>
          <div className="flex flex-col md:flex-row gap-4 justify-center items-center">
            <a
              href="mailto:hello@example.com"
              className="flex h-12 w-full md:w-auto items-center justify-center gap-2 rounded-full bg-foreground px-8 text-background transition-colors hover:bg-foreground/90"
            >
              Send Email
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-12 w-full md:w-auto items-center justify-center rounded-full border border-solid border-foreground/20 px-8 transition-colors hover:bg-foreground/5"
            >
              LinkedIn
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-12 w-full md:w-auto items-center justify-center rounded-full border border-solid border-foreground/20 px-8 transition-colors hover:bg-foreground/5"
            >
              Twitter
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
