import React from "react";
import { RiShoppingBag2Line } from "react-icons/ri";
import { IoMdClose } from "react-icons/io";
import foto from "../assets/images/nasashop-1.webp";
import { MdDiscount } from "react-icons/md";
import { TiMinus } from "react-icons/ti";
import { FaPlus } from "react-icons/fa6";
import { decrement, increment } from "../redux/slice/cartSlice";
import { useDispatch, useSelector } from "react-redux";


const Cart = ({ open, setOpen }) => {

  const dispatch=useDispatch()
  const count=useSelector((state)=>state.cartData.counter)
  const cart=useSelector((state)=>state.cartData.cart)

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
          {/* <div className="cartEmpty">
              <p className="cartEmptyTitle">Your cart is empty</p>
              <button className="cartBtn">Start Shopping</button>
            </div> */}
          <div className="cartBody">
            {cart.map(item=>
               <div className="cartProduct">
               <img  src={`http://localhost:4000/${item.productImage}`} alt={item.productImage} />
               <div className="productContent">
                 <div className="productCont">
                   <h3 className="cartProductTitle">
                     {item.name}
                   </h3>
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
                       <button className="decrement btncon">
                         <TiMinus onClick={()=>dispatch(decrement())}/>
                       </button>
                       <span className="counterResult btncon">{count}</span>
                       <button className="increment btncon">
                         <FaPlus onClick={()=>dispatch(increment())} />
                       </button>
                     </div>
                     <p className="remove">Remove</p>
                   </div>
                 </div>
                 <div className="productPrice">
                   <span className="newPrice">${item.price}</span>
                   <span className="oldPrice">$21.21</span>
                 </div>
               </div>
             </div>
              )}
           
          </div>
          <div className="cartFooter">
            <div className="cartFooterText">
              <p className="textOne">Add order note</p>
              <p className="textTwo">Shipping & taxes calculated at checkout</p>
            </div>
            <button  className="cartCheckoutBtn" onClick={()=> window.location.href = "http://localhost:3000/checkout"}>
              Checkout <span className="square-separator"></span> $21.21 USD
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Cart;
