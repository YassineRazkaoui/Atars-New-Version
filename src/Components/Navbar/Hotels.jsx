import React from "react";
import "../../Style/Hotels.css";
import Hotel1 from "../../assets/Hotel-img/hotel1.jpg";
import hotel2 from "../../assets/Hotel-img/hotel2.jpg";
import hotel3 from "../../assets/Hotel-img/hotel3.jpg";
import hotel4 from "../../assets/Hotel-img/hotel4.jpg";

const hotels = [
  {
    url: Hotel1,
    name: "Entire rental unit in Bad Ground (Harz), Germany",
    description: "3 guests - 1 bedroom - 3 beds - 1 bath",
    review: 118,
    star: 4.97,
  },
  {
    url: hotel2,
    name: "Entire villa in Dalaman, Turkey",
    description: "6 guests - 2 bedroom - 3 beds - 1 bath",
    review: 30,
    star: 4.83,
  },
  {
    url: hotel3,
    name: "Entire rental unit in Bad Ground (Harz), Germany",
    description: "3 guests - 1 bedroom - beds - 1 bath",
    review: 118,
    star: 4.97,
  },
  {
    url: hotel4,
    name: "Entire rental unit in Bad Ground (Harz), Germany",
    description: "3 guests - 1 - 3 beds - 1 bath",
    review: 118,
    star: 4.97,
  },
  {
    url: Hotel1,
    name: "Entire rental unit in Bad Ground (Harz), Germany",
    description: "3 guests - 1 bedroom - 3 beds - 1 bath",
    review: 118,
    star: 4.97,
  },
  {
    url: hotel2,
    name: "Entire villa in Dalaman, Turkey",
    description: "6 guests - 2 bedroom - 3 beds - 1 bath",
    review: 30,
    star: 4.83,
  },
  {
    url: hotel3,
    name: "Entire rental unit in Bad Ground (Harz), Germany",
    description: "3 guests - 1 bedroom - beds - 1 bath",
    review: 118,
    star: 4.97,
  },
  {
    url: hotel4,
    name: "Entire rental unit in Bad Ground (Harz), Germany",
    description: "3 guests - 1 - 3 beds - 1 bath",
    review: 118,
    star: 4.97,
  },
];

export const Hotels = () => {
  return (
    <div className="cont">
      <div className="hotels-img">
        {hotels.map((item, index) => (
          <div className="card" key={index}>
            <img src={item.url} alt={item.name} />
            <br />
            <span>{item.name}</span>
            <br />
            <span>{item.description}</span>
            <br />

            <span>{item.star}</span>
            <span>{item.review}</span>
          </div>
        ))}
      </div>
    </div>
  );
};
