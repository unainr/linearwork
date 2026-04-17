import { motion, AnimatePresence } from "motion/react";
import { Link } from "@tanstack/react-router";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const NAV_LINKS = ["Product", "Features", "Pricing", "Customers", "Changelog"];

export function Navbar() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <motion.header
      initial={{ opacity: 0, y: -16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="fixed top-4 left-1/2 -translate-x-1/2 z-50 w-[calc(100%-2rem)] max-w-[1200px]"
    >
      <nav
        className="flex items-center justify-between gap-6 px-3 py-2 pl-5 rounded-full border border-black/5 bg-white/70 backdrop-blur-xl"
        style={{ boxShadow: "0px 8px 30px 0px rgba(180,180,180,0.18)" }}
      >
        <Link to="/" className="flex items-center gap-2" onClick={() => setOpen(false)}>
          <div className="h-7 w-7 rounded-lg bg-gradient-to-br from-[#1d1d1d] to-[#3a3a3a] flex items-center justify-center">
            <span className="font-instrument italic text-white text-[16px] leading-none">l</span>
          </div>
          <span className="font-geist font-medium text-[15px] text-[#0b0d12] tracking-tight">linear.work</span>
        </Link>

        <div className="hidden md:flex items-center gap-7">
          {NAV_LINKS.map((l) => (
            <a
              key={l}
              href="#"
              className="relative font-geist text-[14px] text-[#373a46]/80 hover:text-[#0b0d12] transition-colors after:content-[''] after:absolute after:left-0 after:-bottom-1 after:h-px after:w-full after:bg-[#0b0d12] after:origin-left after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-300"
            >
              {l}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-2">
          <a
            href="#"
            className="hidden sm:inline-flex font-geist text-[14px] text-[#373a46] hover:text-[#0b0d12] px-3 py-2 transition-colors"
          >
            Sign in
          </a>
          <button
            className="hidden sm:inline-flex font-geist text-white text-[13px] font-medium px-4 py-2 rounded-full bg-gradient-to-b from-[#3a3a3a] via-[#1d1d1d] to-[#0a0a0a] shadow-[inset_-4px_-6px_25px_0px_rgba(201,201,201,0.08),inset_4px_4px_10px_0px_rgba(29,29,29,0.24)] transition-transform hover:scale-[1.02] active:scale-[0.98]"
          >
            Get started
          </button>

          {/* Mobile toggle */}
          <button
            type="button"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            className="md:hidden inline-flex h-9 w-9 items-center justify-center rounded-full border border-black/5 bg-white/80 text-[#0b0d12] hover:bg-white transition-colors"
          >
            <AnimatePresence mode="wait" initial={false}>
              {open ? (
                <motion.span
                  key="x"
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }}
                  transition={{ duration: 0.18 }}
                  className="inline-flex"
                >
                  <X className="h-4 w-4" />
                </motion.span>
              ) : (
                <motion.span
                  key="m"
                  initial={{ rotate: 90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: -90, opacity: 0 }}
                  transition={{ duration: 0.18 }}
                  className="inline-flex"
                >
                  <Menu className="h-4 w-4" />
                </motion.span>
              )}
            </AnimatePresence>
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -8, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -8, scale: 0.98 }}
            transition={{ duration: 0.22, ease: "easeOut" }}
            className="md:hidden mt-2 rounded-3xl border border-black/5 bg-white/90 backdrop-blur-xl p-4"
            style={{ boxShadow: "0px 12px 40px 0px rgba(180,180,180,0.22)" }}
          >
            <ul className="flex flex-col">
              {NAV_LINKS.map((l, i) => (
                <motion.li
                  key={l}
                  initial={{ opacity: 0, x: -8 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.04 * i, duration: 0.25, ease: "easeOut" }}
                >
                  <a
                    href="#"
                    onClick={() => setOpen(false)}
                    className="block font-geist text-[15px] text-[#0b0d12] py-3 px-2 rounded-xl hover:bg-black/[0.04] transition-colors"
                  >
                    {l}
                  </a>
                </motion.li>
              ))}
            </ul>
            <div className="mt-3 flex flex-col gap-2 border-t border-black/5 pt-3">
              <a
                href="#"
                onClick={() => setOpen(false)}
                className="font-geist text-[14px] text-[#373a46] hover:text-[#0b0d12] py-2 px-2 rounded-xl transition-colors"
              >
                Sign in
              </a>
              <button
                onClick={() => setOpen(false)}
                className="font-geist text-white text-[14px] font-medium px-4 py-3 rounded-full bg-gradient-to-b from-[#3a3a3a] via-[#1d1d1d] to-[#0a0a0a] shadow-[inset_-4px_-6px_25px_0px_rgba(201,201,201,0.08),inset_4px_4px_10px_0px_rgba(29,29,29,0.24)] transition-transform hover:scale-[1.01] active:scale-[0.98]"
              >
                Get started
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
