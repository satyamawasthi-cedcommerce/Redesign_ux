import React from "react";
import { Link } from "react-router-dom";
import "./Offers.css";
export default function Offers() {
  return (
    <>
      <h1
        style={{
          textAlign: "left",
          marginLeft: "11%",
          marginTop: "2%",
          color: "#626262",
          fontWeight: "400",
        }}
      >
        Grab the best Offers
      </h1>
      <div className="offersContainer">
        <div className="blinkOffers">
          <h3>"Get Flat "50% off" on your first Order." </h3>
        </div>
        <div class="container">
          <img
            src="https://images.freekaamaal.com/store_desc_images/1515145891.jpg"
            alt="Avatar"
            className="image"
          />
          <div className="middle">
            <div className="text">
              <Link to="/shop">
                <button className="offersbtn">
                  Get Started <i className="fa-solid fa-arrow-right"></i>
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
