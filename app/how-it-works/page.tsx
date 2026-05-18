import Link from "next/link";

const steps = [
  {
    number: "01",
    title: "Tell Us About Your Loved One",
    text: "We begin by learning about your loved one’s age, health needs, mobility, location, budget, family concerns, and the type of support they may need.",
  },
  {
    number: "02",
    title: "We Review Suitable Care Options",
    text: "Hope & Joy reviews suitable assisted living homes and care options based on your family’s needs and preferred island or area.",
  },
  {
    number: "03",
    title: "We Match Care, Comfort, Location & Budget",
    text: "We help narrow the choices by looking at the level of care, environment, availability, pricing, and what would make your loved one feel safe and comfortable.",
  },
  {
    number: "04",
    title: "Your Family Chooses the Best Fit",
    text: "We guide the family through the available options so you can make an informed decision with confidence and peace of mind.",
  },
  {
    number: "05",
    title: "We Help Coordinate the Placement",
    text: "Once a suitable home is selected, we help connect the family and the care home so the next steps can be arranged clearly.",
  },
];

const supportPoints = [
  "Families living in Trinidad & Tobago",
  "Families overseas seeking care for loved ones in the Caribbean",
  "Elderly loved ones needing safer daily support",
  "Post-hospital care placement needs",
  "Long-term assisted living placement",
  "Care homes seeking suitable residents",
];

export default function HowItWorksPage() {
  return (
    <main>
      <section className="bg-[#0F5B5B] px-5 py-20 text-white">
        <div className="mx-auto max-w-7xl">
          <p className="font-bold uppercase tracking-[0.22em] text-[#D9A441]">
            How It Works
          </p>
          <h1 className="mt-4 max-w-4xl text-4xl font-bold leading-tight md:text-6xl">
            A Simple, Caring Process for Finding the Right Home
          </h1>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-white/80">
            Hope & Joy guides families step by step, helping you understand your
            options and find suitable assisted living care for your loved one.
          </p>
        </div>
      </section>

      <section className="px-5 py-20">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-6">
            {steps.map((step) => (
              <div
                key={step.number}
                className="grid gap-6 rounded-[2rem] border border-[#D9A441]/25 bg-white p-7 shadow-sm md:grid-cols-[130px_1fr]"
              >
                <div className="flex h-20 w-20 items-center justify-center rounded-3xl bg-[#FFF8EF] text-2xl font-bold text-[#D9A441]">
                  {step.number}
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-[#0F5B5B] md:text-3xl">
                    {step.title}
                  </h2>
                  <p className="mt-3 max-w-4xl text-lg leading-8 text-[#243232]/72">
                    {step.text}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white px-5 py-20">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <p className="font-bold uppercase tracking-[0.22em] text-[#D9A441]">
              Family Support
            </p>
            <h2 className="mt-4 text-3xl font-bold text-[#0F5B5B] md:text-5xl">
              We help remove the confusion from elder care placement.
            </h2>
            <p className="mt-6 text-lg leading-8 text-[#243232]/75">
              Many families do not know which home is suitable, what questions
              to ask, what level of care is needed, or how to begin. Hope & Joy
              helps organize the process so the family can make a clear and
              caring decision.
            </p>

            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <Link
                href="/find-care"
                className="rounded-full bg-[#D9A441] px-7 py-4 text-center font-bold text-[#243232] transition hover:scale-105"
              >
                Start Placement Request
              </Link>
              <Link
                href="/contact"
                className="rounded-full border border-[#0F5B5B] px-7 py-4 text-center font-bold text-[#0F5B5B] transition hover:bg-[#0F5B5B] hover:text-white"
              >
                Book a Consultation
              </Link>
            </div>
          </div>

          <div className="rounded-[2.5rem] bg-[#FFF8EF] p-8 shadow-sm">
            <h3 className="text-2xl font-bold text-[#0F5B5B]">
              Who This Process Helps
            </h3>

            <div className="mt-6 grid gap-4">
              {supportPoints.map((item) => (
                <div
                  key={item}
                  className="rounded-2xl bg-white px-5 py-4 font-semibold text-[#243232]/80 shadow-sm"
                >
                  ✓ {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="px-5 py-20">
        <div className="mx-auto max-w-5xl rounded-[2.5rem] bg-[#0F5B5B] p-8 text-center text-white shadow-xl md:p-14">
          <p className="font-bold uppercase tracking-[0.22em] text-[#D9A441]">
            Peace of Mind
          </p>
          <h2 className="mt-4 text-3xl font-bold md:text-5xl">
            You Do Not Have to Figure This Out Alone
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-white/78">
            Let Hope & Joy help your family understand the options and choose a
            suitable assisted living home with care and confidence.
          </p>

          <Link
            href="/find-care"
            className="mt-9 inline-flex rounded-full bg-[#D9A441] px-8 py-4 font-bold text-[#243232] transition hover:scale-105"
          >
            Find Care for My Loved One
          </Link>
        </div>
      </section>
    </main>
  );
}