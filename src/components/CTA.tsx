export function CTA() {
  return (
    <section className="bg-white py-24 sm:py-32">
      <div className="max-w-[1100px] mx-auto px-6">
        <div
          className="relative overflow-hidden rounded-[32px] bg-gradient-to-b from-[#1a1a1a] to-[#0a0a0a] px-8 py-20 sm:px-16 sm:py-24 text-center"
          style={{ boxShadow: "0px 30px 80px 0px rgba(0,0,0,0.25)" }}
        >
          <div className="absolute inset-0 opacity-30 pointer-events-none"
            style={{
              backgroundImage:
                "radial-gradient(circle at 20% 0%, rgba(255,255,255,0.15), transparent 50%), radial-gradient(circle at 80% 100%, rgba(255,255,255,0.08), transparent 50%)",
            }}
          />
          <div className="relative">
            <h2
              className="font-geist font-medium text-white text-[36px] sm:text-[56px] leading-[1.05]"
              style={{ letterSpacing: "-0.04em" }}
            >
              Bring your team{" "}
              <span className="font-instrument italic font-normal text-[44px] sm:text-[68px]">together</span>.
            </h2>
            <p className="mt-5 font-geist text-[16px] sm:text-[18px] text-white/70 max-w-[520px] mx-auto">
              Start in seconds. No credit card required. Cancel anytime.
            </p>
            <div className="mt-9 flex items-center justify-center gap-3">
              <button className="font-geist text-[#0b0d12] text-[14px] font-medium px-6 py-3.5 rounded-full bg-white hover:scale-[1.02] active:scale-[0.98] transition-transform">
                Create Free Account
              </button>
              <button className="font-geist text-white text-[14px] font-medium px-6 py-3.5 rounded-full border border-white/20 hover:bg-white/5 transition-colors">
                Book a demo
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
