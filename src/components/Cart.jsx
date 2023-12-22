import React, { useEffect } from "react";
import { RiShoppingBag2Line } from "react-icons/ri";
import { IoMdClose } from "react-icons/io";

import { MdDiscount } from "react-icons/md";
import { TiMinus } from "react-icons/ti";
import { FaPlus } from "react-icons/fa6";
import { decrement, increment, removeFromCart } from "../redux/slice/cartSlice";
import { useDispatch, useSelector } from "react-redux";
import { Link, useLocation } from "react-router-dom";

const Cart = ({ open, setOpen }) => {
  const path = useLocation()
  useEffect(() => {
    setOpen(false);
  }, [setOpen,path.pathname]);
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cartData.cart);
 

 const totalPrice=cart.reduce((total,item)=>total+item.price*item.quantity,0)



  return (
    <>
      <div
        className={`overlay ${open && "active"}`}
        onClick={() => setOpen(false)}
      ></div>
      <div className={`drawer ${open && "active"}`}>
        <div className="drawerContent">
          <div className="searchComp">
            <span className="cartTitle">
              <RiShoppingBag2Line className="shopIcon" /> CART
            </span>
            <IoMdClose className="icon close" onClick={() => setOpen(false)} />
          </div>
          {
            cart.length > 0 ? <><div className="cartBody">
              {cart.map((item) => (
                <div className="cartProduct" key={item.id}>
                  <img
                    src={`http://localhost:4000/${item.productImage}`}
                    alt={item.productImage} />
                  <div className="productContent">
                    <div className="productCont">
                      <h3 className="cartProductTitle">{item.name}</h3>
                      <p className="productSize">Heather True Royal / S</p>
                      <div className="sale">
                        <span className="discountIcon">
                          <MdDiscount className="icon" />
                        </span>
                        <p className="saleText">
                          Holiday/Cyber Monday 15% off sale (-$3.74)
                        </p>
                      </div>
                      <div className="productConter">
                        <div className="productBtns">
                          <button
                            className="decrement btncon"
                            onClick={() => dispatch(decrement(item.id))}
                          >
                            <TiMinus />
                          </button>
                          <span className="counterResult btncon">
                            {item.quantity}
                          </span>
                          <button
                            className="increment btncon"
                            onClick={() => dispatch(increment(item.id))}
                          >
                            <FaPlus />
                          </button>
                        </div>
                        <p
                          className="remove"
                          onClick={() => dispatch(removeFromCart(item.id))}
                        >
                          Remove
                        </p>
                      </div>
                    </div>
                    <div className="productPrice">
                      <span className="newPrice">${item.price}</span>
                      <span className="oldPrice">$21.21</span>
                    </div>
                  </div>
                </div>
              ))}
            </div><div className="cartFooter">
                <div className="cartFooterText">
                  <p className="textOne">Add order note</p>
                  <p className="textTwo">Shipping & taxes calculated at checkout</p>
                </div>
                <button
                  className="cartCheckoutBtn"
                  onClick={() => (window.location.href = "http://localhost:3000/checkout")}
                >
                  Checkout <span className="square-separator"></span> ${totalPrice.toFixed(2)} USD
                </button>
              </div></>  
          : <div className="cartEmpty">
              <p className="cartEmptyTitle">Your cart is empty</p>
              <Link to="/shop" className="cartBtn">Start Shopping</Link>
            </div>
          }




        </div>
      </div>
    </>
  );
};

export default Cart;
