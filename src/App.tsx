import React, { useState } from "react";
import { PricingBox } from "./components/PricingBox";
import "./styles/App.scss";

function App() {
  const [annually, setAnnually] = useState<boolean>(true);

  function setPricing() {
    if (annually) {
      setAnnually(false);
    } else {
      setAnnually(true);
    }
  }

  return (
    <div className="mainContainer">
      <header>Our Pricing</header>
      <div className="priceSwitcherBox">
        <div>Annually</div>
        <div className="switcher">
          <svg
            viewBox="0 0 55 30"
            xmlns="http://www.w3.org/2000/svg"
            className="switchCircle"
            onClick={() => setPricing()}
          >
            <circle cx={annually ? "15" : "40"} cy="15" r="12" fill="white" />
          </svg>
        </div>
        <div>Monthly</div>
      </div>
      <div className="priceBoxContainer">
        <PricingBox
          type="Basic"
          price={annually ? "$199.99" : "$19.99"}
          storage="500 GB"
          usernumber="2"
          sendDataGB="3"
        />
        <div className="priceBoxMiddle">
          <PricingBox
            type="Professional"
            price={annually ? "$249.99" : "$29.99"}
            storage="1 TB"
            usernumber="5"
            sendDataGB="10"
            highlighted={true}
          />
        </div>
        <PricingBox
          type="Master"
          price={annually ? "$399.99" : "$39.99"}
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
