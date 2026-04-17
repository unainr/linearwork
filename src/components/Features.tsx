import { Zap, Users, BarChart3, Shield, Workflow, Sparkles } from "lucide-react";

const features = [
  { icon: Workflow, title: "Visual workflows", desc: "Design pipelines that match how your team actually works." },
  { icon: Users, title: "Real-time collaboration", desc: "See updates instantly across every device and timezone." },
  { icon: BarChart3, title: "Insightful analytics", desc: "Track velocity, blockers, and goals with elegant dashboards." },
  { icon: Zap, title: "Lightning fast", desc: "Built on edge infrastructure for sub-100ms interactions globally." },
  { icon: Shield, title: "Enterprise-grade", desc: "SOC 2 Type II, SSO, and granular role-based permissions." },
  { icon: Sparkles, title: "AI-native", desc: "Summaries, drafts, and prioritization powered by frontier models." },
];

export function Features() {
  return (
    <section className="bg-white py-24 sm:py-32">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="max-w-[680px] mb-16">
          <p className="font-geist text-[13px] text-[#373a46]/60 uppercase tracking-[0.2em] mb-4">
            Everything you need
          </p>
          <h2
            className="font-geist font-medium text-[#0b0d12] text-[36px] sm:text-[48px] leading-[1.05]"
            style={{ letterSpacing: "-0.04em" }}
          >
            A workspace that{" "}
            <span className="font-instrument italic font-normal text-[44px] sm:text-[58px]">feels</span>{" "}
            calm.
          </h2>
          <p className="mt-5 font-geist text-[17px] text-[#373a46]/80 leading-[1.55]">
            Thoughtful defaults, zero clutter, and the speed to keep up with your best ideas.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-black/5 rounded-2xl overflow-hidden border border-black/5">
          {features.map((f) => (
            <div key={f.title} className="bg-white p-8 hover:bg-[#fafafa] transition-colors">
              <div className="h-10 w-10 rounded-xl bg-gradient-to-br from-[#1d1d1d] to-[#3a3a3a] flex items-center justify-center mb-5">
                <f.icon className="h-5 w-5 text-white" />
              </div>
              <h3 className="font-geist font-medium text-[18px] text-[#0b0d12] tracking-tight mb-2">
                {f.title}
              </h3>
              <p className="font-geist text-[15px] text-[#373a46]/80 leading-[1.5]">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
