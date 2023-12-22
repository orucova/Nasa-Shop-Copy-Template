import { IoMdClose } from "react-icons/io";
import { Link, useLocation } from "react-router-dom";
import { GiAstronautHelmet } from "react-icons/gi";
import logo from "../assets/images/logo.webp";
import { useEffect } from "react";



export const MobileMenu = ({open,setOpen}) => {

  const path=useLocation()
  useEffect(() => {
    setOpen(false);
  }, [setOpen,path.pathname]);
  return (
    <>
      <div
        className={`overlay ${open && "active"}`}
        onClick={() => setOpen(false)}
      ></div>
      <div className={`drawer ${open && "active"}`}>
<div className="mobilHeader">
<IoMdClose className="icon close" onClick={() => setOpen(false)} />
<Link to="/">
                <img src={logo} alt="logo" />
              </Link>
</div>
<ul className="mobilList">
    <li className="mobilItem">
        <Link to="/shop">Shop</Link>
    </li>
    <li className="mobilItem">
        <Link to="/errors">Collections</Link>
    </li>
    <li className="mobilItem">
        <Link to="/errors">Nasa Programs</Link>
    </li>
    <li className="mobilItem">
        <Link to="/errors">Clearance</Link>
    </li>
</ul>
<div className="mobilFooter">
<Link to="/login">
<GiAstronautHelmet className="accaunt"/>
<p>Account</p>
</Link>
</div>
      </div>
    </>
  )
}
