import React from "react";
import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <div class="title">Registration </div>
      <form class="container">
        <div class="input-box">
          <label>Full Name :</label>
          <input type="text" placeholder="Enter your Name" />
        </div>
        <div class="input-box">
          <label class="details"> User Name :</label>
          <input type="text" placeholder="Enter your Name" />
        </div>
        <div class="input-box">
          <label class="details">Email Id :</label>
          <input type="text" placeholder="Enter your Name" />
        </div>
        <div class="input-box">
          <label class="details">Phone Number :</label>
          <input type="text" placeholder="Enter your Name" />
        </div>
        <div class="input-box">
          <label class="details">Password :</label>
          <input type="password" placeholder="Enter your Name" />
        </div>
        <div class="input-box">
          <label class="details">Confirm Password :</label>
          <input type="password" placeholder="Enter your Name" />
        </div>
        <div class="input-box">
          <label class="details">Gender :</label>
          <br />
          <input type="radio" />
          Male
          <input type="radio" />
          Female
          <input type="radio" />
          Others
        </div>
        <br />
        <br />
        <br />
        <div class="btn">
          <input type="Submit" value="Register" />
        </div>
      </form>
    </div>
  );
}
