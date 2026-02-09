import React from "react";
import Footer from "./Footer";

type spiceContentType = {
    title: string,
    desc: string,
    imgSrc: string,
    imgAlt: string,
}
// type productImgsType = {
//     imgSrc: string,
//     imgAlt: string,
// }



const spiceContent: spiceContentType[] = [
    {
        title: "Ceylon Spices",
        desc: "Sri Lanka is well known worldwide for its spices and herbs throughout history, valued for their rarity and high quality. The country maintained strong relationships with many nations involved in the spice trade, once the largest trade in the world. Known as Ceylon until 1972, Sri Lankan spices are globally recognized for their unique taste, strong aroma, and pure natural health benefits. Over 50% of Sri Lanka’s agricultural exports consist of spices and herbs, making them prized ingredients for spice enthusiasts across the globe.",
        imgSrc: "/assets/img/spice/spice photos-6.png",
        imgAlt: "Ceylon Spices",
    },
    {
        title: "Virgin Coconut Oil",
        desc: "Virgin coconut oil is extracted from pure coconut meat that is pounded and dried below 40°C, ensuring freshness and preventing rancidity. This low-temperature process results in a lower oil yield, making virgin coconut oil more expensive than regular coconut oil. It helps protect the liver, boosts good cholesterol, supports heart health, encourages fat burning, promotes healthy skin, and offers numerous additional health benefits.",
        imgSrc: "/assets/img/spice/spice photos-6.png",
        imgAlt: "Virgin Coconut Oil",
    },
    {
        title: "Desiccated Coconut",
        desc: "Coconut is a major plantation crop in Sri Lanka, contributing around 12% of total agricultural production. Desiccated coconut is produced by dehydrating and pounding freshly selected white coconut meat. It is pure white, fresh in taste, and widely used in cooking and food industries such as biscuits, chocolates, cakes, and bakery products. It contains approximately 70% oil, is cholesterol-free, low in sodium, rich in manganese, and helps maintain flexible artery walls.",
        imgSrc: "/assets/img/spice/spice photos-6.png",
        imgAlt: "Desiccated Coconut",
    },
    {
        title: "Pepper",
        desc: "Pepper is known as the King of Spices and was widely used worldwide before the introduction of chilies. It is believed to have originated in Sri Lanka before spreading to other regions. Black pepper is produced from unripe fruits dried until dark, while white pepper is made from ripe fruits after removing the outer skin. Black pepper is also known to support weight loss.",
        imgSrc: "/assets/img/spice/spice photos-pepper.png",
        imgAlt: "Pepper",
    },
    {
        title: "Nutmeg & Mace",
        desc: "Nutmeg yields two spices: the dark nutmeg seed and the bright red mace surrounding it. Both are used to flavor cakes, sweets, desserts, and beverages such as wine and chai tea. Nutmeg also has medicinal properties, helping relieve pain, improve circulation, support brain health, detoxify the body, freshen breath, and assist in red blood cell formation.",
        imgSrc: "/assets/img/spice/spice photos-4.png",
        imgAlt: "Nutmeg and Mace",
    },
    {
        title: "Cardamom",
        desc: "Cardamom, known as the Queen of Spices, is the world’s third most expensive spice after vanilla and saffron. It is widely used in cooking and to flavor tea and coffee. Medicinally, it helps lower blood pressure, improve digestion, protect the liver, enhance breathing, prevent cavities, support weight loss, and may help fight cancer.",
        imgSrc: "/assets/img/spice/spice photos-5.png",
        imgAlt: "Cardamom",
    },
    {
        title: "Turmeric",
        desc: "Turmeric belongs to the ginger family and is derived from the plant’s rhizome, which is dried and ground into powder. It is mainly used as a coloring agent and flavor enhancer. Turmeric aids wound healing, boosts antioxidants, improves brain function, reduces the risk of heart and brain diseases, and helps prevent cancer.",
        imgSrc: "/assets/img/spice/spice photos-6.png",
        imgAlt: "Turmeric",
    },
    {
        title: "Cloves",
        desc: "Cloves are dried flower buds used whole, powdered, or as oil in cooking, food production, and pharmaceuticals. They are also used in toothpaste, cosmetics, soaps, perfumes, and cigarettes. Clove oil aids digestion, relaxes muscles, and whole cloves can act as natural oral pain relievers.",
        imgSrc: "/assets/img/spice/spice photos-7.png",
        imgAlt: "Cloves",
    },
    {
        title: "Cinnamon",
        desc: "Cinnamon was the first major trade spice of the ancient world. Sri Lanka is the largest producer and exporter of true cinnamon, supplying nearly 90% of global trade. It is used to flavor desserts, beverages, and chocolates and is known for lowering blood sugar, cholesterol, and reducing heart disease risk.",
        imgSrc: "/assets/img/spice/spice photos-8.png",
        imgAlt: "Cinnamon",
    },
    {
        title: "Coriander",
        desc: "Coriander leaves and seeds are widely used in cooking. It can also be applied externally to relieve joint pain and rheumatism. Coriander helps treat sore throat, allergies, digestive issues, and hay fever.",
        imgSrc: "/assets/img/spice/spice photos-10.png",
        imgAlt: "Coriander",
    },
    {
        title: "Vanilla",
        desc: "Ceylon vanilla beans are known for their rich, creamy flavor and sweet aroma. The beans are long, slender, and have a moist surface indicating high vanillin content. This makes them highly valued for culinary and perfumery applications.",
        imgSrc: "/assets/img/spice/spice photos-10.png",
        imgAlt: "Vanilla",
    },
];






const Spice: React.FC = () => {
    return (
        <section>
            <section className="relative w-full flex flex-col items-center justify-center overflow-hidden ">
                <img src="/assets/logo/masa Logo.png" alt="Masa Logo"
                    className="w-28  " />

                <div className="flex justify-between w-full">
                    <img src="/assets/img/spice/masa-home.png" alt="Spice" className="w-[60%]" />
                    <h1 className="w-full font-urbanist font-semibold  text-4xl flex items-center justify-center">The Natural  Goodness of Ceylon</h1>


                </div>
                <img src="/assets/img/spice/masa-range.png" alt="Spice range" className="" />

                <div className="bg-[#a46080] h-3 w-full" />

            </section>

            {/* Mass ceylon about us */}
            <section className="py-12 max-w-7xl mx-auto ">
                <div className="flex flex-col w-full justify-between ">
                    <div className="flex  items-center justify-between w-full gap-5">

                        <div className="">
                            <h2 className="text-3xl text-spicePink font-urbanist pb-2 font-semibold">Mass Ceylon Spices</h2>
                            <p><span className="text-blue-600 font-semibold">Masa Ceylon Spices – A Touch of Heat, A Lot of Heritage</span> Discover the authentic flavours of Sri Lanka with Masa Ceylon Spices. Handpicked, sun-dried, and crafted to bring the natural taste, aroma, and goodness of Ceylon to your kitchen.</p>

                        </div>

                        <div className="flex justify-between items-center w-full text-lg">

                            <img src="/assets/img/spice/about-spice.png" alt="Mass Ceylon Spices" className="w-[90%]" />
                        </div>
                    </div>


                    <div className="flex  items-center justify-between w-full gap-5">

                        <div className="pb-10">
                            <h2 className="text-3xl text-spicePink font-urbanist pb-2 font-semibold">About Us</h2>
                            <div className="flex gap-5">
                                <p><span className="text-blue-600 font-semibold">At Masa Ceylon Spices, </span> we celebrate Sri Lanka’s rich spice heritage. From the lush highlands to your table, every spice is nurtured by nature, harvested with care, and processed to preserve its purity. Our commitment is simple: authentic taste, natural goodness, and quality you can trust</p>
                                {/* <p><span className="text-blue-600 font-semibold">Masa Ceylon Spices – A Touch of Heat, A Lot of Heritage</span> Discover the authentic flavours of Sri Lanka with Masa Ceylon Spices. Handpicked, sun-dried, and crafted to bring the natural taste, aroma, and goodness of Ceylon to your kitchen.</p> */}

                            </div>
                        </div>


                    </div>
                </div>

            </section>


            <section className="py-12 relative  mx-auto ">

                <div className="bg-spiceGreen h-3 w-full" />

                <div className="max-w-7xl py-20 mx-auto flex justify-between">
                    <div className="">
                        <h2 className="text-3xl text-spiceGreen font-urbanist pb-2 font-semibold">Our Products</h2>

                        {spiceContent.map((i, index) => (
                            <div className="flex gap-10"
                                key={index} >

                                <div className="flex flex-col gap-1 pt-10">
                                    <h2 className="text-xl font-urbanist font-semibold">
                                        {i.title}
                                    </h2>
                                    <p className="pr-20">
                                        {i.desc}            </p>
                                </div>
                                <img src={i.imgSrc} alt={i.imgAlt} className="w-[25%]" />
                            </div>
                        ))}

                    </div>



                </div>
            </section>

            <section className="py-12  mx-auto">
                <div className="bg-gray-500/60 h-3 w-full" />

                <div className="max-w-7xl py-20 mx-auto px-4">
                    <div className="flex items-end justify-between gap-6 mb-10">
                        <div>
                            <h2 className="text-3xl font-urbanist font-semibold text-gray-900">
                                Our Packaging Range
                            </h2>
                            <p className="text-gray-600 mt-2 max-w-2xl">
                                A consistent, premium jar format across our Ceylon spice lineup.
                            </p>
                        </div>
                    </div>

                    {/* Jar images */}
                    <div className="grid gap-8 sm:grid-cols-2">
                        {Array.from({ length: 7 }, (_, index) => {
                            const isRight = index % 2 === 1;

                            return (
                                <div
                                    key={index}
                                    className={`${isRight ? "translate-y-20" : ""
                                        }`}
                                >
                                    <div className="p-6">
                                        <img
                                            src={`/assets/img/spice/${index + 1}.png`}
                                            alt={`Spice ${index + 1}`}
                                            className="h-full w-full object-contain"
                                            loading="lazy"
                                        />
                                    </div>
                                </div>
                            );
                        })}
                    </div>


                </div>

            </section>

            <section>
                <img src="/assets/img/spice/gift-collection.png" alt="gift-collection" />
            </section>

            <Footer/>




        </section>


    )
}

export default Spice;