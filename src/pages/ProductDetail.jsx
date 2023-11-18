import React, { useState } from "react";
import { FaFacebookF } from "react-icons/fa6";
import { FaPinterestP } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaTelegramPlane } from "react-icons/fa";
import { IoIosStar } from "react-icons/io";
import { MultiSelect } from "primereact/multiselect";
import { TiMinus } from "react-icons/ti";
import { FaPlus } from "react-icons/fa6";
import foto from "../assets/images/nasashop-1.webp";

const ProductDetail = () => {
  const [selectedCities, setSelectedCities] = useState(null);
  const cities = [
    { name: "S", code: "S" },
    { name: "M", code: "M" },
    { name: "L", code: "L" },
    { name: "XL", code: "XL" },
    { name: "XL", code: "2XL" },
    { name: "3XL", code: "3XL" },
    { name: "4XL", code: "4XL" },
  ];
  return (
    <section className="product-detail">
      <div className="container">
        <div className="row">
          <div className="productLeft">
            <img src={foto} alt="" />
          </div>
          <div className="productRight">
            <h2 className="productTitle">
              NASA'S SPACEX_CRS-29 UNISEX T-SHIRT
            </h2>
            <p className="productPrice">$24.95 USD</p>
            <div className="stars">
              <div className="starIcons">
                <IoIosStar className="iconStar" />
                <IoIosStar className="iconStar" />
                <IoIosStar className="iconStar" />
                <IoIosStar className="iconStar" />
                <IoIosStar className="iconStar" />
                <p className="noReviews">No reviews</p>
              </div>
              <p className="sku">SKU:1</p>
            </div>
            <div className="size">
              Size:
              <MultiSelect
                value={selectedCities}
                onChange={(e) => setSelectedCities(e.value)}
                options={cities}
                optionLabel="name"
                placeholder="S"
                maxSelectedLabels={7}
                className="w-full md:w-20rem"
              />
            </div>
            <div className="quatity">
              <p className="quantityTitle">Quantity:</p>
              <div className="productBtns">
                <button className="decrement btncon">
                  <TiMinus />
                </button>
                <span className="counterResult btncon">1</span>
                <button className="increment btncon">
                  <FaPlus />
                </button>
              </div>
            </div>
            <button className="addToCart">ADD TO CART</button>
            <div className="share">
              <p className="shareTitle">Share</p>
              <span className="shareIcons">
                <FaFacebookF className="shareIcon" />
                <FaPinterestP className="shareIcon" />
                <FaTwitter className="shareIcon" />
                <FaTelegramPlane className="shareIcon" />
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductDetail;
