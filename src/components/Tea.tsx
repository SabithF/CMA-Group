import React from "react";

type teaGallryType = {
    src: string,
    alt: string,
}

const teaGallery: teaGallryType[] = Array.from({ length: 5 }, (_, i) => ({
    src: `/assets/img/tea/${i + 1}.png`,
    alt: `tea-gallery-${i + 1}`,
}))
const Tea: React.FC = () => {

    return (
        <section>
            {/* Nav Bar */}
            <nav className="bg-teaGreen relative w-full">
                <div className="flex justify-between 
            items-center  pr-6">
                    <div className=" ">
                        <img src="/assets/logo/trans-logo.png"
                            alt="logo" className="w-[800px] h-auto object-contain opacity-15" />

                    </div>

                    <img src="/assets/logo/chahai-logo.png" alt="chai-logo" className="h-auto w-44 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-9" />

                </div>
            </nav>

            {/* Banner */}
            <section>
                <img src="/assets/img/tea-main-banner.png" alt="tea-main-banner" />
            </section>

            {/* about section */}
            <section className="w-full">
                <div className="bg-aboutGreen  py-10"
                    style={{
                        clipPath: "polygon(0 0, 100% 0, 100% 65%, 0 100%)",
                    }}
                >
                    <div className="flex  text-white p-16 gap-20 ">

                        <p className="text-lg w-[50%] ">Chahai brings you authentic Ceylon tea, sourced from the lush highlands of Sri Lanka. Carefully handpicked by skilled tea pluckers, every leaf is crafted to preserve its natural aroma, flavour, and freshness. Each cup reflects a heritage of quality, care, and tradition.
                            Chahai brings you authentic Ceylon tea, sourced from the lush highlands of Sri Lanka. Carefully handpicked by skilled tea pluckers, every leaf is crafted to preserve its natural aroma, flavour, and freshness. Each cup reflects a heritage of quality, care, and tradition.
                        </p>
                        <p className="text-lg w-[50%]">Chahai brings you authentic Ceylon tea, sourced from the lush highlands of Sri Lanka. Carefully handpicked by skilled tea pluckers, every leaf is crafted to preserve its natural aroma, flavour, and freshness. Each cup reflects a heritage of quality, care, and tradition.</p>

                    </div>  </div>

                <div className="flex max-w-6xl mx-auto ">
                    <h1 className="text-7xl -rotate-6 font-outfit">From the Hills of Sri Lanka to Your Cup</h1>

                    <div className="relative text-lg">
                        <img src="/assets/img/tea-pluckers.png" alt="tea pluckers" className="w-72 absolute -top-44 right-10" />
                        <img src="/assets/img/arrow.png" alt="arrow" className="h-44 translate-y-20 translate-x-20" />
                        <p className="translate-y-24 translate-x-56  w-[60%]">The flavour profile is clean and well-balanced gentle frutiness, subtle herbaceous not smotth, controlled peppery finish. Its very cooking and finishing, enhanced dishes. </p>
                    </div>


                </div>
                <div className=" max-w-6xl mx-auto text-lg pb-16">
                    <p className="w-[60%]"><span className="text-blue-600 font-semibold">Chahai brings you authentic Ceylon tea</span>, sourced from the lush highlands of Sri Lanka. Carefully handpicked by skilled tea pluckers, every leaf is crafted to preserve its natural aroma, flavour, and freshness. Each cup reflects a heritage of quality, care, and tradition.</p>
                </div>

                <img src="/assets/img/tea-graphic.png" alt="" />


            </section>

            {/* Tea collection */}
            <section>

                <div className="flex flex-col items-center justify-center overflow-hidden">
                    <p className="py-10 text-4xl font-outfit ">The Chahai Tea Collection</p>
                    {/* Tea images */}

                    <div className="w-full flex items-center justify-center h-full">
                        {teaGallery.map((img) => (
                            <img src={img.src} alt={img.alt} key={img.src}
                                className="h-auto w-72 " />
                        ))}
                    </div>

                    <div className="flex  text-black p-16 gap-20 ">

                        <p className="text-lg w-[50%] "><span className="text-blue-600 font-semibold">Chahai brings you authentic Ceylon tea</span>, sourced from the lush highlands of Sri Lanka. Carefully handpicked by skilled tea pluckers, every leaf is crafted to preserve its natural aroma, flavour, and freshness. Each cup reflects a heritage of quality, care, and tradition.
                            Chahai brings you authentic Ceylon tea, sourced from the lush highlands of Sri Lanka. Carefully handpicked by skilled tea pluckers, every leaf is crafted to preserve its natural aroma, flavour, and freshness. Each cup reflects a heritage of quality, care, and tradition.
                        </p>
                        <p className="text-lg w-[50%]">Chahai brings you authentic Ceylon tea, sourced from the lush highlands of Sri Lanka. Carefully handpicked by skilled tea pluckers, every leaf is crafted to preserve its natural aroma, flavour, and freshness. Each cup reflects a heritage of quality, care, and tradition.</p>

                    </div>


                </div>

            </section>


            <section className="relative py-6 ">
                <div className="flex  items-center justify-center ">
                    <img src="/assets/img/Spice-Photoroom.png" alt="spice-tea" className=" w-72 z-10" />
                    <img src="/assets/img/Spice-Photoroom.png" alt="spice-tea" className=" w-72 z-10" />
                </div>

                <div className="bg-grayBg h-[50%] w-full absolute z-0 top-1/2 -translate-y-1/2 overflow-hidden">
                    <div className=" w-full flex flex-col items-center font-outfit  text-white justify-end h-full translate-x-96 text-left absolute">
                        <p>Chahi</p>
                        <p>Pure Ceylon Tea</p>
                        <p>Black Tea</p>
                        <p>200g</p>
                    </div>
                </div>

                <div className="bg-grayBg/10 w-full h-[40%] -translate-y-40 absolute "
                    style={{
                        clipPath: "polygon(0 0, 100% 100%, 0 100% , 0 100%)",
                    }} />


            </section>


            <section className="mt-44">
                Special
            </section>


        </section>



    )
}

export default Tea;