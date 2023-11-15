import React from "react";
import { RiShoppingBag2Line } from "react-icons/ri";
import { IoMdClose } from "react-icons/io";
const Cart = ({ open, setOpen }) => {
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
          <div className="cartBody">
            <p className="cartEmpty">Your cart is empty</p>
            <button className="cartBtn">Start Shopping</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Cart;
