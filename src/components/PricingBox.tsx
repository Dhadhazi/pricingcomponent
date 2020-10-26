import React from "react";

type Props = {
  type: string;
  price: string;
  storage: string;
  usernumber: string;
  sendDataGB: string;
  highlighted?: boolean;
};

export const PricingBox = ({
  type,
  price,
  storage,
  usernumber,
  sendDataGB,
  highlighted = false,
}: Props) => {
  return (
    <div className={highlighted ? "priceBox highlighted" : "priceBox"}>
      <div className="type">{type}</div>
      <div className="price">{price}</div>
      <hr />
      {storage} Storage
      <hr />
      {usernumber} Users Allowed
      <hr />
      Send up to {sendDataGB} GB
      <hr />
      <button>LEARN MORE</button>
    </div>
  );
};
