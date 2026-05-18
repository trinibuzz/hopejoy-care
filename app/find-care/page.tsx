const careOptions = [
  "Assisted Living",
  "Long-Term Elderly Care",
  "Post-Hospital Care",
  "Respite Care",
  "Dementia / Memory Care Guidance",
  "Daily Living Support",
];

export default function FindCarePage() {
  return (
    <main>
      <section className="bg-[#0F5B5B] px-5 py-20 text-white">
        <div className="mx-auto max-w-7xl">
          <p className="font-bold uppercase tracking-[0.22em] text-[#D9A441]">
            Find Care
          </p>
          <h1 className="mt-4 max-w-4xl text-4xl font-bold leading-tight md:text-6xl">
            Tell Us About Your Loved One
          </h1>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-white/80">
            Share a few details with Hope & Joy, and we will help guide your
            family toward assisted living homes that match your loved one’s
            care needs, location, comfort, and budget.
          </p>
        </div>
      </section>

      <section className="px-5 py-20">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.85fr_1.15fr]">
          <aside className="space-y-6">
            <div className="rounded-[2rem] bg-white p-8 shadow-sm">
              <h2 className="text-2xl font-bold text-[#0F5B5B]">
                Care We Can Help With
              </h2>
              <div className="mt-6 space-y-3">
                {careOptions.map((item) => (
                  <div
                    key={item}
                    className="rounded-2xl bg-[#FFF8EF] px-5 py-4 font-semibold text-[#243232]/80"
                  >
                    ✓ {item}
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-[2rem] bg-[#0F5B5B] p-8 text-white shadow-sm">
              <p className="text-sm font-bold uppercase tracking-[0.22em] text-[#D9A441]">
                Need urgent help?
              </p>
              <h3 className="mt-4 text-2xl font-bold">
                Speak with us directly.
              </h3>
              <p className="mt-4 leading-7 text-white/75">
                If your family needs care quickly, contact Hope & Joy and we
                will guide you through the next step.
              </p>
              <div className="mt-6 flex flex-col gap-3">
                <a
                  href="https://wa.me/18680000000"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-full bg-[#D9A441] px-6 py-3 text-center font-bold text-[#243232]"
                >
                  WhatsApp Us
                </a>
                <a
                  href="tel:+18680000000"
                  className="rounded-full border border-white/30 px-6 py-3 text-center font-bold text-white"
                >
                  Call Now
                </a>
              </div>
            </div>
          </aside>

          <section className="rounded-[2.5rem] bg-white p-6 shadow-sm md:p-10">
            <p className="font-bold uppercase tracking-[0.22em] text-[#D9A441]">
              Placement Request Form
            </p>
            <h2 className="mt-3 text-3xl font-bold text-[#0F5B5B]">
              Start a Care Placement Request
            </h2>
            <p className="mt-4 leading-7 text-[#243232]/70">
              This form is the first step. Once submitted, Hope & Joy can review
              the information and contact the family to discuss suitable care
              options.
            </p>

            <form className="mt-8 grid gap-5">
              <div className="grid gap-5 md:grid-cols-2">
                <label className="block">
                  <span className="font-semibold text-[#243232]">
                    Your Full Name
                  </span>
                  <input
                    type="text"
                    placeholder="Enter your name"
                    className="mt-2 w-full rounded-2xl border border-[#0F5B5B]/15 bg-[#FFF8EF] px-4 py-3 outline-none focus:border-[#D9A441]"
                  />
                </label>

                <label className="block">
                  <span className="font-semibold text-[#243232]">
                    Phone / WhatsApp
                  </span>
                  <input
                    type="tel"
                    placeholder="Enter phone number"
                    className="mt-2 w-full rounded-2xl border border-[#0F5B5B]/15 bg-[#FFF8EF] px-4 py-3 outline-none focus:border-[#D9A441]"
                  />
                </label>
              </div>

              <div className="grid gap-5 md:grid-cols-2">
                <label className="block">
                  <span className="font-semibold text-[#243232]">Email</span>
                  <input
                    type="email"
                    placeholder="Enter email address"
                    className="mt-2 w-full rounded-2xl border border-[#0F5B5B]/15 bg-[#FFF8EF] px-4 py-3 outline-none focus:border-[#D9A441]"
                  />
                </label>

                <label className="block">
                  <span className="font-semibold text-[#243232]">
                    Country You Are Contacting From
                  </span>
                  <input
                    type="text"
                    placeholder="Example: Trinidad, USA, Canada, UK"
                    className="mt-2 w-full rounded-2xl border border-[#0F5B5B]/15 bg-[#FFF8EF] px-4 py-3 outline-none focus:border-[#D9A441]"
                  />
                </label>
              </div>

              <div className="grid gap-5 md:grid-cols-2">
                <label className="block">
                  <span className="font-semibold text-[#243232]">
                    Loved One’s Name
                  </span>
                  <input
                    type="text"
                    placeholder="Enter loved one’s name"
                    className="mt-2 w-full rounded-2xl border border-[#0F5B5B]/15 bg-[#FFF8EF] px-4 py-3 outline-none focus:border-[#D9A441]"
                  />
                </label>

                <label className="block">
                  <span className="font-semibold text-[#243232]">
                    Loved One’s Age
                  </span>
                  <input
                    type="text"
                    placeholder="Example: 78"
                    className="mt-2 w-full rounded-2xl border border-[#0F5B5B]/15 bg-[#FFF8EF] px-4 py-3 outline-none focus:border-[#D9A441]"
                  />
                </label>
              </div>

              <div className="grid gap-5 md:grid-cols-2">
                <label className="block">
                  <span className="font-semibold text-[#243232]">
                    Current Location
                  </span>
                  <input
                    type="text"
                    placeholder="Where is your loved one located now?"
                    className="mt-2 w-full rounded-2xl border border-[#0F5B5B]/15 bg-[#FFF8EF] px-4 py-3 outline-none focus:border-[#D9A441]"
                  />
                </label>

                <label className="block">
                  <span className="font-semibold text-[#243232]">
                    Preferred Island / Area
                  </span>
                  <input
                    type="text"
                    placeholder="Example: Trinidad, Tobago, Grenada"
                    className="mt-2 w-full rounded-2xl border border-[#0F5B5B]/15 bg-[#FFF8EF] px-4 py-3 outline-none focus:border-[#D9A441]"
                  />
                </label>
              </div>

              <div className="grid gap-5 md:grid-cols-2">
                <label className="block">
                  <span className="font-semibold text-[#243232]">
                    Type of Care Needed
                  </span>
                  <select className="mt-2 w-full rounded-2xl border border-[#0F5B5B]/15 bg-[#FFF8EF] px-4 py-3 outline-none focus:border-[#D9A441]">
                    <option>Select care type</option>
                    <option>Assisted Living</option>
                    <option>Long-Term Elderly Care</option>
                    <option>Post-Hospital Care</option>
                    <option>Respite Care</option>
                    <option>Dementia / Memory Care</option>
                    <option>Not Sure Yet</option>
                  </select>
                </label>

                <label className="block">
                  <span className="font-semibold text-[#243232]">
                    Budget Range
                  </span>
                  <input
                    type="text"
                    placeholder="Example: $4,000 - $6,000 monthly"
                    className="mt-2 w-full rounded-2xl border border-[#0F5B5B]/15 bg-[#FFF8EF] px-4 py-3 outline-none focus:border-[#D9A441]"
                  />
                </label>
              </div>

              <label className="block">
                <span className="font-semibold text-[#243232]">
                  Medical or Mobility Concerns
                </span>
                <textarea
                  rows={4}
                  placeholder="Share any medical needs, mobility issues, dementia concerns, medication support, etc."
                  className="mt-2 w-full rounded-2xl border border-[#0F5B5B]/15 bg-[#FFF8EF] px-4 py-3 outline-none focus:border-[#D9A441]"
                />
              </label>

              <label className="block">
                <span className="font-semibold text-[#243232]">
                  How Soon Is Placement Needed?
                </span>
                <select className="mt-2 w-full rounded-2xl border border-[#0F5B5B]/15 bg-[#FFF8EF] px-4 py-3 outline-none focus:border-[#D9A441]">
                  <option>Select timeframe</option>
                  <option>Urgent / Immediately</option>
                  <option>Within 1 Week</option>
                  <option>Within 2-4 Weeks</option>
                  <option>Within 1-3 Months</option>
                  <option>Just Exploring Options</option>
                </select>
              </label>

              <label className="block">
                <span className="font-semibold text-[#243232]">
                  Additional Message
                </span>
                <textarea
                  rows={5}
                  placeholder="Tell us anything else that would help us understand your family’s needs."
                  className="mt-2 w-full rounded-2xl border border-[#0F5B5B]/15 bg-[#FFF8EF] px-4 py-3 outline-none focus:border-[#D9A441]"
                />
              </label>

              <button
                type="submit"
                className="rounded-full bg-[#D9A441] px-8 py-4 font-bold text-[#243232] shadow-sm transition hover:scale-[1.02]"
              >
                Submit Placement Request
              </button>

              <p className="text-sm leading-6 text-[#243232]/60">
                This form is for initial placement guidance only. Hope & Joy
                will contact the family to discuss next steps.
              </p>
            </form>
          </section>
        </div>
      </section>
    </main>
  );
}