import Image from "next/image";

export default function ExperienceCard({
  id,
  title,
  description,
  company,
  date,
  imageSrc,
}: {
  id: number;
  title: string;
  description: string;
  company: string;
  date: string;
  imageSrc: string;
}) {
  return (
    <div
      className="border border-foreground/20 rounded-4xl p-6 text-left bg-white/40 backdrop-blur-sm"
      id={id.toString()}
    >
      <div className="hidden md:flex items-center justify-center mb-4 ">
        <Image src={imageSrc} alt="Protectio" width={386} height={386} />
      </div>
      <h3 className="text-2xl font-semibold mb-3">{title}</h3>
      <p className="text-lg leading-7 mb-4">{description}</p>
      <p className="text-sm text-foreground/60">
        {company} - {date}
      </p>
    </div>
  );
}
