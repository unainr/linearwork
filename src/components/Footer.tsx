export function Footer() {
  const cols = [
    { title: "Product", links: ["Features", "Pricing", "Changelog", "Roadmap", "Download"] },
    { title: "Company", links: ["About", "Customers", "Careers", "Blog", "Press"] },
    { title: "Resources", links: ["Documentation", "Help center", "Community", "Status", "Contact"] },
    { title: "Legal", links: ["Privacy", "Terms", "Security", "DPA", "Cookies"] },
  ];
  return (
    <footer className="bg-white border-t border-black/5">
      <div className="max-w-[1200px] mx-auto px-6 py-16">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-10">
          <div className="col-span-2">
            <div className="flex items-center gap-2">
              <div className="h-8 w-8 rounded-lg bg-gradient-to-br from-[#1d1d1d] to-[#3a3a3a] flex items-center justify-center">
                <span className="font-instrument italic text-white text-[18px] leading-none">l</span>
              </div>
              <span className="font-geist font-medium text-[16px] text-[#0b0d12] tracking-tight">linear.work</span>
            </div>
            <p className="mt-4 font-geist text-[14px] text-[#373a46]/80 max-w-[300px] leading-[1.55]">
              The calmest place to manage your remote team's work — designed with care.
            </p>
          </div>
          {cols.map((c) => (
            <div key={c.title}>
              <h4 className="font-geist font-medium text-[13px] text-[#0b0d12] mb-4">{c.title}</h4>
              <ul className="space-y-3">
                {c.links.map((l) => (
                  <li key={l}>
                    <a href="#" className="font-geist text-[13px] text-[#373a46]/80 hover:text-[#0b0d12] transition-colors">
                      {l}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="mt-14 pt-8 border-t border-black/5 flex flex-wrap items-center justify-between gap-4">
          <p className="font-geist text-[13px] text-[#373a46]/60">
            © {new Date().getFullYear()} linear.work — All rights reserved.
          </p>
          <p className="font-geist text-[13px] text-[#373a46]/60">
            Made with <span className="font-instrument italic">care</span> in 14 cities.
          </p>
        </div>
      </div>
    </footer>
  );
}
