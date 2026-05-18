import Link from "next/link";

const testimonials = [
  {
    quote:
      "We live overseas and did not know where to start. Hope & Joy helped us find a safe and caring home for our mother.",
    name: "Family Living Abroad",
    location: "Canada / Trinidad",
  },
  {
    quote:
      "The process felt personal and comforting. They listened to our needs and guided us step by step.",
    name: "Grateful Family",
    location: "Trinidad & Tobago",
  },
  {
    quote:
      "We are grateful for the support, knowledge, and care shown during a very emotional time for our family.",
    name: "Hope & Joy Family",
    location: "Caribbean",
  },
  {
    quote:
      "Finding care for our father was stressful until we spoke with Hope & Joy. They helped us understand our options clearly.",
    name: "Daughter of Client",
    location: "United States / Tobago",
  },
  {
    quote:
      "They treated our situation with patience and respect. It never felt rushed or cold.",
    name: "Client Family",
    location: "Trinidad",
  },
  {
    quote:
      "Hope & Joy helped us find a place where our aunt could feel safe, cared for, and comfortable.",
    name: "Family Member",
    location: "Caribbean",
  },
];

export default function TestimonialsPage() {
  return (
    <main>
      <section className="bg-[#0F5B5B] px-5 py-20 text-white">
        <div className="mx-auto max-w-7xl">
          <p className="font-bold uppercase tracking-[0.22em] text-[#D9A441]">
            Testimonials
          </p>
          <h1 className="mt-4 max-w-4xl text-4xl font-bold leading-tight md:text-6xl">
            Families Trust Hope & Joy During Important Care Decisions
          </h1>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-white/80">
            Choosing a care home for someone you love is emotional. Hope & Joy
            is here to guide families with compassion, clarity, and peace of
            mind.
          </p>
        </div>
      </section>

      <section className="px-5 py-20">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-3xl">
            <p className="font-bold uppercase tracking-[0.22em] text-[#D9A441]">
              Family Stories
            </p>
            <h2 className="mt-4 text-3xl font-bold text-[#0F5B5B] md:text-5xl">
              Real care. Real guidance. Real peace of mind.
            </h2>
            <p className="mt-6 text-lg leading-8 text-[#243232]/75">
              These sample testimonials show the type of trust and comfort the
              website should communicate. Later, we can replace them with real
              family reviews and photos.
            </p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {testimonials.map((item) => (
              <div
                key={item.quote}
                className="rounded-[2rem] border border-[#D9A441]/25 bg-white p-8 shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
              >
                <p className="text-5xl leading-none text-[#D9A441]">“</p>
                <p className="mt-4 min-h-[150px] text-lg leading-8 text-[#243232]/75">
                  {item.quote}
                </p>

                <div className="mt-6 border-t border-[#D9A441]/20 pt-5">
                  <p className="font-bold text-[#0F5B5B]">{item.name}</p>
                  <p className="mt-1 text-sm text-[#243232]/60">
                    {item.location}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white px-5 py-20">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <p className="font-bold uppercase tracking-[0.22em] text-[#D9A441]">
              Why Reviews Matter
            </p>
            <h2 className="mt-4 text-3xl font-bold text-[#0F5B5B] md:text-5xl">
              Families want to know they are speaking with people they can
              trust.
            </h2>
          </div>

          <div className="rounded-[2.5rem] bg-[#FFF8EF] p-8 shadow-sm">
            <p className="text-lg leading-8 text-[#243232]/75">
              A strong testimonial page helps families feel safe before they
              ever call. Because many clients may be overseas, reviews and
              success stories will help show that Hope & Joy understands the
              emotional weight of elder care placement.
            </p>

            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {[
                "Builds trust",
                "Reassures overseas families",
                "Shows compassion",
                "Proves experience",
              ].map((item) => (
                <div
                  key={item}
                  className="rounded-2xl bg-white px-5 py-4 font-bold text-[#0F5B5B]"
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
            Need Guidance?
          </p>
          <h2 className="mt-4 text-3xl font-bold md:text-5xl">
            Let Hope & Joy Help Your Family Find the Right Home
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-white/78">
            Start with a placement request and we will help guide your family
            through the next step.
          </p>

          <div className="mt-9 flex flex-col justify-center gap-4 sm:flex-row">
            <Link
              href="/find-care"
              className="rounded-full bg-[#D9A441] px-7 py-4 font-bold text-[#243232] transition hover:scale-105"
            >
              Find Care for My Loved One
            </Link>
            <Link
              href="/contact"
              className="rounded-full border border-white/30 px-7 py-4 font-bold text-white transition hover:bg-white hover:text-[#0F5B5B]"
            >
              Contact Hope & Joy
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}