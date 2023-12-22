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
import { addToCart,cartTotalPrice } from "../redux/slice/cartSlice";
import { useDispatch } from "react-redux";

const ProductDetail = () => {
  const [selectedCities, setSelectedCities] = useState(null);
  const [product, setProduct] = useState({});
  const { id } = useParams();

  useEffect(() => {
    const singlProduct = async () => {
      await axios
        .get(`http://localhost:4000/api/v1/shop-nasa/${id}`)
        .then((res) => {
          setProduct({ ...res.data, quantity: 1 });
        })
        .catch((err) => {
          console.log(err);
        });
    };
    singlProduct();
    window.scrollTo(0, 0);
  }, [id]);

  // Redux
  const dispatch = useDispatch();

  return (
    <section className="product-detail">
      <div className="container">
        <div className="productDetails">
          <div className="productLeft">
            <img
              src={`http://localhost:4000/${product.productImage}`}
              alt={product.productImage}
            />
          </div>
          <div className="productRight">
            <h2 className="productTitle">{product.name}</h2>
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
                  <TiMinus
                    onClick={() => {
                      if (product.quantity > 1) {
                        setProduct((prev) => ({
                          ...prev,
                          quantity: product.quantity - 1,
                        }));
                      }
                    }}
                  />
                </button>
                <span className="counterResult btncon">{product.quantity}</span>
                <button className="increment btncon">
                  <FaPlus
                    onClick={() =>
                      setProduct((prev) => ({
                        ...prev,
                        quantity: product.quantity + 1,
                      }))
                    }
                  />
                </button>
              </div>
            </div>
            <button
              className="addToCart"
              onClick={() => {
                dispatch(addToCart(product));
                dispatch(cartTotalPrice(product))
                setProduct({ ...product, quantity: 1 });
              }}
            >
              ADD TO CART
            </button>
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
