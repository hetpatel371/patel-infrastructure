import FadeIn from "@/components/FadeIn";
import SectionHeading from "@/components/SectionHeading";

const services = [
  {
    title: "Project Execution",
    description:
      "On-site coordination, scheduling, and delivery management with clear milestones.",
  },
  {
    title: "Civil & Structural",
    description:
      "Foundations, structural works, and site readiness with quality-first controls.",
  },
  {
    title: "MEP Coordination",
    description:
      "Integrated planning for mechanical, electrical, and plumbing execution.",
  },
  {
    title: "Maintenance & Upgrades",
    description:
      "Planned upgrades and preventive maintenance to keep operations reliable.",
  },
  {
    title: "QA/QC & Documentation",
    description:
      "Inspection workflows, snag closure, and complete handover documentation.",
  },
  {
    title: "Safety & Compliance",
    description:
      "Site readiness, toolbox talks, and compliance alignment for safe execution.",
  },
];

export default function Services() {
  return (
    <section id="services" className="scroll-mt-24 border-t border-black/5 bg-zinc-50">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 py-16 sm:py-20">
        <FadeIn>
          <SectionHeading
            eyebrow="Services"
            title="Capabilities designed for dependable outcomes"
            description="Modular services you can engage individually or as a complete delivery team."
          />
        </FadeIn>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, idx) => (
            <FadeIn key={service.title} delayMs={idx * 60}>
              <div className="group h-full rounded-2xl border border-black/10 bg-white p-6 shadow-sm transition-shadow hover:shadow-md">
                <div className="flex items-center justify-between">
                  <p className="text-sm font-semibold text-zinc-900">{service.title}</p>
                  <span className="text-zinc-400 transition-colors group-hover:text-teal-700">→</span>
                </div>
                <p className="mt-3 text-sm leading-6 text-zinc-600">
                  {service.description}
                </p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
