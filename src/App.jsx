import React from "react";
import "./Style/App.css";
import Navbar from "./Components/Navbar/Navbar";
import Box from "./Components/Navbar/Box";
import Search from "./Components/Navbar/Search";
import Category from "./Components/Navbar/Category";
import { Hotels } from "./Components/Navbar/Hotels";
import Announcement from "./Components/Navbar/Announcement";
import Guide from "./Components/Navbar/Guide";
import Sign from "./Components/Navbar/Sign";

const App = () => {
  return (
    <div className="container">
      <Navbar />
      <Box />
      <Search />
      <Category />
      <Hotels />
      <Announcement />
      <Guide />
      <Announcement />
      <Sign/>
    </div>
  );
};

export default App;
