import React from "react";
import "../../Style/Category.css";
import Beachfront from "../../assets/Category-img/Beachfront.png";
import Cabins from "../../assets/Category-img/Cabins.png";
import Camping from "../../assets/Category-img/Camping.png";
import Castles from "../../assets/Category-img/Castles.png";
import Desert from "../../assets/Category-img/Desert.png";
import Design from "../../assets/Category-img/Design.png";
import Farms from "../../assets/Category-img/Farms.png";
import Islands from "../../assets/Category-img/Islands.png";
import Rooms from "../../assets/Category-img/Rooms.png";
import Trending from "../../assets/Category-img/Trending.png";

function Category() {
  return (
    <div className="continer">
      <div className="Category-element">
        <ul className="Category-ul">
          <li>
            <a href="">
              <img src={Beachfront} alt="Beachfront" className="Beachfront" />
              <span>Beachfront</span>
            </a>
          </li>
          <li>
            <a href="">
              <img src={Trending} alt="trending" className="trending" />
              <span>trending</span>
            </a>
          </li>
          <li>
            <a href="">
              <img src={Design} alt="Design" className="Design" />
              <span>Design</span>
            </a>
          </li>
          <li>
            <a href="">
              <img src={Cabins} alt="Cabins" className="Cabins" />
              <span>Cabins</span>
            </a>
          </li>
          <li>
            <a href="">
              <img src={Desert} alt="Desert" className="Desert" />
              <span>Desert</span>
            </a>
          </li>
          <li>
            <a href="">
              <img src={Castles} alt="Castles" className="Castles" />
              <span>Castles</span>
            </a>
          </li>
          <li>
            <a href="">
              <img src={Camping} alt="Comping" className="Comping" />
              <span>Comping</span>
            </a>
          </li>
          <li>
            <a href="">
              <img src={Farms} alt="Farms" className="Farms" />
              <span>Farms</span>
            </a>
          </li>
          <li>
            <a href="">
              <img src={Islands} alt="Islands" className="Islands" />
              <span>Islands</span>
            </a>
          </li>
          <li>
            <a href="">
              <img src={Rooms} alt="Rooms" className="Rooms" />
              <span>Rooms</span>
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Category;
