import React from "react";
import { PricingBox } from "./components/PricingBox";
import "./styles/App.scss";

function App() {
  return (
    <div className="mainContainer">
      <header>Our Pricing</header>
      <div className="priceSwitcherBox">
        <div>Annually</div> <div>SWITCHER</div>
        <div>Monthly</div>
      </div>
      <div className="priceBoxContainer">
        <PricingBox
          type="Basic"
          price="$19.99"
          storage="500 GB"
          usernumber="2"
          sendDataGB="3"
        />
        <div className="priceBoxMiddle">
          <PricingBox
            type="Master"
            price="$39.99"
            storage="2 TB"
            usernumber="10"
            sendDataGB="20"
            highlighted={true}
          />
        </div>
        <PricingBox
          type="Master"
          price="$39.99"
          storage="2 TB"
          usernumber="10"
          sendDataGB="20"
        />
      </div>
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
