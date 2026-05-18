import Link from "next/link";

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

const familyLocations = [
  "United States",
  "Canada",
  "United Kingdom",
  "Caribbean Islands",
  "Europe",
  "Anywhere in the world",
];

export default function CaribbeanCoveragePage() {
  return (
    <main>
      <section className="bg-[#0F5B5B] px-5 py-20 text-white">
        <div className="mx-auto max-w-7xl">
          <p className="font-bold uppercase tracking-[0.22em] text-[#D9A441]">
            Caribbean Coverage
          </p>
          <h1 className="mt-4 max-w-4xl text-4xl font-bold leading-tight md:text-6xl">
            Assisted Living Placement Across Trinidad, Tobago & the Caribbean
          </h1>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-white/80">
            Hope & Joy helps families locally and internationally find suitable
            elderly care homes across the Caribbean.
          </p>
        </div>
      </section>

      <section className="px-5 py-20">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.95fr_1.05fr]">
          <div>
            <p className="font-bold uppercase tracking-[0.22em] text-[#D9A441]">
              Care Across the Islands
            </p>
            <h2 className="mt-4 text-3xl font-bold text-[#0F5B5B] md:text-5xl">
              We help families find trusted care options throughout the region.
            </h2>
            <p className="mt-6 text-lg leading-8 text-[#243232]/75">
              Every family has different needs. Some families want care close to
              home, while others live overseas and need help finding a safe
              place for a loved one in the Caribbean. Hope & Joy helps guide the
              process with care, experience, and regional knowledge.
            </p>
            <p className="mt-5 text-lg leading-8 text-[#243232]/75">
              Our goal is to help match your loved one with a care environment
              that supports their needs, comfort, budget, and location
              preference.
            </p>

            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <Link
                href="/find-care"
                className="rounded-full bg-[#D9A441] px-7 py-4 text-center font-bold text-[#243232] transition hover:scale-105"
              >
                Find Care Now
              </Link>
              <Link
                href="/partner-homes"
                className="rounded-full border border-[#0F5B5B] px-7 py-4 text-center font-bold text-[#0F5B5B] transition hover:bg-[#0F5B5B] hover:text-white"
              >
                Partner With Us
              </Link>
            </div>
          </div>

          <div className="rounded-[2.5rem] bg-white p-8 shadow-sm">
            <h3 className="text-2xl font-bold text-[#0F5B5B]">
              Islands & Areas We Support
            </h3>

            <div className="mt-6 flex flex-wrap gap-3">
              {islands.map((island) => (
                <span
                  key={island}
                  className="rounded-full border border-[#D9A441]/30 bg-[#FFF8EF] px-5 py-3 text-sm font-bold text-[#243232]"
                >
                  {island}
                </span>
              ))}
            </div>

            <div className="mt-8 rounded-[2rem] bg-[#0F5B5B] p-7 text-white">
              <p className="text-sm font-bold uppercase tracking-[0.22em] text-[#D9A441]">
                Worldwide Families
              </p>
              <h4 className="mt-3 text-2xl font-bold">
                Supporting families near and far.
              </h4>
              <p className="mt-4 leading-7 text-white/75">
                Whether you live in the Caribbean or overseas, Hope & Joy can
                help you begin the placement process for someone you love.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white px-5 py-20">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-3xl">
            <p className="font-bold uppercase tracking-[0.22em] text-[#D9A441]">
              International Family Support
            </p>
            <h2 className="mt-4 text-3xl font-bold text-[#0F5B5B] md:text-5xl">
              Many families live abroad. Their loved ones still need care back
              home.
            </h2>
            <p className="mt-6 text-lg leading-8 text-[#243232]/75">
              Hope & Joy assists families who may be living overseas but need
              trusted guidance finding suitable assisted living care for an
              elderly loved one in Trinidad, Tobago, or another Caribbean
              island.
            </p>
          </div>

          <div className="mt-12 grid gap-5 md:grid-cols-3">
            {familyLocations.map((location) => (
              <div
                key={location}
                className="rounded-[2rem] border border-[#D9A441]/25 bg-[#FFF8EF] p-7 shadow-sm"
              >
                <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-[#0F5B5B] text-white">
                  🌎
                </div>
                <h3 className="text-xl font-bold text-[#0F5B5B]">
                  Families in {location}
                </h3>
                <p className="mt-3 leading-7 text-[#243232]/70">
                  We help families start the care placement conversation even
                  when they are not physically in the same country as their
                  loved one.
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-5 py-20">
        <div className="mx-auto grid max-w-7xl gap-10 rounded-[2.5rem] bg-[#0F5B5B] p-8 text-white shadow-xl md:p-12 lg:grid-cols-[1fr_0.85fr]">
          <div>
            <p className="font-bold uppercase tracking-[0.22em] text-[#D9A441]">
              Get Started
            </p>
            <h2 className="mt-4 text-3xl font-bold md:text-5xl">
              Looking for care in a specific Caribbean island?
            </h2>
            <p className="mt-6 text-lg leading-8 text-white/78">
              Tell us where your loved one is located, where you would prefer
              them to be placed, and what type of care is needed. Hope & Joy
              will help guide the next step.
            </p>
          </div>

          <div className="rounded-[2rem] bg-white/10 p-8 backdrop-blur">
            <h3 className="text-2xl font-bold">Start a Placement Request</h3>
            <p className="mt-4 leading-7 text-white/75">
              Complete our care request form and share your family’s needs.
            </p>
            <Link
              href="/find-care"
              className="mt-7 inline-flex rounded-full bg-[#D9A441] px-7 py-3 font-bold text-[#243232] transition hover:scale-105"
            >
              Tell Us About Your Loved One
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}