import React from "react";



const projects = [
  {
    id: 1,
    brand: "Hai Creations",
    description:
      "Jet Edge provides access to the industry’s leading charter revenue model for aircraft management. Through economies of scale, we optimize asset management for specific aircraft types.",
    logo: "/assets/img/hai-logo.png",
    image: "/assets/img/hai-img.png",
    cta: "Read More",
    href: "#",
    accent: "bg-rose-500",
  },
  {
    id: 2,
    brand: "J Creations",
    description:
      "We help brands build strong visual systems across print, digital, and packaging—designed to scale with consistent quality.",
    logo: "/assets/img/hai-logo.png",
    image: "/assets/img/hai-img.png",
    cta: "Read More",
    href: "#",
    accent: "bg-sky-500",
  },
  {
    id: 3,
    brand: "Evergreen Academy",
    description:
      "A modern learning environment with student-first experiences, improved facilities, and international standards for education.",
    logo: "/assets/logos/evergreen.png",
    image: "/assets/images/school.jpg",
    cta: "Read More",
    href: "#",
    accent: "bg-emerald-500",
  },
  {
    id: 4,
    brand: "Cha Hai Tea",
    description:
      "Premium Ceylon tea sourced with care—crafted for a smooth, aromatic cup with a fresh, natural finish.",
    logo: "/assets/logos/chahai.png",
    image: "/assets/images/tea.jpg",
    cta: "Read More",
    href: "#",
    accent: "bg-amber-500",
  },
];

function ProjectCard({ item, reverse }) {
  return (
    <article
      className={[
        "group grid overflow-hidden rounded-2xl bg-white shadow-sm ring-1 ring-black/5",
        "transition hover:shadow-lg hover:-translate-y-0.5",
        "md:grid-cols-2",
      ].join(" ")}
    >
      {/* Text side */}
      <div
        className={[
          "order-2 p-6 md:p-8",
          reverse ? "md:order-2" : "md:order-1",
          "flex flex-col justify-between gap-6",
          "min-h-[260px] md:min-h-[300px]",
        ].join(" ")}
      >
        <div className="flex items-start gap-4">
          {/* Optional accent bar */}
          <span className={`mt-1 h-10 w-1.5 rounded-full ${item.accent}`} />

          <div className="min-w-0">
            <div className="flex items-center gap-3">
              <img
                src={item.logo}
                alt={`${item.brand} logo`}
                className="h-10 w-10 rounded-lg object-contain"
              />
              <h3 className="text-lg font-semibold tracking-tight text-neutral-900">
                {item.brand}
              </h3>
            </div>

            <p className="mt-4 text-sm leading-6 text-neutral-600">
              {item.description}
            </p>
          </div>
        </div>

        <div>
          <a
            href={item.href}
            className="inline-flex items-center justify-center rounded-xl bg-neutral-900 px-5 py-2.5 text-sm font-medium text-white transition hover:bg-neutral-800 focus:outline-none focus:ring-2 focus:ring-neutral-900/30"
          >
            {item.cta}
          </a>
        </div>
      </div>

      {/* Image side */}
      <div
        className={[
          "order-1 relative",
          reverse ? "md:order-1" : "md:order-2",
          "min-h-[220px] md:min-h-[300px]",
        ].join(" ")}
      >
        <img
          src={item.image}
          alt={item.brand}
          className="absolute inset-0 h-full w-full object-cover transition duration-500 group-hover:scale-[1.03]"
        />
        <div className="absolute inset-0 bg-gradient-to-tr from-black/25 via-black/0 to-black/0" />
      </div>
    </article>
  );
}

export default function BrandsShowcaseSection() {
  return (
    <section className="w-full bg-neutral-50">
      <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 lg:px-8">
        {/* Top content (you can edit this freely) */}
        <header className="mb-10 max-w-2xl">
          <h2 className="text-2xl font-semibold tracking-tight text-neutral-900 sm:text-3xl">
            Our Brands & Work
          </h2>
          <p className="mt-3 text-sm leading-6 text-neutral-600">
            A curated set of projects and partner brands—designed and built with
            a clean, modern approach.
          </p>
        </header>

        {/* Grid */}
        <div className="grid gap-6 md:gap-8">
          {projects.map((item, index) => (
            <ProjectCard
              key={item.id}
              item={item}
              reverse={index % 2 === 1} // alternate layout
            />
          ))}
        </div>
      </div>
    </section>
  );
}
