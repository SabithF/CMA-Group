import React from "react";
import Nav from "./Nav";
import NoGapMosaicGrid from "./Brands2";
import Footer from "./Footer";



const Home: React.FC = () => {
    return (
        <>
            <Nav />

            <section className="">

                 {/* main banner */}
                <div className="">
                    <img src="/assets/img/Epikurion Grove.png" alt="Epikurion Grove" />
                </div>

                {/* <BrandsShowcaseSection /> */}
                <NoGapMosaicGrid />
                <Footer />


            </section>

        </>
    )
}

export default Home;