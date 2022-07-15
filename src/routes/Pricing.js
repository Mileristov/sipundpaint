import React from "react";
import Footer from "../components/Footer";
import HeroImage from "../components/HeroImage";
import Navbar from "../components/Navbar";
import Prices from "../components/Prices";

const Pricing = () => {
    return (
        <div>
            <Navbar />
            <HeroImage heading="Pricing" text="Chose one of our plans." />
            <Prices />
            <Footer />
        </div>
    );
};

export default Pricing;
