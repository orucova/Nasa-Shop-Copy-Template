import { NavLink, Link, useLocation } from "react-router-dom";
import logo from "../assets/images/logo.webp";
//Icons
import { FaBars } from "react-icons/fa6";
import { BiLogOutCircle } from "react-icons/bi";
import { FiSearch } from "react-icons/fi";
import { GiAstronautHelmet } from "react-icons/gi";
import { RiShoppingBag2Line } from "react-icons/ri";
import Dropdown from "./Dropdown";
import Drawer from "./Drawer";
import { useEffect, useState } from "react";
import Cart from "./Cart";
import axios from "axios";
import { MobileMenu } from "./MobileMenu";






const Header = () => {
  const [user, setUser] = useState(null);
  const [drawer, setDrawer] = useState(false);
  const [mobil,setMobil]=useState(false)
  const [openCart, setOpenCart] = useState(false);
  const [headerClassName, setHeaderClassName] = useState("header");
  //? Router
  const path = useLocation();

  useEffect(() => {
    if (path.pathname !== "/") {
      setHeaderClassName("header active");
      if (path.pathname === "/checkout") {
        setHeaderClassName("noneHeader");
      }
    } else {
      setHeaderClassName("header");
    }
  }, [path.pathname]);

  // Login
  useEffect(() => {
    const checkUser = async () => {
      let token = JSON.parse(localStorage.getItem("token"));
      if (token) {
        const body = {
          token,
        };
        await axios
          .post("http://localhost:8000/api/check-login", body)
          .then((res) => {
            setUser(res.data);
          })
          .catch((err) => {
            console.log(err);
          });
      }
    };
    setTimeout(() => {
      checkUser();
    }, 3000);
  }, []);

  // Logout
  const logOut = () => {
    localStorage.removeItem("token");
    window.location.reload();
    setTimeout(() => {
      setUser(null);
    }, 1000);
  };

  return (
    <>
      <header className={headerClassName}>
        <div className="container">
          <div className="row">
            <ul className="mobilIcon">
              <li className="icon bars">
                <FaBars onClick={() => setMobil(!mobil)} />
              </li>
              <li className="icon searchActive">
                <FiSearch onClick={() => setDrawer(!drawer)} />
              </li>
            </ul>
            <div className="logo">
              <Link to="/">
                <img src={logo} alt="logo" />
              </Link>
            </div>
            <nav className="navBar">
              <ul className="navList">
                <li className="navItem shopHover">
                  <NavLink className="a" to="/shop">Shop</NavLink>
                  <div className="dropdownMenu">
                    <Dropdown />
                  </div>
                </li>
                <li className="navItem">
                  <NavLink className="a" to="/errors">
                    Collections
                  </NavLink>
                </li>
                <li className="navItem">
                  <NavLink className="a" to="/errors">
                    Nasaprograms
                  </NavLink>
                </li>
                <li className="navItem">
                  <NavLink className="a" to="/errors">
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
                {!user ? (
                  <Link className="icon" to="/login">
                    <GiAstronautHelmet />
                  </Link>
                ) : (
                  <span onClick={logOut} className="icon">
                    <BiLogOutCircle className="icon" />
                  </span>
                )}
              </li>
              <li className="icon cartIcon">
                <RiShoppingBag2Line onClick={() => setOpenCart(!openCart)} />
              </li>
            </ul>
          </div>
        </div>
      </header>
<MobileMenu open={mobil} setOpen={setMobil}/>
      <Drawer open={drawer} setOpen={setDrawer} />
      <Cart open={openCart} setOpen={setOpenCart} />
    </>
  );
};

export default Header;
