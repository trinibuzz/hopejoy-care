import Link from "next/link";

const values = [
  {
    title: "Compassion First",
    text: "We understand that choosing a care home for a loved one is emotional. Every family is treated with patience, respect, and care.",
  },
  {
    title: "Trusted Guidance",
    text: "With over 10 years of experience, Hope & Joy helps families make informed placement decisions with confidence.",
  },
  {
    title: "Caribbean Knowledge",
    text: "We work with partner homes across Trinidad, Tobago, and the Caribbean, helping families find suitable options based on real needs.",
  },
  {
    title: "Family Peace of Mind",
    text: "Our goal is to help families feel supported, informed, and reassured throughout the placement journey.",
  },
];

export default function AboutPage() {
  return (
    <main>
      <section className="bg-[#0F5B5B] px-5 py-20 text-white">
        <div className="mx-auto max-w-7xl">
          <p className="font-bold uppercase tracking-[0.22em] text-[#D9A441]">
            About Hope & Joy
          </p>
          <h1 className="mt-4 max-w-4xl text-4xl font-bold leading-tight md:text-6xl">
            A Caring Placement Agency Helping Families Find the Right Home
          </h1>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-white/80">
            Hope & Joy Assisted Living Placement Agency was created to help
            families make one of the most important decisions of their lives —
            finding safe, loving, and suitable care for someone they love.
          </p>
        </div>
      </section>

      <section className="px-5 py-20">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="rounded-[2.5rem] bg-white p-8 shadow-sm">
            <p className="text-sm font-bold uppercase tracking-[0.22em] text-[#D9A441]">
              10+ Years of Service
            </p>
            <h2 className="mt-4 text-3xl font-bold text-[#0F5B5B]">
              Built on trust, experience, and compassion.
            </h2>
            <p className="mt-5 leading-8 text-[#243232]/75">
              For over 10 years, we have worked with families locally and
              internationally who needed guidance placing elderly loved ones in
              assisted living homes across Trinidad, Tobago, and the Caribbean.
            </p>
            <p className="mt-4 leading-8 text-[#243232]/75">
              We know that every loved one has different needs. Some need daily
              support, some need closer supervision, some need post-hospital
              care, and some simply need a safer, more comfortable living
              environment.
            </p>
          </div>

          <div>
            <p className="font-bold uppercase tracking-[0.22em] text-[#D9A441]">
              Our Mission
            </p>
            <h2 className="mt-4 text-3xl font-bold text-[#0F5B5B] md:text-5xl">
              Helping families choose care with confidence.
            </h2>
            <p className="mt-6 text-lg leading-8 text-[#243232]/75">
              Our mission is to connect families with trusted assisted living
              homes that match their loved one’s care needs, comfort,
              location, and budget.
            </p>
            <p className="mt-5 text-lg leading-8 text-[#243232]/75">
              Whether the family is in Trinidad, the wider Caribbean, the
              United States, Canada, the United Kingdom, or anywhere in the
              world, Hope & Joy acts as a caring guide during the placement
              process.
            </p>

            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <Link
                href="/find-care"
                className="rounded-full bg-[#D9A441] px-7 py-4 text-center font-bold text-[#243232] transition hover:scale-105"
              >
                Find Care for a Loved One
              </Link>
              <Link
                href="/contact"
                className="rounded-full border border-[#0F5B5B] px-7 py-4 text-center font-bold text-[#0F5B5B] transition hover:bg-[#0F5B5B] hover:text-white"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white px-5 py-20">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-3xl">
            <p className="font-bold uppercase tracking-[0.22em] text-[#D9A441]">
              What We Believe
            </p>
            <h2 className="mt-4 text-3xl font-bold text-[#0F5B5B] md:text-5xl">
              Every family deserves guidance, honesty, and peace of mind.
            </h2>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {values.map((value) => (
              <div
                key={value.title}
                className="rounded-[2rem] border border-[#D9A441]/25 bg-[#FFF8EF] p-7 shadow-sm"
              >
                <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-[#0F5B5B] text-white">
                  ♥
                </div>
                <h3 className="text-xl font-bold text-[#0F5B5B]">
                  {value.title}
                </h3>
                <p className="mt-4 leading-7 text-[#243232]/70">
                  {value.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-5 py-20">
        <div className="mx-auto grid max-w-7xl gap-10 rounded-[2.5rem] bg-[#0F5B5B] p-8 text-white shadow-xl md:p-12 lg:grid-cols-[1fr_0.8fr]">
          <div>
            <p className="font-bold uppercase tracking-[0.22em] text-[#D9A441]">
              Why Families Choose Us
            </p>
            <h2 className="mt-4 text-3xl font-bold md:text-5xl">
              We help remove the stress from finding elder care.
            </h2>
            <p className="mt-6 text-lg leading-8 text-white/78">
              Families often do not know where to start, especially when they
              live overseas. We help narrow the options, explain the process,
              and guide families toward homes that are suitable for their loved
              one’s situation.
            </p>
          </div>

          <div className="rounded-[2rem] bg-white/10 p-8 backdrop-blur">
            <ul className="space-y-4 text-white/85">
              <li>✓ Certified elder care placement guidance</li>
              <li>✓ Over 10 years of placement experience</li>
              <li>✓ Partner homes across the Caribbean</li>
              <li>✓ Support for families living abroad</li>
              <li>✓ Warm, personal, family-first service</li>
            </ul>
          </div>
        </div>
      </section>
    </main>
  );
}