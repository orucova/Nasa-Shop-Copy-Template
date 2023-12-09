import React from "react";
import { Link } from "react-router-dom";


export const Card = ({item}) => {
  return (
    <div className="card" >
      <Link to={`/product-detail/${item.id}`} className="cardLink"> 
      <div className="tabCard">
        <div className="cardImage">
          <img
            src={`http://localhost:4000/${item.productImg}`}
            alt={item.productImg}
          />
        </div>
        <div className="cardTitle">
          <p>{item.productTitle}</p>
        </div>
        <p className="cardPrice">From ${item.price} USD</p>
        <span className="onSale">{item.color}</span>
          <button className="addBtn" role="button">
            quick view
          </button>
      </div>
      </Link>
    </div>
  );
};
