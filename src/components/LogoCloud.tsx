export function LogoCloud() {
  const logos = ["Vercel", "Linear", "Notion", "Framer", "Loom", "Figma", "Stripe"];
  return (
    <section className="bg-white py-16">
      <div className="max-w-[1200px] mx-auto px-6">
        <p className="text-center font-geist text-[13px] text-[#373a46]/60 uppercase tracking-[0.2em] mb-10">
          Trusted by teams at world-class companies
        </p>
        <div className="flex flex-wrap items-center justify-center gap-x-12 gap-y-6 opacity-70">
          {logos.map((l) => (
            <span
              key={l}
              className="font-geist font-medium text-[20px] text-[#0b0d12]/70 tracking-tight"
            >
              {l}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
