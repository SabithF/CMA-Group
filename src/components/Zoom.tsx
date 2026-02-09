import React from "react";


const Zoom: React.FC = () => {

    return (
        <section className="w-full">
            <section>
                <div className="">
                    <img src="/assets/img/zoom/zoom-banner.png" alt="main logo" className="" />
                </div>

                <div className="bg-zoomGray py-16 w-full ">
                    <div className="mx-auto max-w-7xl px-6">
                        <h2 className="text-4xl font-zurich text-white  text-left mb-8">about Haizoom <br />we design and produce clothing for the STRONG men and women</h2>
                        <p className="text-lg px-24 text-zoomYellow text-right pl-44  "><span className="text-blue-600 font-semibold">Chahai brings you authentic Ceylon tea</span>, sourced from the lush highlands of Sri Lanka. Carefully handpicked by skilled tea pluckers, every leaf is crafted to preserve its natural aroma, flavour, and freshness. Each cup reflects a heritage of quality, care, and tradition.
                            Chahai brings you authentic Ceylon tea, sourced from the lush highlands of Sri Lanka. Carefully handpicked by skilled tea pluckers, every leaf is crafted to preserve its natural aroma, flavour, and freshness. Each cup reflects a heritage of quality, care, and tradition.
                        </p>

                    </div>

                </div>
            </section>

            {/* Hai zoom men */}
            <section>
                <div className="flex ">
                    <img src="/assets/img/zoom/Haizoom Men Logo.png" alt="Hai zoom men" className="w-80" />

                    <div className="bg-zoomYellow flex justify-center items-center w-full"
                        style={{
                            clipPath: "polygon(0 0, 90% 0, 100% 100%, 10% 100%)",
                        }}>
                        <p className="text-lg px-24 text-black text-center pl-44  "><span className="text-blue-600 font-semibold">Chahai brings you authentic Ceylon tea</span>, sourced from the lush highlands of Sri Lanka. Carefully handpicked by skilled tea pluckers, every leaf is crafted to preserve its natural aroma, flavour, and freshness. Each cup reflects a heritage of quality, care, and tradition.
                            Chahai brings you authentic Ceylon tea, sourced from the lush highlands of Sri Lanka. Carefully handpicked by skilled tea pluckers, every leaf is crafted to preserve its natural aroma, flavour, and freshness. Each cup reflects a heritage of quality, care, and tradition.
                        </p>
                    </div>
                </div>

            </section>


            {/* Two men */}
            <section className="relative w-full flex items-center justify-between max-w-7xl mx-auto px-6">
                <div className="flex w-full justify-center items-center  ">
                    <img src="/assets/img/zoom/men-1.png" alt="mode-1 " className="w-[40%] z-10" />
                    <img src="/assets/img/zoom/men-2.png" alt="mode-2 " className="w-[40%] z-10" />
                    <img src="/assets/img/zoom/yellowGrid.png" alt="Background line" className="absolute z-0" />
                </div>
            </section>

            <section>
                <img src="/assets/img/zoom/gray-banner.jpeg" alt="gray-banner" />

                <div className="flex justify-center px-12 items-start overflow-hidden  pb-16 bg-orange-500 ">
                    <img src="/assets/img/zoom/mens-trouser-1.png" alt="mens clothing" className="w-[40%]" />
                    <img src="/assets/img/zoom/mens-trouser-2.png" alt="mens clothing" className="w-[40%]" />
                    <img src="/assets/img/zoom/mens-trouser-3.png" alt="mens clothing" className="w-[40%]" />
                </div>
            </section>

            {/* VASSA */}
            <section className="relative w-full flex flex-col justify-center items-center py-16">
                <img src="/assets/img/zoom/VSSA.png" alt="VASSA" className="h-20" />

                <div className="grid relative grid-cols-2 gap-10 items-center justify-center max-w-7xl   mx-auto px-6">
                    <img src="/assets/img/zoom/222.png" alt="mens-wear" className=" px-20 z-10" />
                    <img src="/assets/img/zoom/11.png" alt="mens-wear " className=" px-20 z-10" />
                    <img src="/assets/img/zoom/22.png" alt="mens-wear" className=" px-20 z-10" />
                    <img src="/assets/img/zoom/2.png" alt="mens-wear" className="  px-20 z-10" />
                    <img src="/assets/img/zoom/2.png" alt="mens-wear" className=" px-20 z-10" />
                    <img src="/assets/img/zoom/2.png" alt="mens-wear" className=" px-20 z-10" />


                </div>
                <img src="/assets/img/zoom/yellowGrid.png" alt="Background line" className="absolute z-0 left-0 top-0" />
                <img src="/assets/img/zoom/yellowGrid.png" alt="Background line" className="absolute z-0 right-0  bottom-10" />

            </section>

            <section className="relative">
                <img src="/assets/img/zoom/hai-zoom-w.png" alt="Hai Womens banner" className=""/>
                <p className="text-lg px-24 text-white text-center pl-44  absolute top-32 right-0 w-[60%]"><span className="text-blue-600 font-semibold">Chahai brings you authentic Ceylon tea</span>, sourced from the lush highlands of Sri Lanka. Carefully handpicked by skilled tea pluckers, every leaf is crafted to preserve its natural aroma, flavour, and freshness. Each cup reflects a heritage of quality, care, and tradition.
                    Chahai brings you authentic Ceylon tea, sourced from the lush highlands of Sri Lanka. Carefully handpicked by skilled tea pluckers, every leaf is crafted to preserve its natural aroma, flavour, and freshness. Each cup reflects a heritage of quality, care, and tradition.
                </p>

                {Array.from({length: 4}, (_, index)=> {
                    return (
                        <div className=""
                            key={index}>

                                <img src={`/assets/img/zoom/women/${index+1}.png`} alt={`womens clothes ${index+1}`} className=""/>

                        </div>
                    )
                })}

                
            </section>

            <section className="relative">
                <img src="/assets/img/zoom/Horse Bg.png" alt="Horse-bg" />
                <img src="/assets/img/zoom/colourful horse.png" alt="Colorful-horse" className="absolute w-[20%] top-[35%] left-[40%] " />

            </section>

            <section>
                <img src="/assets/img/zoom/women2/00.png" alt="image" />
            </section>

        </section>
    )

44
}

export default Zoom;