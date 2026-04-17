import { motion } from "motion/react";
import { Star, ArrowRight } from "lucide-react";

export function Hero() {
  return (
    <section className="relative min-h-screen w-full overflow-hidden bg-white isolate">
      {/* Background video */}
      <div className="pointer-events-none absolute inset-0 z-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
          className="absolute inset-0 w-full h-full object-cover [transform:scaleY(-1)]"
        >
          <source
            src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260302_085640_276ea93b-d7da-4418-a09b-2aa5b490e838.mp4"
            type="video/mp4"
          />
        </video>
        <div className="absolute inset-0 bg-gradient-to-b from-[26.416%] from-[rgba(255,255,255,0)] to-[66.943%] to-white" />
      </div>

      {/* Content */}
      <div
        className="relative z-10 mx-auto flex max-w-[1200px] flex-col items-center gap-8 px-6 text-center pt-[140px] md:pt-[200px] lg:pt-[290px]"
      >
        {/* Pill announcement */}
        <motion.a
          href="#"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="group inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-black/5 bg-white/70 backdrop-blur-md font-geist text-[13px] text-[#373a46]"
          style={{ boxShadow: "0px 4px 20px 0px rgba(194,194,194,0.18)" }}
        >
          <span className="px-2 py-0.5 text-[11px] font-medium rounded-full bg-[#0b0d12] text-white">New</span>
          Introducing AI workspaces
          <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
        </motion.a>

        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut", delay: 0.1 }}
          className="font-geist font-medium text-[#0b0d12] leading-[1.02] text-[44px] sm:text-[60px] lg:text-[80px]"
          style={{ letterSpacing: "-0.04em" }}
        >
          Simple{" "}
          <span
            className="font-instrument italic font-normal text-[54px] sm:text-[74px] lg:text-[100px] text-[#0b0d12]"
            style={{ letterSpacing: "-0.02em" }}
          >
            management
          </span>{" "}
          for your remote team
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 0.8, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut", delay: 0.25 }}
          className="font-geist text-[16px] sm:text-[18px] leading-[1.55]"
          style={{ color: "#373a46", maxWidth: "554px" }}
        >
          Streamline collaboration, track progress, and keep everyone aligned —
          beautifully designed for distributed teams who care about the details.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut", delay: 0.4 }}
          className="flex w-full max-w-[560px] flex-col items-center gap-6"
        >
          {/* Email navbar */}
          <form
            onSubmit={(e) => e.preventDefault()}
            className="flex w-full items-center gap-2 border border-black/5 bg-[#fcfcfc] p-1.5 pl-5"
            style={{
              borderRadius: "40px",
              boxShadow: "0px 10px 40px 5px rgba(194,194,194,0.25)",
            }}
          >
            <input
              type="email"
              placeholder="Enter your work email"
              className="font-geist flex-1 min-w-0 bg-transparent py-3 text-[15px] text-[#0b0d12] placeholder:text-[#9aa0ab] focus:outline-none"
            />
            <button
              type="submit"
              className="font-geist text-white text-[14px] font-medium px-5 py-3 rounded-full bg-gradient-to-b from-[#3a3a3a] via-[#1d1d1d] to-[#0a0a0a] shadow-[inset_-4px_-6px_25px_0px_rgba(201,201,201,0.08),inset_4px_4px_10px_0px_rgba(29,29,29,0.24)] transition-transform hover:scale-[1.02] active:scale-[0.98] whitespace-nowrap"
            >
              Create Free Account
            </button>
          </form>

          {/* Social proof */}
          <div className="flex flex-wrap items-center justify-center gap-3">
            <div className="flex -space-x-2">
              {[
                "linear-gradient(135deg,#f4a261,#e76f51)",
                "linear-gradient(135deg,#2a9d8f,#264653)",
                "linear-gradient(135deg,#8ecae6,#219ebc)",
                "linear-gradient(135deg,#ffb4a2,#e5989b)",
              ].map((g, i) => (
                <div
                  key={i}
                  className="h-7 w-7 rounded-full border-2 border-white"
                  style={{ background: g }}
                />
              ))}
            </div>
            <div className="flex items-center gap-1.5">
              <div className="flex">
                {[0, 1, 2, 3, 4].map((i) => (
                  <Star key={i} className="h-4 w-4 fill-[#f5b942] text-[#f5b942]" />
                ))}
              </div>
              <span className="font-geist text-[14px] text-[#373a46]">
                <span className="font-medium text-[#0b0d12]">1,020+</span> Reviews
              </span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
