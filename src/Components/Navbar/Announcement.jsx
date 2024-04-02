import React from "react";
import "../../Style/Announcement.css";
import img1 from "../../assets/Announcement/annonce5.jpg";

function Announcement() {
  return (
    <div className="container1">
      <div className="announcement">
        <img src={img1} alt="Marrakesh" />
        <div className="announcement-text">
          <h3>What is the best hotel in Marrakesh?</h3>
          <p>
            Marrakesh, a former imperial city in western Morocco, is a major
            economic center and home to mosques, palaces and gardens. The medina
            is a densely packed, walled medieval city dating to the Berber
            Empire 

          </p>
          <button type="submit">Read More</button>
        </div>
      </div>
    </div>
  );
}

export default Announcement;
