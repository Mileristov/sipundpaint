import React from "react";
import Navbar from "../components/Navbar.js";
import HeroImage from "../components/HeroImage.js";
import Footer from "../components/Footer.js";
import Form from "../components/Form.js";

const Contact = () => {
    return (
        <div>
            <Navbar />
            <HeroImage
                heading="Get in Touch"
                text="We'd love to hear from you! Ask us anything about our painting classes."
            />
            <Form />
            <Footer />
        </div>
    );
};

export default Contact;
