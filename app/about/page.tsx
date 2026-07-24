import Link from "next/link";

const stats = [
  { label: "Links shortened", value: "10K+" },
  { label: "Uptime", value: "99.9%" },
  { label: "Cost to use", value: "$0" },
];

const values = [
  {
    title: "Fast",
    desc: "Generate a short link in under a second — no waiting, no friction.",
  },
  {
    title: "Free",
    desc: "No paywalls, no hidden limits. Shortening links should be free for everyone.",
  },
  {
    title: "Reliable",
    desc: "Your links stay live and redirect correctly, every time, without surprises.",
  },
];

export default function About() {
  return (
    <main className="bg-gradient-to-br from-fuchsia-50 via-purple-50 to-indigo-50 min-h-[80vh]">
      <section className="max-w-4xl mx-auto px-6 py-20 flex flex-col items-center text-center gap-6">
        <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-100 text-purple-700 text-xs font-semibold tracking-wide">
          About MinuteLink
        </span>

        <h1 className="text-4xl md:text-5xl font-bold leading-tight">
          Short links,{" "}
          <span className="bg-gradient-to-r from-fuchsia-500 to-indigo-500 bg-clip-text text-transparent">
            built simply
          </span>
        </h1>

        <p className="text-gray-600 text-lg max-w-2xl">
          MinuteLink started with one goal: make it effortless to turn a long, messy URL
          into something short, clean, and shareable — without accounts, paywalls, or
          clutter getting in the way.
        </p>
      </section>

      {/* Stats */}
      <section className="max-w-4xl mx-auto px-6 pb-16 grid grid-cols-1 sm:grid-cols-3 gap-6">
        {stats.map((stat) => (
          <div
            key={stat.label}
            className="bg-white rounded-xl shadow-md p-6 flex flex-col items-center gap-1 border border-purple-100"
          >
            <span className="text-3xl font-bold bg-gradient-to-r from-fuchsia-500 to-indigo-500 bg-clip-text text-transparent">
              {stat.value}
            </span>
            <span className="text-gray-500 text-sm">{stat.label}</span>
          </div>
        ))}
      </section>

      {/* Values */}
      <section className="max-w-4xl mx-auto px-6 pb-24">
        <h2 className="text-2xl font-bold text-center mb-10">What we care about</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {values.map((v) => (
            <div
              key={v.title}
              className="bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow p-6 border border-purple-100"
            >
              <h3 className="font-bold text-lg text-purple-700 mb-2">{v.title}</h3>
              <p className="text-gray-600 text-sm">{v.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="max-w-4xl mx-auto px-6 pb-24 flex flex-col items-center gap-4 text-center">
        <h2 className="text-2xl font-bold">Ready to try it out?</h2>
        <Link href="/shorten">
          <button className="bg-gradient-to-r from-fuchsia-500 to-indigo-500 rounded-lg shadow-lg shadow-purple-300/50 p-3 px-6 font-bold text-white hover:shadow-purple-400/60 hover:scale-105 active:scale-95 transition-all duration-200">
            Shorten a link →
          </button>
        </Link>
      </section>
    </main>
  );
}