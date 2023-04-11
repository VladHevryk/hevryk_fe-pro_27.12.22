import React from "react";
import Header from "./components/Header/Header";
// import Navbar from "./components/Navbar/Navbar";
import CentralContainer from "./components/CentralContainer/CentralContainer";
const App = () => {
  return (
    <div>
      <Header title="Header"/>
      <CentralContainer title="Navigation"/>
    </div>
  )
};

export default App;