import React from "react";
import "../../Style/Guide.css";
import Guide1 from "../../assets/Guide/guide2.jpg";

function Guide() {
  return (
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
  );
}

export default Guide;
