import React from "react";
import "./Contact.css";
export default function Contact() {
  return (
    // returning JSX
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
        Feel free to connect and rasie queries
      </h1>
      <img src="./offresimg.png" alt="..." style={{ marginTop: "4%" }} />
      <div>
        <h3 style={{ color: "#626262", fontWeight: "400" ,width:"50%", marginLeft:"25%"}}>
          At vero eos et accusamus et iusto odio dignissimos ducimus qui
          blanditiis praesentium voluptatum deleniti atque corrupti quos dolores
          et quas molestias excepturi sint occaecati cupiditate non provident,
          similique sunt in culpa qui officia deserunt mollitia animi, id est
          laborum et dolorum fuga
        </h3>
        <input type="text" placeholder="Enter your Email" style={{width:"40%", padding:"1%", marginTop:"2%"}}/><br/>
        <button className="contactbtn">connect with us</button>
      </div>
    </>
  );
}
