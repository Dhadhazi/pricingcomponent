import React from "react";
import "./styles/App.scss";

function App() {
  return (
    <div className="mainContainer">
      <header>Our Pricing</header>
      <div className="priceSwitcherBox">
        <div>Annually</div> <div>SWITCHER</div>
        <div>Monthly</div>
      </div>
      <div>Price boxes</div>
      <div className="bg-top">
        <img src="bg-top.svg" alt="Background waves" />
      </div>
      <div className="bg-bottom">
        <img src="bg-bottom.svg" alt="Background waves" />
      </div>
    </div>
  );
}

export default App;
