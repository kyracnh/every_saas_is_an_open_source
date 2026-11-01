import Image from "next/image";

export function TechnologyLogo({
  slug,
  name,
  size = 28,
  label = true,
}: {
  slug: string;
  name: string;
  size?: number;
  label?: boolean;
}) {
  const wide = slug === "inngest";
  return (
    <span className={`technology-brand ${wide ? "technology-brand-wide" : ""}`}>
      <Image
        src={`/technologies/${slug}.svg`}
        alt={label && !wide ? "" : name}
        width={wide ? 86 : size}
        height={size}
        unoptimized
      />
      {label && !wide && <span>{name}</span>}
    </span>
  );
}
