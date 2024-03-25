import React from "react";
import "../../Style/Search.css";
import Hotel from "../../assets/Search-img/hotels.png";
import Check from "../../assets/Search-img/check-in.png";
import User from "../../assets/Search-img/user1.png";

function Search() {
  return (
    <div className="search-bar">
      <div className="destination">
        <img src={Hotel} alt="hotel" className="destination-hotel" />
        <div className="destination-content">
          <label htmlFor="destination" className="destination-label">
            {" "}
            Hotel{" "}
          </label>
          <input
            type="text"
            id="destination"
            placeholder="Where to?"
            className="destination-input"
          />
        </div>
      </div>

      <div className="check-in">
        <img src={Check} alt="check-in" className="check-in-hotel" />
        <div className="check-in-content">
          <label htmlFor="destination" className="check-in-label">
            {" "}
            Hotel{" "}
          </label>
          <input
            type="date"
            id="destination"
            placeholder="--/--/----"
            className="check-in-input"
          />
        </div>
      </div>

      <div className="check-out">
        <div className="check-out-content">
          <label htmlFor="destination" className="check-out-label">
            {" "}
            Hotel{" "}
          </label>
          <input
            type="date"
            id="destination"
            className="check-out-input"
          />
        </div>
      </div>

      <div className="guestes">
        <div className="guestes-icon">
          <img src={User} alt="gueste" className="guestes-user"/>
        </div>
        <div className="guestes-input">
          <input type="number" id="gueste" placeholder="Gueste"/>
        </div>
      </div>
      <button type="submit">Search</button>
    </div>
  );
}

export default Search;
