"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

const navItems = [
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [open]);

  return (
    <header className="sticky top-0 z-50 border-b border-black/5 bg-white/80 backdrop-blur">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="flex h-16 items-center justify-between">
          <Link
            href="#top"
            className="flex items-center gap-3"
            onClick={() => setOpen(false)}
          >
            <Image src="/logo.svg" alt="Patel Infrastructure" width={140} height={28} priority />
          </Link>

          <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-zinc-700">
            {navItems.map((item) => (
              <a key={item.href} href={item.href} className="hover:text-zinc-950">
                {item.label}
              </a>
            ))}
            <a
              href="#contact"
              className="inline-flex items-center justify-center rounded-full bg-zinc-900 px-4 py-2 text-white hover:bg-zinc-800"
            >
              Get a Quote
            </a>
          </nav>

          <button
            type="button"
            className="md:hidden inline-flex items-center justify-center rounded-lg border border-black/10 px-3 py-2 text-sm font-medium text-zinc-800"
            aria-label="Open menu"
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
          >
            Menu
          </button>
        </div>

        {open ? (
          <div className="md:hidden pb-4">
            <div className="rounded-2xl border border-black/10 bg-white p-4 shadow-sm">
              <div className="flex flex-col gap-3 text-sm font-medium text-zinc-700">
                {navItems.map((item) => (
                  <a
                    key={item.href}
                    href={item.href}
                    className="rounded-lg px-3 py-2 hover:bg-zinc-50 hover:text-zinc-950"
                    onClick={() => setOpen(false)}
                  >
                    {item.label}
                  </a>
                ))}
                <a
                  href="#contact"
                  className="mt-2 inline-flex items-center justify-center rounded-xl bg-zinc-900 px-4 py-2 text-white"
                  onClick={() => setOpen(false)}
                >
                  Get a Quote
                </a>
              </div>
            </div>
          </div>
        ) : null}
      </div>
    </header>
  );
}
