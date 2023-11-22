import { Link } from "react-router-dom";
import logo from "../assets/images/hero-logo_1.webp";
import { RiShoppingBag2Line } from "react-icons/ri";
import image from "../assets/images/nasashop-1.webp";
import axios from "axios";
import { useEffect, useState } from "react";
const Checkout = () => {
  const [countries, setCountries] = useState([])

  useEffect(()=>{
    getCountries()
  })

  const getCountries = async () => {
    try {
      const response = await axios.get("https://countriesnow.space/api/v0.1/countries")
      setCountries(response.data.data)
    } catch(error){
      console.log(error)
    }
  }
  return (
    <section className="checkoutSection">
      <div className="checkoutHeader">
        <div className="container">
          <div className="row">
            <div className="logoSide">
              <img src={logo} alt="" />
            </div>
            <div className="cartSide">
              <span className="cartIcon">
                <RiShoppingBag2Line />
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="checkoutMain">
        <div className="container">
          <div className="row">
            <div className="leftSide">
              <form className="checkoutForm">
                <div className="contact">
                  <h4 className="formTitle">Contact</h4>
                  <span>
                    Have an account? <Link to="/login">Log in</Link>
                  </span>
                </div>
                <input className="inp" type="email" placeholder="Email" />
                <div className="checkbox">
                  <input className="checkboxInp" type="checkbox" id="checkbox" />
                  <label id="checkbox">Email me with news and offers</label>
                </div>
                <h4 className="formTitle">Delivery</h4>
                <div className="select">
                  <select name="country" id="" placeholder="Country/Region">
                    <option value="">Argentina</option>
                    {countries.map((item, index) => (
                    <option key={index} value={item.country}>
                      {item.country}
                    </option>
                  ))}
                  </select>
                </div>
                <input className="inp fName" type="text" placeholder="First Name" />
                <input className="inp fName" type="text" placeholder="Last Name" />
                <div className="adress">
                  <input className="inp" type="text" placeholder="Adress" />
                </div>
                <button className="btn">Pay Now</button>
              </form>
            </div>
            <div className="rightSide">
              <div className="row">
                <div className="productImage">
                  <img className="img" src={image} alt="" />
                </div>
                <div className="productInfo">
                    <p className="productName">NASA’s SpaceX CRS-22 Unisex T-Shirt</p>
                    <p className="productSize">Black/S</p>
                    <p className="productSale">HOLIDAY/CYBER MONDAY 15% OFF SALE</p>
                </div>
                <div className="productPrice">
                    <p className="price">$16.96</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Checkout;
