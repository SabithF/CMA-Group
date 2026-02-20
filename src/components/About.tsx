import React from "react";
import Footer from "./Footer";
import Nav from "./Nav";

/* ========================= TEAM DATA ========================= */

const leadership = [
  {
    name: "Chandana",
    title: "Director – Strategy & Operations",
    image: "/assets/img/team/Chandy.png",
    bio: "Oversees strategic direction and operational alignment across group businesses, ensuring governance, structure, and long-term growth planning.",
  },
  {
    name: "Abdul Hai",
    title: "Director – Business Development",
    image: "/assets/img/team/Hai.png",
    bio: "Leads partnerships, expansion initiatives, and cross-business collaboration, focusing on sustainable and responsible growth.",
  },
  {
    name: "Mariah",
    title: "Director – Administration & Coordination",
    image: "/assets/img/team/maria.png",
    bio: "Supports internal coordination, compliance, and structured management across CMA Group’s portfolio of businesses.",
  },
  {
    name: "Saaliha",
    title: "Director – Brand & Community Engagement",
    image: "/assets/img/team/Saaliha.png",
    bio: "Guides brand positioning, communications, and community initiatives while preserving each venture’s independent identity.",
  },
];

/* ========================= VALUES / STATS ========================= */

const values = [
  {
    title: "Integrity",
    desc: "We build trust through transparency, accountability, and doing the right thing consistently.",
    icon: "✓",
  },
  {
    title: "Execution",
    desc: "We focus on delivery—real outcomes, measurable progress, and strong operational standards.",
    icon: "⚡",
  },
  {
    title: "Partnership",
    desc: "We grow through real relationships—customers, suppliers, communities, and long-term allies.",
    icon: "🤝",
  },
  {
    title: "Responsibility",
    desc: "We respect people and markets. We commit to learning, governance, and continuous improvement.",
    icon: "🛡️",
  },
];

const stats = [
  { label: "Group Businesses", value: "10+" },
  { label: "Years of Experience", value: "20+" },
  { label: "Operating Sectors", value: "5" },
  { label: "Long-term Focus", value: "Always" },
];

/* ========================= BUSINESS SECTIONS ========================= */

const businesses = [
  {
    category: "Food & FMCG",
    image: "/assets/img/Epikurion Grove.png",
    items: [
      {
        name: "Epikurion Grove",
        desc: "Seasonal premium olive oil sourced from the foothills of Thermopylae. Small-batch production focused on purity, freshness, and responsible sourcing.",
        logo: "/assets/logo/epik-logo.png",
      },
      {
        name: "Oleaura",
        desc: "Daily Reserve olive oil delivering pure, sustainable flavour, making premium health accessible.",
        logo: "/assets/logo/Oleaura-logo.png",
      },
    ],
  },
  {
    category: "Tea & Spices",
    image: "/assets/img/tea-main-banner.png",
    items: [
      {
        name: "Chahai – Ceylon Tea",
        desc: "High-elevation Ceylon tea delivering a consistently superior and authentic flavour.",
        logo: "/assets/logo/Chahai logo.png",
      },
      {
        name: "MASA – Ceylon Spices",
        desc: "Aromatic spices valued globally for purity, essential oil concentration, and traditional heritage.",
        logo: "/assets/logo/masa Logo.png",
      },
    ],
  },
  {
    category: "Education",
    image: "/assets/img/evergreen.png",
    items: [
      {
        name: "Evergreen International School",
        desc: "Providing quality English-medium education since 2002, inspiring confident future leaders.",
        logo: "/assets/logo/Evergreen Logo.png",
      },
      {
        name: "Teacher Development Programme",
        desc: "Practical, activity-based English training equipping educators with tools for real classroom success.",
        logo: "/assets/logo/Evergreen Logo.png",
      },
    ],
  },
  {
    category: "Services",
    image: "/assets/img/hivis-img.png",
    items: [
      {
        name: "Hivis",
        desc: "Over 20 years delivering professional window cleaning services across residential and commercial sectors.",
        logo: "/assets/logo/HiVis Logo.png",
      },
      {
        name: "Hai Creations",
        desc: "Creative and commercial solutions trusted locally and internationally for over two decades.",
        logo: "/assets/img/hai-logo.png",
      },
      {
        name: "I Creations",
        desc: "Offset printing solutions delivering dependable quality for commercial and creative needs.",
        logo: "/assets/logo/creations-logo.png",
      },
    ],
  },
  {
    category: "Lifestyle & Consumer Goods",
    image: "/assets/img/haizoom.png",
    items: [
      {
        name: "VSSA",
        desc: "Bags for ladies and school children combining practicality, durability, and thoughtful design.",
        logo: "/assets/img/zoom/VSSA.png",
      },
      {
        name: "Haizoom",
        desc: "Ladies’ and gents’ apparel designed for everyday comfort, style, and affordability.",
        logo: "/assets/img/zoom/Haizoom Men Logo.png",
      },
    ],
  },
];

/* ========================= PAGE ========================= */

const CMAGroup: React.FC = () => {
  return (
    <>
      <Nav />

      <section className="w-full bg-white text-neutral-900 overflow-hidden">

        {/* ================= HERO (IMAGE + COLOR) ================= */}
        <section className="relative min-h-[70vh] flex items-center">
          <img
            src="/assets/img/Epikurion Grove.png"
            alt="CMA Group"
            className="absolute inset-0 w-full h-full object-cover"
          />

          {/* overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-black/10" />

          <div className="relative z-10 w-full px-6 md:px-16">
            <div className="max-w-6xl mx-auto">
              <p className="text-white/80 uppercase tracking-[0.3em] text-xs md:text-sm">
                CMA HOLDINGS GROUP
              </p>

              <h1 className="mt-4 text-white text-4xl md:text-6xl font-semibold leading-tight tracking-tight">
                Built on Trust. <br className="hidden md:block" /> Driven by Execution.
              </h1>

              <p className="mt-6 max-w-2xl text-white/85 text-base md:text-lg leading-relaxed">
                CMA Group is a collaborative business group built on trust, responsibility,
                and execution—bringing together independently operated ventures to create shared
                credibility, structure, and sustainable growth.
              </p>

              <div className="mt-10 flex flex-col sm:flex-row gap-3">
                <a
                  href="#businesses"
                  className="inline-flex items-center justify-center rounded-xl px-6 py-3 text-sm font-semibold bg-white text-neutral-900 hover:opacity-95 transition"
                >
                  Explore Our Businesses
                </a>
                <a
                  href="#leadership"
                  className="inline-flex items-center justify-center rounded-xl px-6 py-3 text-sm font-semibold border border-white/40 text-white hover:bg-white/10 transition"
                >
                  Meet Leadership
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* ================= STATS STRIP ================= */}
        <section className="bg-[#0b1220] text-white">
          <div className="max-w-6xl mx-auto px-6 md:px-16 py-10 grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((s, i) => (
              <div key={i} className="text-center md:text-left">
                <p className="text-2xl md:text-3xl font-semibold">{s.value}</p>
                <p className="text-white/70 text-sm mt-1">{s.label}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ================= PHILOSOPHY + VALUES ================= */}
        <section className="py-20 px-6 md:px-16 bg-gradient-to-b from-gray-50 to-white">
          <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12 items-start">
            <div>
              <h2 className="text-3xl md:text-4xl font-semibold">
                Our Philosophy
              </h2>

              <p className="mt-6 text-lg text-gray-600">
                <span className="font-semibold text-gray-900">
                  Integrity First. Growth with Purpose.
                </span>{" "}
                We believe sustainable businesses are built by being honest, delivering real quality,
                growing through partnerships, and respecting people and markets.
              </p>

              <ul className="mt-8 space-y-3 text-gray-600 text-base md:text-lg">
                <li>• Being honest about what we do and how we do it</li>
                <li>• Delivering consistent quality — not empty promises</li>
                <li>• Growing through partnerships — not shortcuts</li>
                <li>• Respecting people, communities, and the markets we serve</li>
              </ul>

              <p className="mt-8 text-gray-600 text-base md:text-lg">
                CMA Group does not claim perfection—we commit to responsibility, learning,
                and steady improvement.
              </p>
            </div>

            {/* values cards */}
            <div className="grid sm:grid-cols-2 gap-6">
              {values.map((v, i) => (
                <div
                  key={i}
                  className="rounded-2xl border border-gray-100 bg-white p-6 shadow-sm hover:shadow-md transition"
                >
                  <div className="w-10 h-10 rounded-xl bg-[#0b1220] text-white flex items-center justify-center text-lg">
                    {v.icon}
                  </div>
                  <h3 className="mt-4 font-semibold text-lg">{v.title}</h3>
                  <p className="mt-2 text-gray-600 leading-relaxed text-sm md:text-base">
                    {v.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ================= IMAGE STRIP ================= */}
        <section className="py-10">
          <div className="max-w-6xl mx-auto px-6 md:px-16">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                "/assets/img/tea-graphic.png",
                "/assets/img/tea-graphic.png",
                "/assets/img/tea-graphic.png",
                "/assets/img/tea-graphic.png",
              ].map((src, i) => (
                <div key={i} className="overflow-hidden rounded-2xl border border-gray-100">
                  <img
                    src={src}
                    alt={`CMA strip ${i + 1}`}
                    className="w-full h-40 md:h-44 object-cover hover:scale-[1.03] transition duration-500"
                  />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ================= LEADERSHIP ================= */}
        <section id="leadership" className="py-24 px-6 md:px-16 bg-gray-50 border-t border-gray-100">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-14">
              <h2 className="text-3xl md:text-4xl font-semibold">Group Leadership</h2>
              <p className="mt-3 text-gray-600 max-w-2xl mx-auto">
                CMA Group is guided by directors who bring hands-on involvement, governance,
                and long-term vision—while respecting the independence of each venture.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
              {leadership.map((member, index) => (
                <div
                  key={index}
                  className="bg-white rounded-2xl p-7 text-center shadow-sm hover:shadow-lg transition duration-300 border border-gray-100"
                >
                  <div className="relative w-28 h-28 mx-auto">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full rounded-full object-cover"
                    />
                    <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full bg-[#0b1220] text-white text-[11px]">
                      Director
                    </div>
                  </div>

                  <h3 className="mt-6 text-lg font-semibold">{member.name}</h3>
                  <p className="text-sm text-gray-500 mt-1">{member.title}</p>

                  <p className="text-sm text-gray-600 mt-4 leading-relaxed">
                    {member.bio}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ================= BUSINESSES ================= */}
        <section id="businesses" className="py-24 px-6 md:px-16">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-semibold">Our Businesses</h2>
              <p className="mt-3 text-gray-600 max-w-2xl mx-auto">
                Independently operated ventures, aligned under CMA to build shared credibility,
                stronger governance, and long-term growth.
              </p>
            </div>

            <div className="space-y-14">
              {businesses.map((cat, idx) => (
                <div
                  key={idx}
                  className="rounded-3xl overflow-hidden border border-gray-100 bg-white shadow-sm"
                >
                  {/* category header image */}
                  <div className="relative h-44 md:h-56">
                    <img
                      src={cat.image}
                      alt={cat.category}
                      className="absolute inset-0 w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-black/65 via-black/25 to-black/10" />
                    <div className="relative z-10 h-full flex items-end px-6 md:px-10 pb-6">
                      <h3 className="text-white text-2xl md:text-3xl font-semibold">
                        {cat.category}
                      </h3>
                    </div>
                  </div>

                  {/* category items */}
                  <div className="p-6 md:p-10 grid md:grid-cols-2 gap-6">
                    {cat.items.map((item, i) => (
                      <div
                        key={i}
                        className="rounded-2xl border border-gray-100 p-6 hover:border-gray-300 transition"
                      >
                        <div className="flex items-center gap-4">
                          {item.logo ? (
                            <img
                              src={item.logo}
                              alt={`${item.name} logo`}
                              className="h-12 w-12 object-contain"
                            />
                          ) : null}

                          <h4 className="text-lg font-semibold">{item.name}</h4>
                        </div>

                        <p className="mt-3 text-gray-600 leading-relaxed">
                          {item.desc}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>

          </div>
        </section>

        <Footer />
      </section>
    </>
  );
};

export default CMAGroup;