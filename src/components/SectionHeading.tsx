type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
};

export default function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
}: SectionHeadingProps) {
  const isCenter = align === "center";

  return (
    <div className={isCenter ? "text-center" : "text-left"}>
      {eyebrow ? (
        <p className="text-xs font-semibold tracking-[0.22em] uppercase text-teal-700">
          {eyebrow}
        </p>
      ) : null}
      <h2 className="mt-3 text-3xl md:text-4xl font-semibold tracking-tight text-zinc-900">
        {title}
      </h2>
      {description ? (
        <p className="mt-4 text-base md:text-lg leading-7 text-zinc-600">
          {description}
        </p>
      ) : null}
    </div>
  );
}
