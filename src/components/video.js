import React from "react";
import "./video.css";
import { Link } from "react-router-dom";
import paintingVideo from "../assets/painting2.mp4";

const Video = () => {
    return (
        <div className="hero">
            <video autoPlay loop muted id="video">
                <source src={paintingVideo} type="video/mp4" />
            </video>
            <div className="content">
                <h1> Sip Und Paint with Nosie!</h1>
                <p>
                    Enjoying evenings drinking fine wine and painting in the
                    open.
                </p>

                <div>
                    <Link to="/training" className="btn">
                        training
                    </Link>
                    <Link to="/contact" className="btn btn-light">
                        Contact
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Video;
