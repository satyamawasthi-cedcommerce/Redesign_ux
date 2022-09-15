import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";
export default function Header(props) {
  return (
    // returning JSX
    <>
    {/* Providing Navigation */}
      <Link to="/" className="navLink">
        <img src="./logo.png" alt="..." className="logoImg" />
      </Link>
      <div className="navDiv">
        <div style={{ width: "15%" }}>
          <Link to="/" className="navLink">
            <h3 className="navContent">Welcome to "waytodoor"</h3>
          </Link>
        </div>
        <div
          style={{
            width: "40%",
            display: "flex",
            justifyContent: "space-around",
          }}
        >
          <Link to="/about" className="navLink">
            <h3 className="navContent">About</h3>
          </Link>
          <Link to="/shop" className="navLink">
            <h3 className="navContent">Shop</h3>
          </Link>
          <Link to="/cart" className="navLink">
            <h3 className="navContent">
              <i className="fa-solid fa-cart-shopping"></i><sup>{props.cartArr.length}</sup>
            </h3>
          </Link>
         
        </div>
      </div>
    </>
  );
}
