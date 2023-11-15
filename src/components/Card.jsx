import React from "react";
import { Link } from "react-router-dom";
import img from "../assets/images/nasashop-1.webp"

export const Card = ({price,title,color}) => {
  return (
    <div className="card">
      <div className="tabCard">
        <div className="cardImage">
          <img
            src={img}
            alt={img}
          />
        </div>
        <div className="cardTitle">
          <Link>{title}</Link>
        </div>
        <p className="cardPrice">From ${price} USD</p>
        <span className="onSale">{color}</span>
          <Link className="addBtn" role="button">
            quick view
          </Link>
      </div>
    </div>
  );
};
