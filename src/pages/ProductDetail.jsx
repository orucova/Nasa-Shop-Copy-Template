import React, { useEffect, useState } from "react";
import { FaFacebookF } from "react-icons/fa6";
import { FaPinterestP } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaTelegramPlane } from "react-icons/fa";
import { IoIosStar } from "react-icons/io";
import { MultiSelect } from "primereact/multiselect";
import { TiMinus } from "react-icons/ti";
import { FaPlus } from "react-icons/fa6";
import axios from "axios";
import { useParams } from "react-router-dom";

const ProductDetail = () => {
  const [selectedCities, setSelectedCities] = useState(null);
  const [product,setProduct]=useState({})
 const {id}=useParams()
 


useEffect(()=>{
  singlProduct()
  window.scrollTo(0,0)
},[id])

const singlProduct=async()=>{
  await axios
  .get(`http://localhost:4000/nasa-api/products/${id}`)
  .then((res)=>{
    setProduct(res.data)
  })
  .catch((err)=>{
    console.log(err)
  })
}


  return (
    <section className="product-detail">
      <div className="container">
        <div className="row">
          <div className="productLeft">
            <img src={`http://localhost:4000/${product.productImg}`} alt="" />
          </div>
          <div className="productRight">
            <h2 className="productTitle">
              {product.productTitle}
            </h2>
            <p className="productPrice">${product.price} USD</p>
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
                options={product.size}
                optionLabel="name"
                placeholder="S"
                maxSelectedLabels={8}
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
