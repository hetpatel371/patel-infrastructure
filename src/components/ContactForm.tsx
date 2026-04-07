"use client";

import { useMemo, useState } from "react";

type FormState = {
  name: string;
  email: string;
  message: string;
};

export default function ContactForm() {
  const [form, setForm] = useState<FormState>({
    name: "",
    email: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const mailtoHref = useMemo(() => {
    const subject = encodeURIComponent("Inquiry from Patel Infrastructure website");
    const body = encodeURIComponent(
      `Name: ${form.name}\nEmail: ${form.email}\n\nMessage:\n${form.message}`
    );
    return `mailto:hello@example.com?subject=${subject}&body=${body}`;
  }, [form.email, form.message, form.name]);

  return (
    <form
      className="mt-10 grid gap-4"
      onSubmit={(e) => {
        e.preventDefault();
        setSubmitted(true);
      }}
    >
      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className="text-sm font-medium text-zinc-700">
            Name
          </label>
          <input
            id="name"
            name="name"
            required
            value={form.name}
            onChange={(e) => setForm((p) => ({ ...p, name: e.target.value }))}
            className="mt-2 w-full rounded-xl border border-black/10 bg-white px-4 py-3 text-sm outline-none ring-teal-500/30 focus:ring-4"
            placeholder="Your name"
          />
        </div>
        <div>
          <label htmlFor="email" className="text-sm font-medium text-zinc-700">
            Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            value={form.email}
            onChange={(e) => setForm((p) => ({ ...p, email: e.target.value }))}
            className="mt-2 w-full rounded-xl border border-black/10 bg-white px-4 py-3 text-sm outline-none ring-teal-500/30 focus:ring-4"
            placeholder="you@company.com"
          />
        </div>
      </div>

      <div>
        <label htmlFor="message" className="text-sm font-medium text-zinc-700">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          value={form.message}
          onChange={(e) => setForm((p) => ({ ...p, message: e.target.value }))}
          className="mt-2 w-full resize-none rounded-xl border border-black/10 bg-white px-4 py-3 text-sm outline-none ring-teal-500/30 focus:ring-4"
          placeholder="Tell us about your project..."
        />
      </div>

      <div className="flex flex-col sm:flex-row gap-3 sm:items-center">
        <button
          type="submit"
          className="inline-flex items-center justify-center rounded-full bg-zinc-900 px-6 py-3 text-sm font-semibold text-white hover:bg-zinc-800"
        >
          Send Message
        </button>
        <a
          href={mailtoHref}
          className="inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-semibold text-zinc-900 ring-1 ring-black/10 hover:bg-zinc-50"
        >
          Or email us
        </a>
        {submitted ? (
          <p className="text-sm text-teal-700 sm:ml-auto">Message ready to send.</p>
        ) : null}
      </div>

      <p className="text-xs text-zinc-500">
        This demo form does not submit to a backend. Use the “Or email us” option or connect
        an API route.
      </p>
    </form>
  );
}
