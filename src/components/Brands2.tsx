import React from "react";

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

/* ===================== TYPES ===================== */
type TextTileType = {
  type: "text";
  logo: string;
  title?: string;
  body: string;
  button: string;
  href: string;
  align?: "left" | "right";
};

type ImageTileType = {
  type: "image";
  image: string;
  alt: string;
  dots?: boolean;
};

type Tile = TextTileType | ImageTileType;

/* ===================== TEXT TILE ===================== */
function TextTile({ tile }: { tile: TextTileType }) {
  return (
    <div className="w-full bg-white flex">
      <div
        className="
          flex w-full flex-col justify-center
          px-6 sm:px-10 lg:px-14
          py-10 sm:py-12
          max-w-[520px]
        "
      >
        <div className="flex items-center gap-3">
          <img
            src={tile.logo}
            alt={`${tile.title ?? "logo"}`}
            className="h-24 w-24 sm:h-28 sm:w-28 object-contain"
          />
          {tile.title ? (
            <h3 className="text-base sm:text-lg font-semibold tracking-tight text-neutral-900">
              {tile.title}
            </h3>
          ) : null}
        </div>

        {/* ✅ Mobile full text; Desktop clamp */}
        <p className="mt-4 text-sm sm:text-[15px] leading-6 text-neutral-600 md:line-clamp-4">
          {tile.body}
        </p>

        {/* ✅ Bottom breathing space */}
        <a
          href={tile.href}
          className="
            mt-6 inline-flex w-fit items-center gap-2
            rounded-lg bg-neutral-900 px-5 py-2.5
            text-xs sm:text-sm font-medium text-white
            hover:bg-neutral-800 transition
            focus:outline-none focus:ring-2 focus:ring-neutral-900/30
          "
        >
          {tile.button}
          <span aria-hidden className="text-white/80">
            →
          </span>
        </a>
      </div>  
    </div>
  );
}

/* ===================== IMAGE TILE ===================== */
function ImageTile({ tile }: { tile: ImageTileType }) {
  return (
    <div className="relative h-full w-full overflow-hidden">
      <div className="relative h-[260px] w-full sm:h-[320px] md:h-full">
        <img
          src={tile.image}
          alt={tile.alt}
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-tr from-black/20 via-black/0 to-black/0" />

        
      </div>
    </div>
  );
}

/* ===================== MAIN GRID ===================== */
export default function MosaicGridPro() {
  // ✅ create pairs for mobile (Banner then Text)
  const pairs: Tile[][] = [];
  for (let i = 0; i < tiles.length; i += 2) {
    pairs.push([(tiles as Tile[])[i], (tiles as Tile[])[i + 1]]);
  }

  return (
    <section className="w-full">
      {/* ===== DESKTOP: original mosaic ===== */}
      <div className="hidden md:grid w-full md:grid-cols-2 gap-0">
        {(tiles as Tile[]).map((tile, i) => (
          <div key={i} className="w-full md:aspect-[3/2]">
            {tile.type === "text" ? (
              <TextTile tile={tile} />
            ) : (
              <ImageTile tile={tile} />
            )}
          </div>
        ))}
      </div>

      {/* ===== MOBILE: Banner → Text repeating ===== */}
      <div className="md:hidden flex flex-col w-full">
        {pairs.map((pair, index) => {
          const first = pair[0];
          const second = pair[1];

          const imageTile =
            first?.type === "image" ? first : second?.type === "image" ? second : null;

          const textTile =
            first?.type === "text" ? first : second?.type === "text" ? second : null;

          return (
            <div key={index} className="w-full">
              {imageTile ? <ImageTile tile={imageTile as ImageTileType} /> : null}
              {textTile ? <TextTile tile={textTile as TextTileType} /> : null}
            </div>
          );
        })}
      </div>
    </section>
  );
}