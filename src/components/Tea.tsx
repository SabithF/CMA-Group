import React from "react";
import Footer from "./Footer";

type teaGallryType = {
  src: string;
  alt: string;
};

const teaGallery: teaGallryType[] = Array.from({ length: 5 }, (_, i) => ({
  src: `/assets/img/tea/${i + 1}.png`,
  alt: `tea-gallery-${i + 1}`,
}));

const Tea: React.FC = () => {
  return (
    <section className="overflow-hidden">
      {/* ========================= DESKTOP (UNCHANGED) ========================= */}
      <div className="hidden md:block">
        {/* Nav Bar */}
        <nav className="bg-teaGreen relative w-full">
          <div className="flex justify-between items-center  pr-6">
            <div className=" ">
              <img
                src="/assets/logo/trans-logo.png"
                alt="logo"
                className="w-[800px] h-auto object-contain opacity-15"
              />
            </div>

            <img
              src="/assets/logo/chahai-logo.png"
              alt="chai-logo"
              className="h-auto w-44 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-9"
            />
          </div>
        </nav>

        {/* Banner */}
        <section>
          <img src="/assets/img/tea-main-banner.png" alt="tea-main-banner" />
        </section>

        {/* about section */}
        <section className="w-full">
          <div
    className="bg-aboutGreen py-10 md:[clip-path:polygon(0_0,100%_0,100%_65%,0_100%)]"
  >
            <div className="flex  text-white p-16 gap-20 ">
              <p className="text-lg w-[50%] ">
                Chahai brings you authentic Ceylon tea, sourced from the lush
                highlands of Sri Lanka. Carefully handpicked by skilled tea
                pluckers, every leaf is crafted to preserve its natural aroma,
                flavour, and freshness. Each cup reflects a heritage of quality,
                care, and tradition. Chahai brings you authentic Ceylon tea,
                sourced from the lush highlands of Sri Lanka. Carefully handpicked
                by skilled tea pluckers, every leaf is crafted to preserve its
                natural aroma, flavour, and freshness. Each cup reflects a heritage
                of quality, care, and tradition.
              </p>
              <p className="text-lg w-[50%]">
                Chahai brings you authentic Ceylon tea, sourced from the lush
                highlands of Sri Lanka. Carefully handpicked by skilled tea
                pluckers, every leaf is crafted to preserve its natural aroma,
                flavour, and freshness. Each cup reflects a heritage of quality,
                care, and tradition.
              </p>
            </div>{" "}
          </div>

          <div className="flex max-w-6xl mx-auto ">
            <h1 className="text-7xl -rotate-6 font-outfit">
              From the Hills of Sri Lanka to Your Cup
            </h1>

            <div className="relative text-lg">
              <img
                src="/assets/img/tea-pluckers.png"
                alt="tea pluckers"
                className="w-72 absolute -top-44 right-10"
              />
              <img
                src="/assets/img/arrow.png"
                alt="arrow"
                className="h-44 translate-y-20 translate-x-20"
              />
              <p className="translate-y-24 translate-x-56  w-[60%]">
                The flavour profile is clean and well-balanced gentle frutiness,
                subtle herbaceous not smotth, controlled peppery finish. Its very
                cooking and finishing, enhanced dishes.
              </p>
            </div>
          </div>

          <div className=" max-w-6xl mx-auto text-lg pb-16">
            <p className="w-[60%]">
              <span className="text-blue-600 font-semibold">
                Chahai brings you authentic Ceylon tea
              </span>
              , sourced from the lush highlands of Sri Lanka. Carefully handpicked
              by skilled tea pluckers, every leaf is crafted to preserve its natural
              aroma, flavour, and freshness. Each cup reflects a heritage of quality,
              care, and tradition.
            </p>
          </div>

          <img src="/assets/img/tea-graphic.png" alt="" />
        </section>

        {/* Tea collection */}
        <section>
          <div className="flex flex-col items-center justify-center overflow-hidden">
            <p className="py-10 text-4xl font-outfit ">
              The Chahai Tea Collection
            </p>

            {/* Tea images */}
            <div className="w-full flex items-center justify-center h-full">
              {teaGallery.map((img) => (
                <img
                  src={img.src}
                  alt={img.alt}
                  key={img.src}
                  className="h-auto w-72 "
                />
              ))}
            </div>

            <div className="flex  text-black p-16 gap-20 ">
              <p className="text-lg w-[50%] ">
                <span className="text-blue-600 font-semibold">
                  Chahai brings you authentic Ceylon tea
                </span>
                , sourced from the lush highlands of Sri Lanka. Carefully handpicked
                by skilled tea pluckers, every leaf is crafted to preserve its natural
                aroma, flavour, and freshness. Each cup reflects a heritage of quality,
                care, and tradition. Chahai brings you authentic Ceylon tea, sourced
                from the lush highlands of Sri Lanka. Carefully handpicked by skilled
                tea pluckers, every leaf is crafted to preserve its natural aroma,
                flavour, and freshness. Each cup reflects a heritage of quality, care,
                and tradition.
              </p>
              <p className="text-lg w-[50%]">
                Chahai brings you authentic Ceylon tea, sourced from the lush highlands
                of Sri Lanka. Carefully handpicked by skilled tea pluckers, every leaf
                is crafted to preserve its natural aroma, flavour, and freshness. Each
                cup reflects a heritage of quality, care, and tradition.
              </p>
            </div>
          </div>
        </section>

        <section className="relative py-6 ">
          <div className="flex  items-center justify-center ">
            <img
              src="/assets/img/Spice-Photoroom.png"
              alt="spice-tea"
              className=" w-72 z-10"
            />
            <img
              src="/assets/img/Spice-Photoroom.png"
              alt="spice-tea"
              className=" w-72 z-10"
            />
          </div>

          <div className="bg-grayBg h-[50%] w-full absolute z-0 top-1/2 -translate-y-1/2 overflow-hidden">
            <div className=" w-full flex flex-col items-center font-outfit  text-white justify-end h-full translate-x-96 text-left absolute">
              <p>Chahi</p>
              <p>Pure Ceylon Tea</p>
              <p>Black Tea</p>
              <p>200g</p>
            </div>
          </div>

          <div
            className="bg-grayBg/10 w-full h-[40%] -translate-y-40 absolute "
            style={{
              clipPath: "polygon(0 0, 100% 100%, 0 100% , 0 100%)",
            }}
          />
        </section>

        <section className="mt-36">
          <div className="flex">
            <img
              src="/assets/img/Cannister Tin.png"
              alt="cannister"
              className="w-[35%]"
            />
            <div className="bg-specialBlue w-full flex flex-col items-center justify-center py-10 gap-20">
              <h1 className="font-outfit text-[9rem] text-specialOrange">
                <span className="text-specialSBrow">S</span>pecial
              </h1>
              <p className="text-lg px-24 text-white  ">
                <span className="text-blue-600 font-semibold">
                  Chahai brings you authentic Ceylon tea
                </span>
                , sourced from the lush highlands of Sri Lanka. Carefully handpicked
                by skilled tea pluckers, every leaf is crafted to preserve its natural
                aroma, flavour, and freshness. Each cup reflects a heritage of quality,
                care, and tradition. Chahai brings you authentic Ceylon tea, sourced
                from the lush highlands of Sri Lanka. Carefully handpicked by skilled
                tea pluckers, every leaf is crafted to preserve its natural aroma,
                flavour, and freshness. Each cup reflects a heritage of quality, care,
                and tradition.
              </p>
            </div>
          </div>
        </section>

        {/* Loose Tea */}
        <section className="flex mx-auto">
          <div className="flex flex-col items-center justify-center">
            <h1 className="font-poppins text-[9rem]">Loose Tea</h1>
            <p className="text-lg px-24 text-black  ">
              <span className="text-blue-600 font-semibold">
                Chahai brings you authentic Ceylon tea
              </span>
              , sourced from the lush highlands of Sri Lanka. Carefully handpicked by
              skilled tea pluckers, every leaf is crafted to preserve its natural aroma,
              flavour, and freshness. Each cup reflects a heritage of quality, care,
              and tradition. Chahai brings you authentic Ceylon tea, sourced from the
              lush highlands of Sri Lanka. Carefully handpicked by skilled tea pluckers,
              every leaf is crafted to preserve its natural aroma, flavour, and freshness.
              Each cup reflects a heritage of quality, care, and tradition.
            </p>
          </div>
          <div className="">
            <img
              src="/assets/img/CHAHAI BAG.png"
              alt="Black tea"
              className="w-[3000px] -translate-y-32"
            />
          </div>
        </section>

        <Footer />
      </div>

      {/* ========================= MOBILE (RESPONSIVE) ========================= */}
      <div className="block md:hidden">
        {/* Nav Bar */}
        <nav className="bg-teaGreen relative w-full py-6">
          <div className="flex justify-center items-center relative px-4">
            <img
              src="/assets/logo/chahai-logo.png"
              alt="chai-logo"
              className="w-32 sm:w-40"
            />
          </div>
        </nav>

        {/* Banner */}
        <section>
          <img
            src="/assets/img/tea-main-banner.png"
            alt="tea-main-banner"
            className="w-full object-cover"
          />
        </section>

        {/* about section */}
        <section className="w-full">
          <div
            className="bg-aboutGreen py-10 px-5"
            
          >
            <div className="flex flex-col gap-6 text-white">
              <p className="text-base leading-relaxed">
                Chahai brings you authentic Ceylon tea, sourced from the lush
                highlands of Sri Lanka. Carefully handpicked by skilled tea pluckers,
                every leaf is crafted to preserve its natural aroma, flavour, and
                freshness. Each cup reflects a heritage of quality, care, and tradition.
                Chahai brings you authentic Ceylon tea, sourced from the lush highlands
                of Sri Lanka. Carefully handpicked by skilled tea pluckers, every leaf
                is crafted to preserve its natural aroma, flavour, and freshness. Each
                cup reflects a heritage of quality, care, and tradition.
              </p>

              <p className="text-base leading-relaxed">
                Chahai brings you authentic Ceylon tea, sourced from the lush highlands
                of Sri Lanka. Carefully handpicked by skilled tea pluckers, every leaf
                is crafted to preserve its natural aroma, flavour, and freshness. Each
                cup reflects a heritage of quality, care, and tradition.
              </p>
            </div>
          </div>

          {/* Hills section mobile */}
          <div className="px-5 py-12">
            <h1 className="text-4xl font-outfit leading-tight">
              From the Hills of Sri Lanka to Your Cup
            </h1>

            <div className="mt-6">
              <img
                src="/assets/img/tea-pluckers.png"
                alt="tea pluckers"
                className="w-44 sm:w-56 mx-auto"
              />

              <p className="mt-6 text-base leading-relaxed">
                The flavour profile is clean and well-balanced gentle frutiness,
                subtle herbaceous not smotth, controlled peppery finish. Its very
                cooking and finishing, enhanced dishes.
              </p>
            </div>

            <div className="mt-8 text-base">
              <p className="leading-relaxed">
                <span className="text-blue-600 font-semibold">
                  Chahai brings you authentic Ceylon tea
                </span>
                , sourced from the lush highlands of Sri Lanka. Carefully handpicked by
                skilled tea pluckers, every leaf is crafted to preserve its natural aroma,
                flavour, and freshness. Each cup reflects a heritage of quality, care,
                and tradition.
              </p>
            </div>
          </div>

          <img src="/assets/img/tea-graphic.png" alt="" className="w-full" />
        </section>

        {/* Tea collection */}
        <section className="py-12">
          <div className="flex flex-col items-center justify-center">
            <p className="pb-6 text-2xl font-outfit text-center px-5">
              The Chahai Tea Collection
            </p>

            {/* Tea images */}
            <div className="flex flex-wrap justify-center gap-4 px-4">
              {teaGallery.map((img) => (
                <img
                  src={img.src}
                  alt={img.alt}
                  key={img.src}
                  className="w-40 sm:w-52 object-contain"
                />
              ))}
            </div>

            <div className="flex flex-col gap-6 text-black px-5 mt-8">
              <p className="text-base leading-relaxed">
                <span className="text-blue-600 font-semibold">
                  Chahai brings you authentic Ceylon tea
                </span>
                , sourced from the lush highlands of Sri Lanka. Carefully handpicked by
                skilled tea pluckers, every leaf is crafted to preserve its natural aroma,
                flavour, and freshness. Each cup reflects a heritage of quality, care,
                and tradition. Chahai brings you authentic Ceylon tea, sourced from the
                lush highlands of Sri Lanka. Carefully handpicked by skilled tea pluckers,
                every leaf is crafted to preserve its natural aroma, flavour, and freshness.
                Each cup reflects a heritage of quality, care, and tradition.
              </p>

              <p className="text-base leading-relaxed">
                Chahai brings you authentic Ceylon tea, sourced from the lush highlands
                of Sri Lanka. Carefully handpicked by skilled tea pluckers, every leaf
                is crafted to preserve its natural aroma, flavour, and freshness. Each
                cup reflects a heritage of quality, care, and tradition.
              </p>
            </div>
          </div>
        </section>

        {/* Spice section mobile */}
        <section className="relative py-10">
          <div className="flex items-center justify-center gap-4 px-4">
            <img
              src="/assets/img/Spice-Photoroom.png"
              alt="spice-tea"
              className="w-40 z-10"
            />
            <img
              src="/assets/img/Spice-Photoroom.png"
              alt="spice-tea"
              className="w-40 z-10"
            />
          </div>

          <div className="bg-grayBg mt-6 mx-4 rounded-xl p-5 text-white font-outfit">
            <p>Chahi</p>
            <p>Pure Ceylon Tea</p>
            <p>Black Tea</p>
            <p>200g</p>
          </div>
        </section>

        {/* Special section mobile */}
        <section className="mt-10">
          <div className="flex flex-col">
            <img
              src="/assets/img/Cannister Tin.png"
              alt="cannister"
              className="w-full object-contain"
            />

            <div className="bg-specialBlue w-full flex flex-col items-center justify-center py-10 gap-8 px-5 text-center">
              <h1 className="font-outfit text-5xl text-specialOrange">
                <span className="text-specialSBrow">S</span>pecial
              </h1>

              <p className="text-base text-white leading-relaxed">
                <span className="text-blue-800 font-semibold">
                  Chahai brings you authentic Ceylon tea
                </span>
                , sourced from the lush highlands of Sri Lanka. Carefully handpicked by
                skilled tea pluckers, every leaf is crafted to preserve its natural aroma,
                flavour, and freshness. Each cup reflects a heritage of quality, care,
                and tradition. Chahai brings you authentic Ceylon tea, sourced from the
                lush highlands of Sri Lanka. Carefully handpicked by skilled tea pluckers,
                every leaf is crafted to preserve its natural aroma, flavour, and freshness.
                Each cup reflects a heritage of quality, care, and tradition.
              </p>
            </div>
          </div>
        </section>

        {/* Loose Tea mobile */}
        <section className="mt-12 px-5">
          <div className="flex flex-col items-center text-center">
            <h1 className="font-poppins text-5xl">Loose Tea</h1>

            <p className="text-base mt-5 leading-relaxed">
              <span className="text-blue-600 font-semibold">
                Chahai brings you authentic Ceylon tea
              </span>
              , sourced from the lush highlands of Sri Lanka. Carefully handpicked by
              skilled tea pluckers, every leaf is crafted to preserve its natural aroma,
              flavour, and freshness. Each cup reflects a heritage of quality, care,
              and tradition. Chahai brings you authentic Ceylon tea, sourced from the
              lush highlands of Sri Lanka. Carefully handpicked by skilled tea pluckers,
              every leaf is crafted to preserve its natural aroma, flavour, and freshness.
              Each cup reflects a heritage of quality, care, and tradition.
            </p>

            <img
              src="/assets/img/CHAHAI BAG.png"
              alt="Black tea"
              className="w-72 sm:w-96 mt-8"
            />
          </div>
        </section>

        <Footer />
      </div>
    </section>
  );
};

export default Tea;