import React, { useState } from "react";
import "../../Style/Box.css";
import Flight from "../../assets/Navbar-img/flights.png";
import Hotels from "../../assets/Navbar-img/hotels.png";
import Car from "../../assets/Navbar-img/cars.png";
import Restaurant from "../../assets/Navbar-img/restaurants.png";

const Box = () => {
  const [selectedOption, setSelectedOption] = useState(null);

  const handleClick = (option) => {
    setSelectedOption(option);
  };

  return (
    <div className="Box">
      <div className="Box-element">
        <ul>
          <li>
            <a
              href="#"
              onClick={() => handleClick("flight")}
              className={selectedOption === "flight" ? "selected" : ""}
            >
              <img src={Flight} alt="flight" className="flight" />
              Flight
            </a>
          </li>
          <li>
            <a
              href="#"
              onClick={() => handleClick("hotels")}
              className={selectedOption === "hotels" ? "selected" : ""}
            >
              <img src={Hotels} alt="hotels" className="hotels" />
              Hotels
            </a>
          </li>
          <li>
            <a
              href="#"
              onClick={() => handleClick("car")}
              className={selectedOption === "car" ? "selected" : ""}
            >
              <img src={Car} alt="car" className="car" />
              Cars
            </a>
          </li>
          <li>
            <a
              href="#"
              onClick={() => handleClick("restaurant")}
              className={selectedOption === "restaurant" ? "selected" : ""}
            >
              <img src={Restaurant} alt="restaurant" className="restaurant" />
              Restaurants
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Box;
