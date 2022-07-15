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
                heading="CONTACT US"
                text="Contact Sip Und Paint with Nosie!"
            />
            <Form />
            <Footer />
        </div>
    );
};

export default Contact;
