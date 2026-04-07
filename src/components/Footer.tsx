import Image from "next/image";

export default function Footer() {
  return (
    <footer className="border-t border-black/5 bg-white">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 py-10">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-center gap-3">
            <Image src="/logo.svg" alt="Patel Infrastructure" width={140} height={28} />
            <p className="text-sm text-zinc-500">Reliable delivery. Built to last.</p>
          </div>

          <div className="flex items-center gap-6 text-sm font-medium text-zinc-600">
            <a href="#about" className="hover:text-zinc-900">
              About
            </a>
            <a href="#services" className="hover:text-zinc-900">
              Services
            </a>
            <a href="#contact" className="hover:text-zinc-900">
              Contact
            </a>
          </div>
        </div>

        <div className="mt-8 flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-xs text-zinc-500">
            © {new Date().getFullYear()} Patel Infrastructure. All rights reserved.
          </p>
          <p className="text-xs text-zinc-500">
            Designed with a minimal, responsive layout for modern business websites.
          </p>
        </div>
      </div>
    </footer>
  );
}
