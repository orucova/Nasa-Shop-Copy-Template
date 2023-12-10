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
import { decrement, increment,addToCart } from "../redux/slice/cartSlice";
import { useDispatch, useSelector } from "react-redux";



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
  .get(`http://localhost:4000/api/v1/shop-nasa/${id}`)
  .then((res)=>{
    setProduct(res.data)
  })
  .catch((err)=>{
    console.log(err)
  })
}

// Redux
const dispatch=useDispatch()
const count = useSelector((state)=>state.cartData.counter)
const cart=useSelector((state)=>state.cartData.cart)



  return (
    <section className="product-detail">
      <div className="container">
        <div className="row">
          <div className="productLeft">
            <img src={`http://localhost:4000/${product.productImage}`} alt={product.productImage} />
          </div>
          <div className="productRight">
            <h2 className="productTitle">
              {product.name}
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
                  <TiMinus onClick={()=>dispatch(decrement())} />
                </button>
                <span className="counterResult btncon">{count}</span>
                <button className="increment btncon">
                  <FaPlus onClick={()=>dispatch(increment())}/>
                </button>
              </div>
            </div>
            <button className="addToCart" onClick={()=>{dispatch(addToCart(product))
            console.log(cart)}}>ADD TO CART</button>
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
