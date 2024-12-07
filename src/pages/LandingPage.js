import React from "react";
import Home from "../components/home/Home";
import Header from "../components/header/Header";
import "./LandingPage.css";
const LandingPage = () => {
  return (
    <div className="maincontainer">
      <Header />

      <Home />
    </div>
  );
};

export default LandingPage;
