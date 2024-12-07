import React from "react";
import Header from "../components/header/Header";
import UserMajorDetail from "../components/UserMajor/UserMajorDetail";
import "./Main.css";
const Main = () => {
  return (
    <div>
      <Header />
      <main>
        <UserMajorDetail />
      </main>
    </div>
  );
};
export default Main;
