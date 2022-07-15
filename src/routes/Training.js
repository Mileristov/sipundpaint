import React from "react";
import Footer from "../components/Footer";
import HeroImage from "../components/HeroImage";
import Navbar from "../components/Navbar";
import Trainings from "../components/Training";

const Training = () => {
    return (
        <div>
            <Navbar />
            <HeroImage heading="Training" text="Canva Training outdoors" />
            <Trainings />
            <Footer />
        </div>
    );
};

export default Training;
