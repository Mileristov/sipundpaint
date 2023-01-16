import React from "react";
import Footer from "../components/Footer";
import HeroImage from "../components/HeroImage";
import Navbar from "../components/Navbar";
import Prices from "../components/Prices";

const Pricing = () => {
    return (
        <div>
            <Navbar />
            <HeroImage
                heading="Explore Our Packages"
                text="Choose the perfect package to suit your needs and budget."
            />
            <Prices />
            <Footer />
        </div>
    );
};

export default Pricing;
