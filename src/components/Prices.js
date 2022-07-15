import React from "react";
import { Link } from "react-router-dom";
import "./Prices.css";

const pricing = () => {
    return (
        <div className="card-container">
            <div className="card">
                <h3>The Nosie's</h3>
                <span className="bar"></span>
                <p className="btc">1 frame</p>
                <p>1 painting, snacks and Wine 30 thousand</p>
                <Link to="/contact" className="btn">
                    Book
                </Link>
            </div>

            <div className="card">
                <h3>The Nosie's bit Upgraded</h3>
                <span className="bar"></span>
                <p className="btc">2 frame's</p>
                <p>2 painting, snacks and Wine 40 thousand</p>
                <Link to="/contact" className="btn">
                    Book
                </Link>
            </div>

            <div className="card">
                <h3>The Nosie's special</h3>
                <span className="bar"></span>
                <p className="btc">3 frame's</p>
                <p>3 painting, snacks and Wine 50 thousand</p>
                <Link to="/contact" className="btn">
                    Book
                </Link>
            </div>
        </div>
    );
};

export default pricing;
