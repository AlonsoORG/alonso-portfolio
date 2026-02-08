export default function FullPageSection({
  children,
}: {
  children?: React.ReactNode;
}) {
  return (
    <section className="flex min-h-screen h-screen w-full  flex-col px-8 mx-auto">
      {children}
    </section>
  );
}
