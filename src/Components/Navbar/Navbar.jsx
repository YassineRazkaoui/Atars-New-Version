import React from "react";
import "../../Style/Navbar.css";
import Logo_earth from "../../assets/earth_langue.png";
import Logo_Atars from "../../assets/logo_atars.png";

const Navbar = () => {
  return (
    <>
      <div className="navbar">
        <div className="logo">
          <img src={Logo_Atars} alt="" className="logo-atars" />
        </div>

        <div className="element">
          <ul>
            <li>
              <a href="">Trips</a>
            </li>
            <li>
              <a href="">Review</a>
            </li>
            <li>
              <a href="">Support</a>
            </li>
          </ul>
        </div>

        <div className="logo-earth">
          <img src={Logo_earth} alt="" className="earth" />
        </div>
        <div className="button-sign">
          <input type="button" value="Register" />
          <input type="button" value="Sign in" />
        </div>
      </div>
    </>
  );
};

export default Navbar;
