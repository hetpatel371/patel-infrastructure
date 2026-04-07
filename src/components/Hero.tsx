import FadeIn from "@/components/FadeIn";

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-[url('/hero-bg.svg')] bg-cover bg-center"
      />
      <div aria-hidden="true" className="absolute inset-0 bg-black/55" />

      <div className="relative mx-auto max-w-6xl px-4 sm:px-6">
        <div className="py-16 sm:py-20 md:py-28">
          <div className="max-w-2xl">
            <FadeIn>
              <p className="inline-flex items-center rounded-full bg-white/10 px-4 py-2 text-xs font-semibold tracking-[0.22em] uppercase text-white ring-1 ring-white/15">
                Engineering. Execution. Excellence.
              </p>
            </FadeIn>

            <FadeIn delayMs={80}>
              <h1 className="mt-6 text-4xl sm:text-5xl md:text-6xl font-semibold leading-[1.05] tracking-tight text-white">
                Infrastructure solutions built for real-world reliability.
              </h1>
            </FadeIn>

            <FadeIn delayMs={140}>
              <p className="mt-6 text-base sm:text-lg leading-7 text-white/85">
                From planning to delivery, we help businesses execute projects with safety-first
                processes, predictable timelines, and quality you can measure.
              </p>
            </FadeIn>

            <FadeIn delayMs={200}>
              <div className="mt-10 flex flex-col sm:flex-row gap-3">
                <a
                  href="#contact"
                  className="inline-flex items-center justify-center rounded-full bg-white px-6 py-3 text-sm font-semibold text-zinc-900 hover:bg-zinc-100"
                >
                  Request a Quote
                </a>
                <a
                  href="#services"
                  className="inline-flex items-center justify-center rounded-full bg-transparent px-6 py-3 text-sm font-semibold text-white ring-1 ring-white/25 hover:ring-white/40"
                >
                  View Services
                </a>
              </div>
            </FadeIn>

            <FadeIn delayMs={260}>
              <div className="mt-12 grid grid-cols-2 gap-4 sm:flex sm:items-center sm:gap-8 text-sm text-white/75">
                <div>
                  <p className="font-semibold text-white">Safety-first</p>
                  <p className="mt-1">Process & compliance</p>
                </div>
                <div>
                  <p className="font-semibold text-white">On-time delivery</p>
                  <p className="mt-1">Clear milestones</p>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </div>
    </section>
  );
}
