const testimonials = [
  {
    quote: "We replaced four tools with one. Our team's focus has never been higher.",
    name: "Anya Petrova",
    role: "Head of Product, Northwind",
    color: "linear-gradient(135deg,#f4a261,#e76f51)",
  },
  {
    quote: "The fastest, most beautiful project tool I've ever used. Period.",
    name: "Marcus Chen",
    role: "Engineering Lead, Helio",
    color: "linear-gradient(135deg,#2a9d8f,#264653)",
  },
  {
    quote: "It feels like the team built it specifically for how we work.",
    name: "Sofia Almeida",
    role: "Founder, Cadence Labs",
    color: "linear-gradient(135deg,#8ecae6,#219ebc)",
  },
];

export function Testimonials() {
  return (
    <section className="bg-[#fafafa] py-24 sm:py-32 border-y border-black/5">
      <div className="max-w-[1200px] mx-auto px-6">
        <h2
          className="font-geist font-medium text-[#0b0d12] text-[32px] sm:text-[42px] leading-[1.05] mb-14 max-w-[720px]"
          style={{ letterSpacing: "-0.04em" }}
        >
          Loved by{" "}
          <span className="font-instrument italic font-normal text-[40px] sm:text-[52px]">thousands</span>{" "}
          of remote teams.
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {testimonials.map((t) => (
            <div
              key={t.name}
              className="bg-white rounded-2xl p-7 border border-black/5"
              style={{ boxShadow: "0px 8px 30px 0px rgba(180,180,180,0.10)" }}
            >
              <p className="font-geist text-[16px] text-[#0b0d12] leading-[1.55] mb-6">
                "{t.quote}"
              </p>
              <div className="flex items-center gap-3">
                <div className="h-9 w-9 rounded-full" style={{ background: t.color }} />
                <div>
                  <div className="font-geist font-medium text-[14px] text-[#0b0d12]">{t.name}</div>
                  <div className="font-geist text-[13px] text-[#373a46]/70">{t.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
