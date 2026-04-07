import FadeIn from "@/components/FadeIn";
import ContactForm from "@/components/ContactForm";
import SectionHeading from "@/components/SectionHeading";

export default function Contact() {
  return (
    <section id="contact" className="scroll-mt-24 border-t border-black/5 bg-white">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 py-16 sm:py-20">
        <FadeIn>
          <div className="grid gap-10 lg:grid-cols-2 lg:items-start">
            <div>
              <SectionHeading
                eyebrow="Contact"
                title="Let’s discuss your next project"
                description="Share the scope and timeline, and we’ll respond with a practical plan and a clear quote."
              />

              <div className="mt-10 grid gap-4 rounded-2xl border border-black/10 bg-zinc-50 p-6">
                <div>
                  <p className="text-sm font-semibold text-zinc-900">Business hours</p>
                  <p className="mt-1 text-sm text-zinc-600">Mon–Sat · 9:00–18:00</p>
                </div>
                <div>
                  <p className="text-sm font-semibold text-zinc-900">Phone</p>
                  <p className="mt-1 text-sm text-zinc-600">+91 00000 00000</p>
                </div>
                <div>
                  <p className="text-sm font-semibold text-zinc-900">Email</p>
                  <p className="mt-1 text-sm text-zinc-600">hello@example.com</p>
                </div>
              </div>
            </div>

            <div>
              <div className="rounded-2xl border border-black/10 bg-white p-6 shadow-sm">
                <p className="text-sm font-semibold text-zinc-900">Send a message</p>
                <ContactForm />
              </div>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
