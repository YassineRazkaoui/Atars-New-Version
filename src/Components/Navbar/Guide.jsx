import React from "react";
import "../../Style/Guide.css";
import Guide1 from "../../assets/Guide/guide1.jpg";
import Guide2 from "../../assets/Guide/guide2.jpg";
import Guide3 from "../../assets/Guide/guide3.jpg";

function Guide() {
  return (
    <>
      <div className="container2">
        <div className="image-card">
          <img src={Guide1} alt="Guide" />
          <div className="content">
            <h2>Your guide to travel</h2>
            <p>Trips, tips, and stories from travelers—all right here</p>
            <button type="submit">Check it out</button>
          </div>
        </div>
      </div>
      <div className="Guide-img">
        <span>
          <img src={Guide2} alt="Guide2" className="guide-1"/>
        </span>
        <span>
          <img src={Guide3} alt="Guide2" className="guide-2"/>
        </span>
      </div>
    </>
  );
}

export default Guide;
