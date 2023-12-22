import { Link } from "react-router-dom";
import logo from "../assets/images/hero-logo_1.webp";
import { RiShoppingBag2Line } from "react-icons/ri";

import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import Cart from "../components/Cart";

import axios from "axios";

// React hook form
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

// Yup
import * as yup from "yup";
// Tostfy
import { ToastContainer, toast } from "react-toastify";

import { useNavigate } from "react-router-dom";

const Checkout = () => {
  const [countries, setCountries] = useState([]);
  const [openCart, setOpenCart] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    getCountries();
  });

  const registerSchema = yup.object({
    name: yup
      .string()
      .trim()
      .min(3, "Must be at least 3 characters.")
      .required("The name cannot be empty."),
    surname: yup
      .string()
      .trim()
      .min(3, "Must be at least 3 characters.")
      .required("Surname cannot be empty."),
    email: yup
      .string()
      .trim()
      .required("Email must not be empty.")
      .matches(/^[A-Za-z0-9._%-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}$/, {
        message: "The e-mail address field is required.",
        excludeEmptyString: true,
      }),
    addres: yup
      .string()
      .trim()
      .min(3, "Must be at least 3 characters.")
      .required("The adress cannot be empty."),
  });

  // React hook form
  const {
    register,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(registerSchema),
  });

const onSubmit=(e)=>{
  e.preventDefault()
   toast.success("Order Accepted!", {
    position: "top-center",
    autoClose: 2000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: 1,
    theme: "dark",
  });
  localStorage.removeItem("cart");
  setTimeout(() => {
    navigate("/");
    window.location.reload();
  }, 2000);
}


  const getCountries = async () => {
    try {
      const response = await axios.get(
        "https://countriesnow.space/api/v0.1/countries"
      );
      setCountries(response.data.data);
    } catch (error) {
      console.log(error);
    }
  };



  const cart = useSelector((state) => state.cartData.cart);
  const totalPrice = cart.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );
  return (
    <section className="checkoutSection">
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
      <div className="checkoutHeader">
        <div className="container">
          <div className="row">
            <div className="logoSide">
              <Link to="/">
                <img src={logo} alt="" />
              </Link>
            </div>
            <div className="cartSide">
              <span className="cartIcon">
                <RiShoppingBag2Line onClick={() => setOpenCart(!openCart)} />
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="checkoutMain">
        <div className="container">
          <div className="row">
            <div className="leftSide">
              <form className="checkoutForm" onSubmit={onSubmit
              
              }>
                <div className="contact">
                  <h4 className="formTitle">Contact</h4>
                  <span>
                    Have an account? <Link to="/login">Log in</Link>
                  </span>
                </div>
                {errors.email && (
                  <span className="errorMsg">{errors.email.message}</span>
                )}
                <input
                  className="inp"
                  type="email"
                  placeholder="Email"
                  {...register("email")}
                />
                <div className="checkbox">
                  <input
                    className="checkboxInp"
                    type="checkbox"
                    id="checkbox"
                  />
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
                {errors.name && (
                  <span className="errorMsg">{errors.name.message}</span>
                )}
                <input
                  className="inp fName"
                  type="text"
                  name="name"
                  placeholder="First Name"
                  {...register("name")}
                />
                {errors.surname && (
                  <span className="errorMsg">{errors.surname.message}</span>
                )}
                <input
                  className="inp fName"
                  type="text"
                  placeholder="Last Name"
                  name="surname"
                  {...register("surname")}
                />
                <div className="adress">
                  {errors.adress && (
                    <span className="errorMsg">{errors.adress.message}</span>
                  )}
                  <input
                    className="inp"
                    type="text"
                    placeholder="Adress"
                    name="adress"
                    {...register("adress")}
                  />
                </div>
                <button className="btn">Pay Now</button>
              </form>
            </div>
            <div className="rightSide">
              {cart.map((item) => (
                <div className="productBay" key={item.id}>
                  <div className="productImage">
                    <img
                      className="img"
                      src={`http://localhost:4000/${item?.productImage}`}
                      alt=""
                    />
                  </div>
                  <div className="productInfo">
                    <p className="productName">{item.name}</p>
                    <p className="productSize">Black/S</p>
                    <p className="productSale">
                      HOLIDAY/CYBER MONDAY 15% OFF SALE
                    </p>
                  </div>
                  <div className="productPrice">
                    <p className="price"> ${item.price}x</p>
                    <p className="price">{item.quantity}</p>
                  </div>
                </div>
              ))}
              <p className="total">Total: {totalPrice.toFixed(2)}</p>
            </div>
          </div>
        </div>
      </div>
      <Cart open={openCart} setOpen={setOpenCart} />
    </section>
  );
};

export default Checkout;
