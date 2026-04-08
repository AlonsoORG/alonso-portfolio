import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { IExperience } from "@/src/types/work";

export default function ExperienceCard({
  id,
  title,
  description,
  company,
  date,
  imageSrc,
  techStack,
}: IExperience) {
  return (
    <div
      className="border border-foreground/20 rounded-4xl p-6 text-left bg-white/80 backdrop-blur-sm"
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
      <div className="mt-2 flex flex-wrap gap-2">
        {techStack.slice(0, 3).map((tech) => (
          <Badge key={tech} className="text-lg">
            {tech}
          </Badge>
        ))}
        {techStack.length > 3 && (
          <Badge variant="outline" className="text-lg">
            +{techStack.length - 3} more
          </Badge>
        )}

        {/* <Badge className="text-lg">Next.js</Badge> */}
        {/* <Badge variant="secondary">Secondary</Badge> */}
        {/* <Badge variant="destructive">Destructive</Badge> */}
        {/* <Badge variant="outline">Outline</Badge> */}
      </div>
    </div>
  );
}
