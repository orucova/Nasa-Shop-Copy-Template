import { Link, NavLink } from "react-router-dom";

import { AiOutlineArrowRight} from 'react-icons/ai';
import { BiLogoFacebook} from 'react-icons/bi';
import { BiLogoTwitter} from 'react-icons/bi';
import { BiLogoInstagram} from 'react-icons/bi';
import { BiLogoYoutube} from 'react-icons/bi';



const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footerContent">
          <h2 className="footerContentFirst">Ships Anywhere in the galaxy</h2>
          <h3 className="footerContentSecond">
            "To pioneer the future in space exploration, scientific discovery
            and aeronautics research."
          </h3>
        </div>
        <div className="footerNav">
          <div className="row">
            <ul className="footerList">
              <p className="listTitle">info</p>
              <li className="footerItem">SHOP NASA</li>
              <li className="footerItem">(877) 723-NASA</li>
              <li className="footerMailItem">
                <Link className="footerMail" to="mailto: jsc-shopnasa@mail.nasa.gov">
                  jsc-shopnasa@mail.nasa.gov
                </Link>
              </li>
              <li className="footerItem">2101 NASA Parkway</li>
              <li className="footerItem">
                Bldg. 11, Mail Code: AH5 Houston, TX 77058
              </li>
            </ul>
            <ul className="footerList">
              <p className="listTitle">COMPANY INFORMATION</p>
              <li className="footerItem">
                <NavLink to="/">About Us</NavLink>
              </li>
              <li className="footerItem">
                <NavLink to="/">Our Mission</NavLink>
              </li>
              <li className="footerItem">
                <NavLink to="/">News & Education</NavLink>{" "}
              </li>
              <li className="footerItem">
                <NavLink to="/">Contact Us</NavLink>
              </li>
              <li className="footerItem">
                <NavLink to="/">Search</NavLink>
              </li>
            </ul>
            <ul className="footerList">
              <p className="listTitle">Support</p>
              <li className="footerItem">
                <NavLink to="/">Shipping & Returns</NavLink>
              </li>
              <li className="footerItem">
                <NavLink to="/">Terms of Service</NavLink>
              </li>
              <li className="footerItem">
                <NavLink to="/">Privacy Policy</NavLink>{" "}
              </li>
            </ul>
            <ul className="footerList">
              <p className="listTitle">Newsletter</p>
              <li className="footerItem">Sign up with your email address to receive news and updates.</li>
              <form className="footerForm">
                <input className="inp" type="mail" placeholder="Your e-mail" />
                <button className="btn"><AiOutlineArrowRight/></button>
              </form>
            </ul>
            <ul className="footerList">
              <p className="listTitle">Follow Us</p>
              <li className="footerItem">Follow us for the latest news!</li>
              <ul className="socialList">
                <li className="socialItem"><Link><BiLogoFacebook/></Link></li>
                <li className="socialItem"><Link><BiLogoTwitter/></Link></li>
                <li className="socialItem"><Link><BiLogoInstagram/></Link></li>
                <li className="socialItem"><Link><BiLogoYoutube/></Link></li>
              </ul>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
