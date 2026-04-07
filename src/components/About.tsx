import FadeIn from "@/components/FadeIn";
import SectionHeading from "@/components/SectionHeading";

export default function About() {
  return (
    <section id="about" className="scroll-mt-24 border-t border-black/5 bg-white">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 py-16 sm:py-20">
        <FadeIn>
          <SectionHeading
            eyebrow="About"
            title="A practical partner for infrastructure delivery"
            description="We support organizations with end-to-end execution: scope clarity, engineered planning, field coordination, and quality control. Our focus is simple—deliver work that lasts."
          />
        </FadeIn>

        <div className="mt-10 grid gap-6 md:grid-cols-3">
          <FadeIn delayMs={60}>
            <div className="rounded-2xl border border-black/10 bg-white p-6 shadow-sm">
              <p className="text-sm font-semibold text-zinc-900">Quality you can verify</p>
              <p className="mt-3 text-sm leading-6 text-zinc-600">
                Clear checklists, documented handovers, and continuous on-site inspections.
              </p>
            </div>
          </FadeIn>

          <FadeIn delayMs={120}>
            <div className="rounded-2xl border border-black/10 bg-white p-6 shadow-sm">
              <p className="text-sm font-semibold text-zinc-900">Transparent execution</p>
              <p className="mt-3 text-sm leading-6 text-zinc-600">
                Predictable milestones, weekly progress reporting, and risk-aware planning.
              </p>
            </div>
          </FadeIn>

          <FadeIn delayMs={180}>
            <div className="rounded-2xl border border-black/10 bg-white p-6 shadow-sm">
              <p className="text-sm font-semibold text-zinc-900">Safety-first culture</p>
              <p className="mt-3 text-sm leading-6 text-zinc-600">
                We prioritize compliance, training, and site readiness before we start.
              </p>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
