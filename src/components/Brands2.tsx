
/* ===================== DATA ===================== */
const tiles = [
  {
    type: "text",
    logo: "/assets/img/hai-logo.png",
    title: "",
    body:
      "Jet Edge provides access to the industry’s leading charter revenue model for aircraft management. Through economies of scale, we optimize asset management for specific aircraft types, including the largest combined fleet of Gulfstream and Bombardier jets.",
    button: "Read More",
    href: "#",
    align: "left",
  },
  {
    type: "image",
    image: "/assets/img/hai-img.png",
    alt: "Creative artwork",
  },
  {
    type: "image",
    image: "/assets/img/creation-img.png",
    alt: "Printing press",
    dots: true,
  },
  {
    type: "text",
    logo: "/assets/logo/creations-logo.png",
    title: "",
    body:
      "Jet Edge provides access to the industry’s leading charter revenue model for aircraft management. Through economies of scale, we optimize asset management for specific aircraft types.",
    button: "Read More",
    href: "#",
    align: "right",
  },
  {
    type: "text",
    logo: "/assets/logo/Evergreen Logo.png",
    title: "",
    body:
      "Jet Edge provides access to the industry’s leading charter revenue model for aircraft management. Through economies of scale, we optimize asset management for specific aircraft types, including the largest combined fleet of Gulfstream and Bombardier jets.",
    button: "Read More",
    href: "#",
    align: "left",
  },
  {
    type: "image",
    image: "/assets/img/evergreen.png",
    alt: "Creative artwork",
  },
  {
    type: "image",
    image: "/assets/img/chaihai-img.png",
    alt: "Chai Hai Tea",
    dots: true,
  },
  {
    type: "text",
    logo: "/assets/logo/Chahai logo.png",
    title: "",
    body:
      "Jet Edge provides access to the industry’s leading charter revenue model for aircraft management. Through economies of scale, we optimize asset management for specific aircraft types.",
    button: "Read More",
    href: "#",
    align: "right",
  },

  {
    type: "text",
    logo: "/assets/logo/HiVis Logo.png",
    title: "",
    body:
      "Jet Edge provides access to the industry’s leading charter revenue model for aircraft management. Through economies of scale, we optimize asset management for specific aircraft types, including the largest combined fleet of Gulfstream and Bombardier jets.",
    button: "Read More",
    href: "#",
    align: "left",
  },
  {
    type: "image",
    image: "/assets/img/hivis-img.png",
    alt: "Creative artwork",
  },
  {
    type: "image",
    image: "/assets/img/epik.png",
    alt: "Printing press",
    dots: true,
  },
  {
    type: "text",
    logo: "/assets/logo/epik-logo.png",
    title: "",
    body:
      "Jet Edge provides access to the industry’s leading charter revenue model for aircraft management. Through economies of scale, we optimize asset management for specific aircraft types.",
    button: "Read More",
    href: "#",
    align: "right",
  },
  {
    type: "text",
    logo: "/assets/logo/Oleaura-logo.png",
    title: "",
    body:
      "Jet Edge provides access to the industry’s leading charter revenue model for aircraft management. Through economies of scale, we optimize asset management for specific aircraft types, including the largest combined fleet of Gulfstream and Bombardier jets.",
    button: "Read More",
    href: "#",
    align: "left",
  },
  {
    type: "image",
    image: "/assets/img/oleaura.png",
    alt: "Creative artwork",
  },

  {
    type: "image",
    image: "/assets/img/masa.png",
    alt: "Chai Hai Tea",
    dots: true,
  },
  {
    type: "text",
    logo: "/assets/logo/masa Logo.png",
    title: "",
    body:
      "Jet Edge provides access to the industry’s leading charter revenue model for aircraft management. Through economies of scale, we optimize asset management for specific aircraft types.",
    button: "Read More",
    href: "#",
    align: "right",
  },

  
];

/* ===================== TEXT TILE ===================== */
function TextTile({ tile }: { tile: any }) {
  const right = tile.align === "right";

  return (
    <div className="h-full w-full bg-white flex">
      <div
        className={[
          "flex h-full w-full flex-col justify-center",
          "px-6 sm:px-10 lg:px-14",
          right ? "items-start mr-auto" : "items-start mr-auto",
          "max-w-[520px]",
        ].join(" ")}
      >
        <div className="flex items-center gap-3">
          <img
            src={tile.logo}
            alt={`${tile.title ?? "logo"}`}
            className="h-32 w-32 object-contain"
          />
          {tile.title ? (
            <h3 className="text-base sm:text-lg font-semibold tracking-tight text-neutral-900">
              {tile.title}
            </h3>
          ) : null}
        </div>

        <p
          className="
            mt-4 text-sm sm:text-[15px] leading-6 text-neutral-600
            line-clamp-4
          "
        >
          {tile.body}
        </p>

        <a
          href={tile.href}
          className="
            mt-5 inline-flex w-fit items-center gap-2
            rounded-lg bg-neutral-900 px-5 py-2.5
            text-xs sm:text-sm font-medium text-white
            hover:bg-neutral-800 transition
            focus:outline-none focus:ring-2 focus:ring-neutral-900/30
          "
        >
          {tile.button}
          <span aria-hidden className="text-white/80">→</span>
        </a>
      </div>
    </div>
  );
}

/* ===================== IMAGE TILE ===================== */
function ImageTile({ tile }: { tile: any }) {
  return (
    <div className="relative h-full w-full overflow-hidden">
      <img
        src={tile.image}
        alt={tile.alt}
        className="absolute inset-0 h-full w-full object-cover"
      />

      {/* subtle overlay for a premium look */}
      <div className="absolute inset-0 bg-gradient-to-tr from-black/20 via-black/0 to-black/0" />

      
    </div>
  );
}

/* ===================== MAIN GRID ===================== */
export default function MosaicGridPro() {
  return (
    <section className="w-full">
      <div className="grid w-full grid-cols-1 md:grid-cols-2 gap-0">
        {tiles.map((tile, i) => (
          <div
            key={i}
            className="
              w-full
              aspect-[16/10]
              sm:aspect-[16/9]
              md:aspect-[3/2]
            "
          >
            {tile.type === "text" ? (
              <TextTile tile={tile} />
            ) : (
              <ImageTile tile={tile} />
            )}
          </div>
        ))}
      </div>
    </section>
  );
}

