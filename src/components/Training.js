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
                <p>
                    Our training program is a 3-hour session held every Sunday
                    where participants learn various painting techniques for
                    canvas. The class is designed for all skill levels, whether
                    you're a beginner or an experienced painter looking to
                    improve your skills. The session includes step-by-step
                    instruction, hands-on practice, and guidance from an
                    experienced instructor. Join us for a fun and creative
                    experience as you learn to create beautiful works of art on
                    canvas.
                </p>
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
