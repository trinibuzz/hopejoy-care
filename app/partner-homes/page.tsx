const benefits = [
  {
    title: "Connect With Families",
    text: "Be considered when families are looking for suitable assisted living placement across Trinidad, Tobago, and the Caribbean.",
  },
  {
    title: "Trusted Placement Network",
    text: "Join a caring network focused on matching families with safe, comfortable, and suitable care homes.",
  },
  {
    title: "Better Visibility",
    text: "Help families understand the type of care, location, environment, and services your home provides.",
  },
];

const careTypes = [
  "Assisted Living",
  "Long-Term Elderly Care",
  "Dementia / Memory Care",
  "Post-Hospital Recovery Support",
  "Respite Care",
  "Daily Living Support",
  "Medication Support",
  "Mobility Assistance",
];

export default function PartnerHomesPage() {
  return (
    <main>
      <section className="bg-[#0F5B5B] px-5 py-20 text-white">
        <div className="mx-auto max-w-7xl">
          <p className="font-bold uppercase tracking-[0.22em] text-[#D9A441]">
            Partner Homes
          </p>
          <h1 className="mt-4 max-w-4xl text-4xl font-bold leading-tight md:text-6xl">
            Partner With Hope & Joy Assisted Living Placement Agency
          </h1>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-white/80">
            If you operate an assisted living home, elderly care home, or
            residential care facility in Trinidad, Tobago, or the Caribbean,
            Hope & Joy invites you to apply to join our trusted placement
            network.
          </p>
        </div>
      </section>

      <section className="px-5 py-20">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <aside className="space-y-6">
            <div className="rounded-[2.5rem] bg-white p-8 shadow-sm">
              <p className="font-bold uppercase tracking-[0.22em] text-[#D9A441]">
                Why Partner With Us
              </p>
              <h2 className="mt-4 text-3xl font-bold text-[#0F5B5B]">
                Helping families find the right home starts with trusted care
                providers.
              </h2>
              <p className="mt-5 leading-8 text-[#243232]/75">
                Hope & Joy works with families who are actively searching for
                suitable homes for elderly loved ones. Our goal is to connect
                families with care homes that are safe, compassionate, and
                suitable for the loved one’s needs.
              </p>
            </div>

            <div className="grid gap-5">
              {benefits.map((benefit) => (
                <div
                  key={benefit.title}
                  className="rounded-[2rem] border border-[#D9A441]/25 bg-white p-7 shadow-sm"
                >
                  <h3 className="text-xl font-bold text-[#0F5B5B]">
                    {benefit.title}
                  </h3>
                  <p className="mt-3 leading-7 text-[#243232]/70">
                    {benefit.text}
                  </p>
                </div>
              ))}
            </div>

            <div className="rounded-[2rem] bg-[#0F5B5B] p-8 text-white shadow-sm">
              <h3 className="text-2xl font-bold">Care Services Families Ask For</h3>
              <div className="mt-6 grid gap-3">
                {careTypes.map((item) => (
                  <div
                    key={item}
                    className="rounded-2xl bg-white/10 px-5 py-3 font-semibold text-white/85"
                  >
                    ✓ {item}
                  </div>
                ))}
              </div>
            </div>
          </aside>

          <section className="rounded-[2.5rem] bg-white p-6 shadow-sm md:p-10">
            <p className="font-bold uppercase tracking-[0.22em] text-[#D9A441]">
              Partner Application
            </p>
            <h2 className="mt-3 text-3xl font-bold text-[#0F5B5B]">
              Apply to Become a Partner Home
            </h2>
            <p className="mt-4 leading-7 text-[#243232]/70">
              Complete this application so Hope & Joy can learn more about your
              care home, services, location, and availability.
            </p>

            <form className="mt-8 grid gap-5">
              <div className="grid gap-5 md:grid-cols-2">
                <label className="block">
                  <span className="font-semibold text-[#243232]">
                    Home / Facility Name
                  </span>
                  <input
                    type="text"
                    placeholder="Enter home name"
                    className="mt-2 w-full rounded-2xl border border-[#0F5B5B]/15 bg-[#FFF8EF] px-4 py-3 outline-none focus:border-[#D9A441]"
                  />
                </label>

                <label className="block">
                  <span className="font-semibold text-[#243232]">
                    Owner / Manager Name
                  </span>
                  <input
                    type="text"
                    placeholder="Enter owner or manager name"
                    className="mt-2 w-full rounded-2xl border border-[#0F5B5B]/15 bg-[#FFF8EF] px-4 py-3 outline-none focus:border-[#D9A441]"
                  />
                </label>
              </div>

              <div className="grid gap-5 md:grid-cols-2">
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

                <label className="block">
                  <span className="font-semibold text-[#243232]">Email</span>
                  <input
                    type="email"
                    placeholder="Enter email address"
                    className="mt-2 w-full rounded-2xl border border-[#0F5B5B]/15 bg-[#FFF8EF] px-4 py-3 outline-none focus:border-[#D9A441]"
                  />
                </label>
              </div>

              <div className="grid gap-5 md:grid-cols-2">
                <label className="block">
                  <span className="font-semibold text-[#243232]">
                    Country / Island
                  </span>
                  <input
                    type="text"
                    placeholder="Example: Trinidad, Tobago, Barbados"
                    className="mt-2 w-full rounded-2xl border border-[#0F5B5B]/15 bg-[#FFF8EF] px-4 py-3 outline-none focus:border-[#D9A441]"
                  />
                </label>

                <label className="block">
                  <span className="font-semibold text-[#243232]">Address</span>
                  <input
                    type="text"
                    placeholder="Enter facility address"
                    className="mt-2 w-full rounded-2xl border border-[#0F5B5B]/15 bg-[#FFF8EF] px-4 py-3 outline-none focus:border-[#D9A441]"
                  />
                </label>
              </div>

              <div className="grid gap-5 md:grid-cols-2">
                <label className="block">
                  <span className="font-semibold text-[#243232]">
                    Type of Care Offered
                  </span>
                  <select className="mt-2 w-full rounded-2xl border border-[#0F5B5B]/15 bg-[#FFF8EF] px-4 py-3 outline-none focus:border-[#D9A441]">
                    <option>Select care type</option>
                    <option>Assisted Living</option>
                    <option>Long-Term Elderly Care</option>
                    <option>Dementia / Memory Care</option>
                    <option>Post-Hospital Care</option>
                    <option>Respite Care</option>
                    <option>Multiple Care Types</option>
                  </select>
                </label>

                <label className="block">
                  <span className="font-semibold text-[#243232]">
                    Price Range
                  </span>
                  <input
                    type="text"
                    placeholder="Example: $4,000 - $7,000 monthly"
                    className="mt-2 w-full rounded-2xl border border-[#0F5B5B]/15 bg-[#FFF8EF] px-4 py-3 outline-none focus:border-[#D9A441]"
                  />
                </label>
              </div>

              <div className="grid gap-5 md:grid-cols-2">
                <label className="block">
                  <span className="font-semibold text-[#243232]">
                    Number of Beds
                  </span>
                  <input
                    type="text"
                    placeholder="Total number of beds"
                    className="mt-2 w-full rounded-2xl border border-[#0F5B5B]/15 bg-[#FFF8EF] px-4 py-3 outline-none focus:border-[#D9A441]"
                  />
                </label>

                <label className="block">
                  <span className="font-semibold text-[#243232]">
                    Available Beds
                  </span>
                  <input
                    type="text"
                    placeholder="Current available beds"
                    className="mt-2 w-full rounded-2xl border border-[#0F5B5B]/15 bg-[#FFF8EF] px-4 py-3 outline-none focus:border-[#D9A441]"
                  />
                </label>
              </div>

              <label className="block">
                <span className="font-semibold text-[#243232]">
                  Certifications / Licensing
                </span>
                <textarea
                  rows={4}
                  placeholder="List any certifications, licensing, approvals, or care credentials."
                  className="mt-2 w-full rounded-2xl border border-[#0F5B5B]/15 bg-[#FFF8EF] px-4 py-3 outline-none focus:border-[#D9A441]"
                />
              </label>

              <label className="block">
                <span className="font-semibold text-[#243232]">
                  Special Care Services
                </span>
                <textarea
                  rows={4}
                  placeholder="Example: dementia care, wheelchair support, medication support, nurse visits, meal plans, etc."
                  className="mt-2 w-full rounded-2xl border border-[#0F5B5B]/15 bg-[#FFF8EF] px-4 py-3 outline-none focus:border-[#D9A441]"
                />
              </label>

              <label className="block">
                <span className="font-semibold text-[#243232]">
                  Upload Photos
                </span>
                <input
                  type="file"
                  multiple
                  className="mt-2 w-full rounded-2xl border border-dashed border-[#0F5B5B]/25 bg-[#FFF8EF] px-4 py-4 text-sm"
                />
                <p className="mt-2 text-sm text-[#243232]/60">
                  Photo upload is visual for now. We will connect uploads later
                  when we build the backend.
                </p>
              </label>

              <label className="block">
                <span className="font-semibold text-[#243232]">
                  Additional Message
                </span>
                <textarea
                  rows={5}
                  placeholder="Tell us anything else about your care home."
                  className="mt-2 w-full rounded-2xl border border-[#0F5B5B]/15 bg-[#FFF8EF] px-4 py-3 outline-none focus:border-[#D9A441]"
                />
              </label>

              <button
                type="submit"
                className="rounded-full bg-[#D9A441] px-8 py-4 font-bold text-[#243232] shadow-sm transition hover:scale-[1.02]"
              >
                Submit Partner Application
              </button>

              <p className="text-sm leading-6 text-[#243232]/60">
                Submitting this application does not guarantee approval. Hope &
                Joy may review details before adding a home to the placement
                network.
              </p>
            </form>
          </section>
        </div>
      </section>
    </main>
  );
}