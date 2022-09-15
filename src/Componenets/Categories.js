import React from "react";
import { Link } from "react-router-dom";
import "./Categories.css";
export default function Categories() {
  return (
    // returning JSX for categories component
    <>
      <h1
        style={{
          textAlign: "left",
          marginLeft: "11%",
          marginTop: "4%",
          color: "#626262",
          fontWeight: "400",
        }}
      >
        Get vast range of categories
      </h1>
      <div className="categoriesContainer">
        <div>
          <img src="./veggies.png" alt="..." />
          <h3 style={{ color: "#467E15" }}>Fresh Veggies</h3>
          <Link to="/shop">
            <button className="cat_btn">
              Explore <i className="fa-solid fa-arrow-right"></i>
            </button>
          </Link>
        </div>
        <div>
          <img src="./fruits.png" alt="..." style={{ width: "100%" }} />
          <h3 style={{ marginTop: "24%", color: "#467E15" }}>Fresh Fruits</h3>
          <Link to="/shop">
            <button className="cat_btn">
              Explore <i className="fa-solid fa-arrow-right"></i>
            </button>
          </Link>
        </div>
        <div>
          <img src="./spices.png" alt="..." />
          <h3 style={{ marginTop: "15%", color: "#467E15" }}>Spices</h3>
          <Link to="/shop">
            <button className="cat_btn">
              Explore <i className="fa-solid fa-arrow-right"></i>
            </button>
          </Link>
        </div>
      </div>
    </>
  );
}
