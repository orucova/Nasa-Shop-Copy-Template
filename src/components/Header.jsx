import { NavLink, Link } from "react-router-dom";
import logo from "../assets/images/logo.webp";
//Icons
import { FiSearch } from "react-icons/fi";
import { GiAstronautHelmet } from "react-icons/gi";
import { RiShoppingBag2Line } from "react-icons/ri";
import Dropdown from "./Dropdown";
const Header = () => {
  return (
    <header className="header">
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
                <NavLink className="a">
                Shop
                   </NavLink>
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
              <FiSearch />
            </li>
            <li className="icon user">
              <GiAstronautHelmet />
            </li>
            <li className="icon cartIcon">
              <RiShoppingBag2Line />
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Header;
