import { NavLink, Link, useLocation } from "react-router-dom";
import logo from "../assets/images/logo.webp";
//Icons
import { FiSearch } from "react-icons/fi";
import { GiAstronautHelmet } from "react-icons/gi";
import { RiShoppingBag2Line } from "react-icons/ri";
import Dropdown from "./Dropdown";
import Drawer from "./Drawer";
import { useEffect, useState } from "react";
import Cart from "./Cart";

const Header = () => {

  const [drawer, setDrawer] = useState(false);
  const [openCart, setOpenCart] = useState(false);
const  [headerClassName,setHeaderClassName]=useState("header")

//? Router
const path = useLocation();

      useEffect(()=>{
        if(path.pathname === "/checkout"){
          setHeaderClassName("noneHeader");
        }
        else{
          setHeaderClassName("header");
        }
      },[path.pathname])
  
  return (
    <>
      <header className={headerClassName}>
        <div className="container">
          <div className="row">
            <div className="logo">
              <Link to="/">
                <img src={logo} alt="logo" />
              </Link>
            </div>
            <nav className="navBar">
              <ul className="navList">
                <li className="navItem shopHover">
                  <NavLink className="a">Shop</NavLink>
                  <div className="dropdownMenu">
                    <Dropdown />
                  </div>
                </li>
                <li className="navItem">
                  <NavLink className="a" to="/collection">
                    Collections
                  </NavLink>
                </li>
                <li className="navItem">
                  <NavLink className="a" to="/nasaprograms">
                    Nasaprograms
                  </NavLink>
                </li>
                <li className="navItem">
                  <NavLink className="a" to="/clearance">
                    Clearance
                  </NavLink>
                </li>
              </ul>
            </nav>
            <ul className="userArea">
              <li className="icon search">
                <FiSearch onClick={() => setDrawer(!drawer)} />
              </li>
              <li className="icon user">
                <Link to="/login" >
                <GiAstronautHelmet />
                </Link>
              </li>
              <li className="icon cartIcon">
                <RiShoppingBag2Line onClick={() => setOpenCart(!openCart)} />
              </li>
            </ul>
          </div>
        </div>
      </header>
      <Drawer open={drawer} setOpen={setDrawer} />
      <Cart open={openCart} setOpen={setOpenCart} />
    </>
  );
};

export default Header;
