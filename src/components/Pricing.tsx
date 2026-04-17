import { Check } from "lucide-react";

const tiers = [
  {
    name: "Starter",
    price: "$0",
    period: "/ forever",
    desc: "For individuals and tiny teams getting started.",
    features: ["Up to 5 members", "Unlimited projects", "Basic analytics", "Community support"],
    cta: "Get started",
    featured: false,
  },
  {
    name: "Team",
    price: "$12",
    period: "/ user / month",
    desc: "Everything growing remote teams need to ship.",
    features: ["Unlimited members", "Advanced workflows", "AI assistant", "Priority support", "SSO & SAML"],
    cta: "Start free trial",
    featured: true,
  },
  {
    name: "Enterprise",
    price: "Custom",
    period: "",
    desc: "Security, compliance, and scale for large orgs.",
    features: ["Dedicated CSM", "SOC 2, HIPAA", "Custom contracts", "Audit logs", "99.99% SLA"],
    cta: "Talk to sales",
    featured: false,
  },
];

export function Pricing() {
  return (
    <section className="bg-white py-24 sm:py-32">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="text-center mb-16">
          <p className="font-geist text-[13px] text-[#373a46]/60 uppercase tracking-[0.2em] mb-4">
            Pricing
          </p>
          <h2
            className="font-geist font-medium text-[#0b0d12] text-[36px] sm:text-[48px] leading-[1.05]"
            style={{ letterSpacing: "-0.04em" }}
          >
            Simple, transparent{" "}
            <span className="font-instrument italic font-normal text-[44px] sm:text-[58px]">pricing</span>.
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {tiers.map((t) => (
            <div
              key={t.name}
              className={`rounded-2xl p-8 border ${
                t.featured
                  ? "bg-gradient-to-b from-[#1a1a1a] to-[#0a0a0a] border-black text-white"
                  : "bg-white border-black/5"
              }`}
              style={
                t.featured
                  ? { boxShadow: "0px 20px 60px 0px rgba(0,0,0,0.25)" }
                  : { boxShadow: "0px 4px 20px 0px rgba(180,180,180,0.10)" }
              }
            >
              <div className="flex items-center justify-between">
                <h3 className={`font-geist font-medium text-[16px] ${t.featured ? "text-white" : "text-[#0b0d12]"}`}>
                  {t.name}
                </h3>
                {t.featured && (
                  <span className="text-[11px] font-medium px-2 py-0.5 rounded-full bg-white text-[#0b0d12]">
                    Popular
                  </span>
                )}
              </div>
              <div className="mt-5 flex items-baseline gap-1">
                <span
                  className={`font-geist font-medium text-[44px] ${t.featured ? "text-white" : "text-[#0b0d12]"}`}
                  style={{ letterSpacing: "-0.04em" }}
                >
                  {t.price}
                </span>
                <span className={`font-geist text-[14px] ${t.featured ? "text-white/60" : "text-[#373a46]/70"}`}>
                  {t.period}
                </span>
              </div>
              <p className={`mt-3 font-geist text-[14px] ${t.featured ? "text-white/70" : "text-[#373a46]/80"}`}>
                {t.desc}
              </p>

              <button
                className={`mt-6 w-full font-geist text-[14px] font-medium py-3 rounded-full transition-transform hover:scale-[1.01] active:scale-[0.99] ${
                  t.featured
                    ? "bg-white text-[#0b0d12]"
                    : "text-white bg-gradient-to-b from-[#3a3a3a] via-[#1d1d1d] to-[#0a0a0a] shadow-[inset_-4px_-6px_25px_0px_rgba(201,201,201,0.08),inset_4px_4px_10px_0px_rgba(29,29,29,0.24)]"
                }`}
              >
                {t.cta}
              </button>

              <ul className="mt-7 space-y-3">
                {t.features.map((f) => (
                  <li key={f} className="flex items-start gap-2.5">
                    <Check className={`h-4 w-4 mt-0.5 flex-shrink-0 ${t.featured ? "text-white" : "text-[#0b0d12]"}`} />
                    <span className={`font-geist text-[14px] ${t.featured ? "text-white/85" : "text-[#373a46]"}`}>
                      {f}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
