import React from "react";
import { Link } from "react-router-dom";
import "./Prices.css";

const pricing = () => {
    return (
        <div className="card-container">
            <div className="card">
                <h3>Sunday Painting Fun</h3>
                <span className="bar"></span>
                <p className="btc">1 frame</p>
                <p>
                    Join us for a fun-filled weekend of painting, wine tasting
                    and snacks. Take home whatever you paint and enjoy the
                    company of friends and family. This package is only 100
                    euros per person.
                </p>
                <Link to="/contact" className="btn">
                    Book
                </Link>
            </div>

            <div className="card">
                <h3>Date Night Special</h3>
                <span className="bar"></span>
                <p className="btc">2 frame's</p>
                <p>
                    Spend a romantic evening with your significant other
                    painting and sipping on wine. This package includes wine
                    tasting, finger foods, and you get to take home whatever you
                    paint. The price is 160 euros for a couple.
                </p>
                <Link to="/contact" className="btn">
                    Book
                </Link>
            </div>

            <div className="card">
                <h3>Monthly Subscription</h3>
                <span className="bar"></span>
                <p className="btc">4 frame's</p>
                <p>
                    Join our monthly subscription and make painting a regular
                    part of your Sunday routine. This package includes wine
                    tasting, finger foods, and you get to take home whatever you
                    paint. The price is 290 euros for a month of classes.
                </p>
                <Link to="/contact" className="btn">
                    Book
                </Link>
            </div>
        </div>
    );
};

export default pricing;
