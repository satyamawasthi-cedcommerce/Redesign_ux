import React from "react";
import { Link } from "react-router-dom";
import "./Ccd.css";
export default function Ccd() {
  return (
    // returning JSX for the CCd component
    <>
      <div className="ccdContainer">
        <div style={{ textAlign: "left" , marginTop:"3%"}}>
          <h1 className="ccdHead">Fresh and Healthy</h1>
          <h1 className="ccdHead">
            Veggies{" "}
            <span style={{ color: "#626262", fontWeight: "300" }}>Organic</span>
          </h1>
          <h1 style={{ color: "#626262", fontWeight: "300" }}>Market</h1>
          <h4 style={{ fontWeight: "350" }}>
            Order fresh groceries and get it
            <br />
            Delivered at your doorstep.
          </h4>

          <Link to="/shop">
            <button className="shopbtn">
              Shop Now <i className="fa-solid fa-arrow-right"></i>
            </button>
          </Link>
        </div>
        <div>
          <img src="./123.png" alt="..." />
        </div>
      </div>
    </>
  );
}
