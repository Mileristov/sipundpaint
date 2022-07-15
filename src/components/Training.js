import React from "react";
import "./Training.css";
import { Link } from "react-router-dom";

import two from "../assets/twooo.jpg";
import one from "../assets/wone.jpg";

const Training = () => {
    return (
        <div className="training">
            <div className="left">
                <h1>Training</h1>
                <p> Nosie you're perfect! </p>
                <Link to="/contact">
                    <button className="btn"> contact</button>
                </Link>
            </div>
            <div className="right">
                <div className="img-container">
                    <div className="image-stack top">
                        <img src={one} className="img" alt="" />
                    </div>
                    <div className="image-stack bottom">
                        <img src={two} className="img" alt="" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Training;
