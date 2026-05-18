import Link from "next/link";

const contactOptions = [
  {
    title: "Call Hope & Joy",
    text: "Speak directly with us about your loved one’s care needs.",
    action: "Call Now",
    href: "tel:+18680000000",
  },
  {
    title: "WhatsApp Us",
    text: "Send a quick message and start the placement conversation.",
    action: "Message on WhatsApp",
    href: "https://wa.me/18680000000",
  },
  {
    title: "Partner With Us",
    text: "Assisted living homes can apply to join our care network.",
    action: "Partner Homes",
    href: "/partner-homes",
  },
];

export default function ContactPage() {
  return (
    <main>
      <section className="bg-[#0F5B5B] px-5 py-20 text-white">
        <div className="mx-auto max-w-7xl">
          <p className="font-bold uppercase tracking-[0.22em] text-[#D9A441]">
            Contact Hope & Joy
          </p>
          <h1 className="mt-4 max-w-4xl text-4xl font-bold leading-tight md:text-6xl">
            Speak With Us About Finding the Right Care Home
          </h1>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-white/80">
            Whether you need help placing a loved one or you operate a care home
            that wants to partner with us, Hope & Joy is here to guide the next
            step.
          </p>
        </div>
      </section>

      <section className="px-5 py-20">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <aside className="space-y-6">
            {contactOptions.map((option) => (
              <div
                key={option.title}
                className="rounded-[2rem] bg-white p-8 shadow-sm"
              >
                <h2 className="text-2xl font-bold text-[#0F5B5B]">
                  {option.title}
                </h2>
                <p className="mt-3 leading-7 text-[#243232]/70">
                  {option.text}
                </p>

                {option.href.startsWith("/") ? (
                  <Link
                    href={option.href}
                    className="mt-6 inline-flex rounded-full bg-[#D9A441] px-6 py-3 font-bold text-[#243232] transition hover:scale-105"
                  >
                    {option.action}
                  </Link>
                ) : (
                  <a
                    href={option.href}
                    target={option.href.startsWith("https") ? "_blank" : undefined}
                    rel={
                      option.href.startsWith("https")
                        ? "noopener noreferrer"
                        : undefined
                    }
                    className="mt-6 inline-flex rounded-full bg-[#D9A441] px-6 py-3 font-bold text-[#243232] transition hover:scale-105"
                  >
                    {option.action}
                  </a>
                )}
              </div>
            ))}

            <div className="rounded-[2rem] bg-[#0F5B5B] p-8 text-white shadow-sm">
              <p className="text-sm font-bold uppercase tracking-[0.22em] text-[#D9A441]">
                Contact Details
              </p>
              <div className="mt-5 space-y-3 text-white/80">
                <p>Phone: Add phone number here</p>
                <p>WhatsApp: Add WhatsApp number here</p>
                <p>Email: Add email here</p>
                <p>Location: Trinidad & Tobago / Caribbean</p>
              </div>
            </div>
          </aside>

          <section className="rounded-[2.5rem] bg-white p-6 shadow-sm md:p-10">
            <p className="font-bold uppercase tracking-[0.22em] text-[#D9A441]">
              Send a Message
            </p>
            <h2 className="mt-3 text-3xl font-bold text-[#0F5B5B]">
              How Can We Help Your Family?
            </h2>
            <p className="mt-4 leading-7 text-[#243232]/70">
              Send us your details and Hope & Joy will contact you about your
              loved one’s care needs or your partner home application.
            </p>

            <form className="mt-8 grid gap-5">
              <div className="grid gap-5 md:grid-cols-2">
                <label className="block">
                  <span className="font-semibold text-[#243232]">
                    Full Name
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
                    I Am Contacting About
                  </span>
                  <select className="mt-2 w-full rounded-2xl border border-[#0F5B5B]/15 bg-[#FFF8EF] px-4 py-3 outline-none focus:border-[#D9A441]">
                    <option>Select reason</option>
                    <option>Finding care for a loved one</option>
                    <option>Partner home application</option>
                    <option>General question</option>
                    <option>Urgent placement request</option>
                  </select>
                </label>
              </div>

              <label className="block">
                <span className="font-semibold text-[#243232]">
                  Your Message
                </span>
                <textarea
                  rows={7}
                  placeholder="Tell us how Hope & Joy can help."
                  className="mt-2 w-full rounded-2xl border border-[#0F5B5B]/15 bg-[#FFF8EF] px-4 py-3 outline-none focus:border-[#D9A441]"
                />
              </label>

              <button
                type="submit"
                className="rounded-full bg-[#D9A441] px-8 py-4 font-bold text-[#243232] shadow-sm transition hover:scale-[1.02]"
              >
                Send Message
              </button>

              <p className="text-sm leading-6 text-[#243232]/60">
                This contact form is visual for now. After the pages are
                complete, we can connect it to email or a database.
              </p>
            </form>
          </section>
        </div>
      </section>

      <section className="bg-white px-5 py-20">
        <div className="mx-auto max-w-5xl rounded-[2.5rem] bg-[#0F5B5B] p-8 text-center text-white shadow-xl md:p-14">
          <p className="font-bold uppercase tracking-[0.22em] text-[#D9A441]">
            Start With One Conversation
          </p>
          <h2 className="mt-4 text-3xl font-bold md:text-5xl">
            Hope & Joy Is Here to Help You Make the Next Step
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-white/78">
            A caring conversation can help your family understand what type of
            placement may be suitable.
          </p>

          <div className="mt-9 flex flex-col justify-center gap-4 sm:flex-row">
            <Link
              href="/find-care"
              className="rounded-full bg-[#D9A441] px-7 py-4 font-bold text-[#243232] transition hover:scale-105"
            >
              Start Placement Request
            </Link>
            <a
              href="https://wa.me/18680000000"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border border-white/30 px-7 py-4 font-bold text-white transition hover:bg-white hover:text-[#0F5B5B]"
            >
              WhatsApp Hope & Joy
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}