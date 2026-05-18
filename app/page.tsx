import Link from "next/link";

const trustBadges = [
  "10+ Years Experience",
  "Certified Placement Guidance",
  "Trusted Partner Homes",
  "Caribbean Care Network",
  "Families Worldwide",
];

const services = [
  {
    title: "Assisted Living Placement",
    text: "We help families find suitable homes for elderly loved ones who need daily care, support, and a safe living environment.",
  },
  {
    title: "Caribbean Care Network",
    text: "We work with homes across Trinidad, Tobago, and the wider Caribbean to help families find trusted placement options.",
  },
  {
    title: "International Family Support",
    text: "We assist families living abroad who need help placing a loved one back home or within the Caribbean.",
  },
];

const steps = [
  "Tell Us About Your Loved One",
  "We Review Suitable Homes",
  "We Match Care Needs, Location & Budget",
  "Your Family Chooses the Best Fit",
  "We Help Coordinate the Placement",
];

const islands = [
  "Trinidad",
  "Tobago",
  "Barbados",
  "Grenada",
  "St. Lucia",
  "St. Vincent",
  "Jamaica",
  "Antigua",
  "Dominica",
  "Guyana",
  "Other Caribbean Islands",
];

export default function HomePage() {
  return (
    <main>
      <section className="relative overflow-hidden bg-[#0F5B5B]">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(217,164,65,0.28),_transparent_35%),linear-gradient(135deg,_rgba(15,91,91,0.96),_rgba(36,50,50,0.92))]" />

        <div className="relative mx-auto grid min-h-[720px] max-w-7xl items-center gap-12 px-5 py-20 lg:grid-cols-[1.05fr_0.95fr]">
          <div className="text-white">
            <p className="mb-5 inline-flex rounded-full border border-[#D9A441]/50 bg-white/10 px-4 py-2 text-sm font-semibold text-[#F8E7B2] backdrop-blur">
              Trusted elder care placement across the Caribbean
            </p>

            <h1 className="max-w-4xl text-4xl font-bold leading-tight tracking-tight md:text-6xl">
              Helping Families Find Safe, Loving Care Across the Caribbean
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-white/86">
              For over 10 years, Hope & Joy Assisted Living Placement Agency has
              helped families in Trinidad, Tobago, the Caribbean, and around the
              world find trusted assisted living homes for their loved ones.
            </p>

            <p className="mt-4 max-w-2xl text-base leading-8 text-white/75">
              We guide families with care, compassion, and experience — helping
              you choose a home that matches your loved one’s needs, comfort,
              location, and budget.
            </p>

            <div className="mt-9 flex flex-col gap-4 sm:flex-row">
              <Link
                href="/find-care"
                className="rounded-full bg-[#D9A441] px-7 py-4 text-center font-bold text-[#243232] shadow-lg transition hover:scale-105"
              >
                Find a Home for My Loved One
              </Link>

              <Link
                href="/partner-homes"
                className="rounded-full border border-white/40 bg-white/10 px-7 py-4 text-center font-bold text-white backdrop-blur transition hover:bg-white hover:text-[#0F5B5B]"
              >
                Partner With Us
              </Link>
            </div>

            <p className="mt-6 text-sm text-white/70">
              Trusted by families locally and internationally.
            </p>
          </div>

          <div className="relative">
            <div className="rounded-[2.5rem] border border-white/15 bg-white/10 p-4 shadow-2xl backdrop-blur">
              <div className="overflow-hidden rounded-[2rem] bg-[#FFF8EF] shadow-xl">
                <div className="relative min-h-[500px] bg-[linear-gradient(90deg,_rgba(255,248,239,0.08),_rgba(15,91,91,0.12)),url('/images/hopejoy-hero-care.png')] bg-cover bg-center">
                  <div className="absolute bottom-6 left-6 right-6 rounded-3xl bg-white/92 p-6 shadow-xl backdrop-blur">
                    <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#D9A441]">
                      Care with dignity
                    </p>
                    <h2 className="mt-3 text-2xl font-bold text-[#0F5B5B]">
                      Safe, loving care in a peaceful home setting.
                    </h2>
                    <p className="mt-3 text-sm leading-6 text-[#243232]/75">
                      Helping families find trusted assisted living homes with
                      comfort, compassion, and peace of mind.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="absolute -bottom-6 -left-4 rounded-3xl bg-white px-6 py-5 shadow-xl">
              <p className="text-3xl font-bold text-[#0F5B5B]">10+</p>
              <p className="text-sm font-semibold text-[#243232]/70">
                Years of trusted service
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#FFF8EF] px-5 py-10">
        <div className="mx-auto grid max-w-7xl gap-4 md:grid-cols-5">
          {trustBadges.map((badge) => (
            <div
              key={badge}
              className="rounded-3xl border border-[#D9A441]/30 bg-white p-5 text-center shadow-sm"
            >
              <div className="mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-[#F6D8C3] text-xl">
                ✓
              </div>
              <p className="text-sm font-bold text-[#0F5B5B]">{badge}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="px-5 py-20">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-3xl">
            <p className="font-bold uppercase tracking-[0.22em] text-[#D9A441]">
              What We Do
            </p>
            <h2 className="mt-3 text-3xl font-bold text-[#0F5B5B] md:text-5xl">
              We Make Elder Care Placement Easier for Families
            </h2>
            <p className="mt-5 text-lg leading-8 text-[#243232]/75">
              Choosing a care home for someone you love can feel overwhelming.
              Hope & Joy helps remove the stress by guiding your family through
              suitable assisted living options based on care needs, location,
              budget, comfort, and availability.
            </p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {services.map((service) => (
              <div
                key={service.title}
                className="rounded-[2rem] border border-[#D9A441]/25 bg-white p-8 shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
              >
                <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-[#0F5B5B] text-2xl text-white">
                  ♥
                </div>
                <h3 className="text-2xl font-bold text-[#0F5B5B]">
                  {service.title}
                </h3>
                <p className="mt-4 leading-7 text-[#243232]/70">
                  {service.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white px-5 py-20">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <p className="font-bold uppercase tracking-[0.22em] text-[#D9A441]">
              Who We Help
            </p>
            <h2 className="mt-3 text-3xl font-bold text-[#0F5B5B] md:text-5xl">
              Guidance for Families Near and Far
            </h2>
            <p className="mt-5 text-lg leading-8 text-[#243232]/75">
              Whether your family is nearby or overseas, we help you make care
              decisions with confidence, compassion, and clear guidance.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {[
              "Families in Trinidad & Tobago",
              "Families Living Overseas",
              "Seniors Needing Long-Term Care",
              "Loved Ones Leaving Hospital",
              "Families Seeking Safer Living Arrangements",
              "Care Homes Looking for Suitable Residents",
            ].map((item) => (
              <div
                key={item}
                className="rounded-3xl border border-[#0F5B5B]/10 bg-[#FFF8EF] p-6 font-semibold text-[#243232] shadow-sm"
              >
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-5 py-20">
        <div className="mx-auto max-w-7xl">
          <div className="text-center">
            <p className="font-bold uppercase tracking-[0.22em] text-[#D9A441]">
              How It Works
            </p>
            <h2 className="mt-3 text-3xl font-bold text-[#0F5B5B] md:text-5xl">
              A Simple, Caring Placement Process
            </h2>
          </div>

          <div className="mt-12 grid gap-5 md:grid-cols-5">
            {steps.map((step, index) => (
              <div
                key={step}
                className="rounded-[2rem] bg-white p-6 text-center shadow-sm"
              >
                <div className="mx-auto mb-5 flex h-12 w-12 items-center justify-center rounded-full bg-[#D9A441] font-bold text-[#243232]">
                  {index + 1}
                </div>
                <p className="font-bold text-[#0F5B5B]">{step}</p>
              </div>
            ))}
          </div>

          <div className="mt-10 text-center">
            <Link
              href="/how-it-works"
              className="inline-flex rounded-full border border-[#0F5B5B] px-7 py-3 font-bold text-[#0F5B5B] transition hover:bg-[#0F5B5B] hover:text-white"
            >
              See How It Works
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-[#0F5B5B] px-5 py-20 text-white">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-3xl">
            <p className="font-bold uppercase tracking-[0.22em] text-[#D9A441]">
              Caribbean Coverage
            </p>
            <h2 className="mt-3 text-3xl font-bold md:text-5xl">
              Placement Support Across Trinidad, Tobago & the Caribbean
            </h2>
            <p className="mt-5 text-lg leading-8 text-white/78">
              Whether your family is in the Caribbean, the United States,
              Canada, the United Kingdom, or anywhere in the world, Hope & Joy
              helps connect you with suitable assisted living options across the
              islands.
            </p>
          </div>

          <div className="mt-10 flex flex-wrap gap-3">
            {islands.map((island) => (
              <span
                key={island}
                className="rounded-full border border-white/20 bg-white/10 px-5 py-3 text-sm font-semibold backdrop-blur"
              >
                {island}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section className="px-5 py-20">
        <div className="mx-auto grid max-w-7xl items-center gap-10 rounded-[2.5rem] bg-white p-8 shadow-sm md:p-12 lg:grid-cols-[1fr_0.8fr]">
          <div>
            <p className="font-bold uppercase tracking-[0.22em] text-[#D9A441]">
              Partner Homes
            </p>
            <h2 className="mt-3 text-3xl font-bold text-[#0F5B5B] md:text-5xl">
              Are You an Assisted Living Home?
            </h2>
            <p className="mt-5 text-lg leading-8 text-[#243232]/75">
              Hope & Joy partners with trusted elderly care homes and
              residential facilities across the Caribbean. If your home provides
              safe, compassionate care, you can apply to join our placement
              network.
            </p>
          </div>

          <div className="rounded-[2rem] bg-[#FFF8EF] p-8">
            <h3 className="text-2xl font-bold text-[#0F5B5B]">
              Join Our Trusted Network
            </h3>
            <p className="mt-4 leading-7 text-[#243232]/70">
              Connect with families looking for safe, suitable care options for
              their loved ones.
            </p>
            <Link
              href="/partner-homes"
              className="mt-7 inline-flex rounded-full bg-[#D9A441] px-7 py-3 font-bold text-[#243232] transition hover:scale-105"
            >
              Apply to Become a Partner Home
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-white px-5 py-20">
        <div className="mx-auto max-w-7xl">
          <div className="text-center">
            <p className="font-bold uppercase tracking-[0.22em] text-[#D9A441]">
              Testimonials
            </p>
            <h2 className="mt-3 text-3xl font-bold text-[#0F5B5B] md:text-5xl">
              Families Trust Hope & Joy
            </h2>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {[
              "We live overseas and did not know where to start. Hope & Joy helped us find a safe and caring home for our mother.",
              "The process felt personal and comforting. They listened to our needs and guided us step by step.",
              "We are grateful for the support, knowledge, and care shown during a very emotional time for our family.",
            ].map((quote) => (
              <div
                key={quote}
                className="rounded-[2rem] border border-[#D9A441]/25 bg-[#FFF8EF] p-8 shadow-sm"
              >
                <p className="text-5xl leading-none text-[#D9A441]">“</p>
                <p className="mt-3 leading-8 text-[#243232]/75">{quote}</p>
                <p className="mt-6 font-bold text-[#0F5B5B]">
                  Hope & Joy Family
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-5 py-20">
        <div className="mx-auto max-w-5xl rounded-[2.5rem] bg-[#0F5B5B] p-8 text-center text-white shadow-xl md:p-14">
          <p className="font-bold uppercase tracking-[0.22em] text-[#D9A441]">
            Start Today
          </p>
          <h2 className="mt-4 text-3xl font-bold md:text-5xl">
            Need Help Finding the Right Home for Your Loved One?
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-white/78">
            Speak with Hope & Joy today and let us guide your family with care,
            experience, and peace of mind.
          </p>

          <div className="mt-9 flex flex-col justify-center gap-4 sm:flex-row">
            <Link
              href="/contact"
              className="rounded-full bg-[#D9A441] px-7 py-4 font-bold text-[#243232] transition hover:scale-105"
            >
              Book a Consultation
            </Link>
            <a
              href="https://wa.me/18680000000"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border border-white/30 px-7 py-4 font-bold text-white transition hover:bg-white hover:text-[#0F5B5B]"
            >
              WhatsApp Us Today
            </a>
            <a
              href="tel:+18680000000"
              className="rounded-full border border-white/30 px-7 py-4 font-bold text-white transition hover:bg-white hover:text-[#0F5B5B]"
            >
              Call Now
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}