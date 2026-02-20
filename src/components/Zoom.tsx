import React from "react";
import Footer from "./Footer";

const Zoom: React.FC = () => {
  return (
    <section className="w-full overflow-hidden">

      {/* ================= HERO ================= */}
      <section>
        <img
          src="/assets/img/zoom/zoom-banner.png"
          alt="main logo"
          className="w-full object-cover"
        />

        <div className="bg-zoomGray py-12 md:py-16 w-full">
          <div className="mx-auto max-w-7xl px-6">

            <h2 className="text-2xl sm:text-3xl md:text-4xl font-zurich text-white text-left mb-6 md:mb-8">
              about Haizoom <br />
              we design and produce clothing for the STRONG men and women
            </h2>

            <p className="text-base md:text-lg text-zoomYellow text-left md:text-right md:px-24 md:pl-44">
              <span className="text-blue-600 font-semibold">
                Chahai brings you authentic Ceylon tea
              </span>, sourced from the lush highlands of Sri Lanka. Carefully handpicked by skilled tea pluckers, every leaf is crafted to preserve its natural aroma, flavour, and freshness. Each cup reflects a heritage of quality, care, and tradition.
              Chahai brings you authentic Ceylon tea, sourced from the lush highlands of Sri Lanka. Carefully handpicked by skilled tea pluckers, every leaf is crafted to preserve its natural aroma, flavour, and freshness. Each cup reflects a heritage of quality, care, and tradition.
            </p>

          </div>
        </div>
      </section>

      {/* ================= HAI ZOOM MEN ================= */}
      <section>
        <div className="flex flex-col md:flex-row items-center">

          <img
            src="/assets/img/zoom/Haizoom Men Logo.png"
            alt="Hai zoom men"
            className="w-48 md:w-80"
          />

          <div
            className="bg-zoomYellow flex justify-center items-center w-full px-6 py-10 md:px-24"
            style={{
              clipPath:
                window.innerWidth >= 768
                  ? "polygon(0 0, 90% 0, 100% 100%, 10% 100%)"
                  : undefined,
            }}
          >
            <p className="text-base md:text-lg text-black text-center">
              <span className="text-blue-600 font-semibold">
                Chahai brings you authentic Ceylon tea
              </span>, sourced from the lush highlands of Sri Lanka. Carefully handpicked by skilled tea pluckers, every leaf is crafted to preserve its natural aroma, flavour, and freshness. Each cup reflects a heritage of quality, care, and tradition.
              Chahai brings you authentic Ceylon tea, sourced from the lush highlands of Sri Lanka. Carefully handpicked by skilled tea pluckers, every leaf is crafted to preserve its natural aroma, flavour, and freshness. Each cup reflects a heritage of quality, care, and tradition.
            </p>
          </div>

        </div>
      </section>

      {/* ================= TWO MEN ================= */}
      <section className="relative w-full flex items-center justify-center max-w-7xl mx-auto px-6 py-12">
        <div className="flex flex-col md:flex-row w-full justify-center items-center gap-6">
          <img
            src="/assets/img/zoom/men-1.png"
            alt="model-1"
            className="w-3/4 md:w-[40%] z-10"
          />
          <img
            src="/assets/img/zoom/men-2.png"
            alt="model-2"
            className="w-3/4 md:w-[40%] z-10"
          />
        </div>

        <img
          src="/assets/img/zoom/yellowGrid.png"
          alt="Background line"
          className="absolute z-0 hidden md:block"
        />
      </section>

      {/* ================= TROUSERS ================= */}
      <section>
        <img
          src="/assets/img/zoom/gray-banner.jpeg"
          alt="gray-banner"
          className="w-full object-cover"
        />

        <div className="flex flex-col md:flex-row justify-center px-6 md:px-12 items-center gap-6 pb-16 bg-orange-500">
          <img
            src="/assets/img/zoom/mens-trouser-1.png"
            alt="mens clothing"
            className="w-3/4 md:w-[40%]"
          />
          <img
            src="/assets/img/zoom/mens-trouser-2.png"
            alt="mens clothing"
            className="w-3/4 md:w-[40%]"
          />
          <img
            src="/assets/img/zoom/mens-trouser-3.png"
            alt="mens clothing"
            className="w-3/4 md:w-[40%]"
          />
        </div>
      </section>

      {/* ================= VASSA ================= */}
      <section className="relative w-full flex flex-col justify-center items-center py-12 md:py-16">
        <img
          src="/assets/img/zoom/VSSA.png"
          alt="VASSA"
          className="h-16 md:h-20"
        />

        <div className="grid grid-cols-2 gap-6 md:gap-10 max-w-7xl mx-auto px-6 mt-8">
          <img src="/assets/img/zoom/222.png" alt="mens-wear" className="px-4 md:px-20 z-10" />
          <img src="/assets/img/zoom/11.png" alt="mens-wear" className="px-4 md:px-20 z-10" />
          <img src="/assets/img/zoom/22.png" alt="mens-wear" className="px-4 md:px-20 z-10" />
          <img src="/assets/img/zoom/2.png" alt="mens-wear" className="px-4 md:px-20 z-10" />
          <img src="/assets/img/zoom/2.png" alt="mens-wear" className="px-4 md:px-20 z-10" />
          <img src="/assets/img/zoom/2.png" alt="mens-wear" className="px-4 md:px-20 z-10" />
        </div>

        <img src="/assets/img/zoom/yellowGrid.png" alt="" className="absolute z-0 left-0 top-0 hidden md:block" />
        <img src="/assets/img/zoom/yellowGrid.png" alt="" className="absolute z-0 right-0 bottom-10 hidden md:block" />
      </section>

      {/* ================= WOMEN SECTION ================= */}
      <section className="relative">
        <img
          src="/assets/img/zoom/hai-zoom-w.png"
          alt="Hai Womens banner"
          className="w-full object-cover"
        />

        <p className="text-base md:text-lg text-black md:text-white py-10 text-center
         px-6 md:px-24 md:absolute md:top-32 md:right-0 md:w-[60%]">
          <span className="text-blue-600 font-semibold">
            Chahai brings you authentic Ceylon tea
          </span>, sourced from the lush highlands of Sri Lanka. Carefully handpicked by skilled tea pluckers, every leaf is crafted to preserve its natural aroma, flavour, and freshness. Each cup reflects a heritage of quality, care, and tradition.
          Chahai brings you authentic Ceylon tea, sourced from the lush highlands of Sri Lanka. Carefully handpicked by skilled tea pluckers, every leaf is crafted to preserve its natural aroma, flavour, and freshness. Each cup reflects a heritage of quality, care, and tradition.
        </p>


        
        {Array.from({ length: 4 }, (_, index) => (
          <img
            key={index}
            src={`/assets/img/zoom/women/${index + 1}.png`}
            alt={`womens clothes ${index + 1}`}
            className="w-full"
          />
        ))}
      </section>

      {/* ================= HORSE ================= */}
      <section className="relative">
        <img
          src="/assets/img/zoom/Horse Bg.png"
          alt="Horse-bg"
          className="w-full object-cover"
        />
        <img
          src="/assets/img/zoom/colourful horse.png"
          alt="Colorful-horse"
          className="absolute w-28 md:w-[20%] top-[35%] left-[35%] md:left-[40%]"
        />
      </section>

      <section>
        <img
          src="/assets/img/zoom/women2/00.png"
          alt="image"
          className="w-full object-cover"
        />
      </section>

      <Footer />
    </section>
  );
};

export default Zoom;