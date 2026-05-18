import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-[#D9A441]/30 bg-[#0F5B5B] text-white">
      <div className="mx-auto grid max-w-7xl gap-10 px-5 py-12 md:grid-cols-4">
        <div className="md:col-span-2">
          <div className="flex items-center gap-4">
            <img
              src="/images/hopejoy-logo.png"
              alt="Hope & Joy Assisted Living Placement Agency"
              className="h-20 w-20 rounded-full bg-white object-contain p-1"
            />

            <div>
              <h2 className="text-2xl font-bold">Hope & Joy</h2>
              <p className="mt-1 text-sm uppercase tracking-[0.22em] text-[#D9A441]">
                Assisted Living Placement Agency
              </p>
            </div>
          </div>

          <p className="mt-5 max-w-md text-sm leading-7 text-white/80">
            Helping families find safe, loving, and suitable care homes across
            Trinidad, Tobago, and the Caribbean.
          </p>
        </div>

        <div>
          <h3 className="mb-4 font-semibold text-[#D9A441]">Quick Links</h3>
          <div className="flex flex-col gap-2 text-sm text-white/80">
            <Link href="/">Home</Link>
            <Link href="/about">About Us</Link>
            <Link href="/find-care">Find Care</Link>
            <Link href="/how-it-works">How It Works</Link>
            <Link href="/partner-homes">Partner Homes</Link>
            <Link href="/caribbean-coverage">Coverage</Link>
            <Link href="/testimonials">Testimonials</Link>
            <Link href="/contact">Contact</Link>
          </div>
        </div>

        <div>
          <h3 className="mb-4 font-semibold text-[#D9A441]">Contact</h3>
          <div className="space-y-2 text-sm text-white/80">
            <p>Phone: Add phone number here</p>
            <p>WhatsApp: Add WhatsApp number here</p>
            <p>Email: Add email here</p>
            <p>Location: Trinidad & Tobago / Caribbean</p>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10 px-5 py-5 text-center text-xs text-white/60">
        © {new Date().getFullYear()} Hope & Joy Assisted Living Placement
        Agency. All rights reserved.
      </div>
    </footer>
  );
}