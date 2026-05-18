import Link from "next/link";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  { label: "Find Care", href: "/find-care" },
  { label: "How It Works", href: "/how-it-works" },
  { label: "Partner Homes", href: "/partner-homes" },
  { label: "Coverage", href: "/caribbean-coverage" },
  { label: "Testimonials", href: "/testimonials" },
  { label: "Contact", href: "/contact" },
];

export default function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-[#D9A441]/30 bg-[#FFF8EF]/95 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-5 py-3">
        <Link href="/" className="flex shrink-0 items-center gap-3">
          <img
            src="/images/hopejoy-logo.png"
            alt="Hope & Joy Assisted Living Placement Agency"
            className="h-16 w-16 rounded-full object-contain"
          />

          <div className="hidden leading-tight sm:block">
            <span className="block text-xl font-bold tracking-tight text-[#0F5B5B]">
              Hope & Joy
            </span>
            <span className="block text-[10px] font-medium uppercase tracking-[0.2em] text-[#D9A441]">
              Assisted Living Placement
            </span>
          </div>
        </Link>

        <nav className="hidden flex-1 items-center justify-center gap-4 text-sm font-medium text-[#243232] xl:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              className="whitespace-nowrap transition hover:text-[#0F5B5B]"
              href={link.href}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden shrink-0 items-center gap-3 md:flex">
          <a
            href="tel:+18680000000"
            className="rounded-full border border-[#0F5B5B] px-5 py-2 text-sm font-semibold text-[#0F5B5B] transition hover:bg-[#0F5B5B] hover:text-white"
          >
            Call Now
          </a>
          <a
            href="https://wa.me/18680000000"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full bg-[#D9A441] px-5 py-2 text-sm font-semibold text-[#243232] shadow-sm transition hover:scale-105"
          >
            WhatsApp
          </a>
        </div>

        <a
          href="https://wa.me/18680000000"
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-full bg-[#0F5B5B] px-4 py-2 text-sm font-semibold text-white md:hidden"
        >
          WhatsApp
        </a>
      </div>

      <nav className="border-t border-[#D9A441]/20 px-5 py-3 xl:hidden">
        <div className="mx-auto flex max-w-7xl gap-4 overflow-x-auto text-sm font-semibold text-[#243232]">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="shrink-0 rounded-full bg-white px-4 py-2 shadow-sm transition hover:bg-[#0F5B5B] hover:text-white"
            >
              {link.label}
            </Link>
          ))}
        </div>
      </nav>
    </header>
  );
}