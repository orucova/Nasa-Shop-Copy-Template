import { NavLink } from "react-router-dom";
const Dropdown = () => {
  return (
    <div className="row">
      <ul className="shopDropdownList">
        <NavLink to="/">
          <h5 className="listTitle">apparel</h5>
        </NavLink>
        <NavLink to="/">
          <li className="shopDropdownItem">Men</li>
        </NavLink>
        <NavLink to="/">
          <li className="shopDropdownItem">Women</li>
        </NavLink>
        <NavLink to="/">
          <li className="shopDropdownItem">Youth</li>
        </NavLink>
        <NavLink to="/">
          <li className="shopDropdownItem">Socks</li>
        </NavLink>
        <NavLink to="/">
          <li className="shopDropdownItem">Caps & Hats</li>
        </NavLink>
        <NavLink to="/">
          <li className="shopDropdownItem">Accessories</li>
        </NavLink>
        <NavLink to="/">
          <li className="shopDropdownItem">Pride</li>
        </NavLink>
        <NavLink to="/">
          <li className="shopDropdownItem">Crew 6</li>
        </NavLink>
      </ul>
      <ul className="shopDropdownList">
      <NavLink to="/">
          <h5 className="listTitle">toys</h5>
        </NavLink>
        <NavLink to="/">
          <li className="shopDropdownItem">Flight Suits</li>
        </NavLink>
        <NavLink to="/">
          <li className="shopDropdownItem">STEM & Educational</li>
        </NavLink>
        <NavLink to="/">
          <li className="shopDropdownItem">Plush</li>
        </NavLink>
        <NavLink to="/">
          <li className="shopDropdownItem">Playsets</li>
        </NavLink>
        <NavLink to="/">
          <li className="shopDropdownItem">Puzzles</li>
        </NavLink>
      </ul>
      <ul className="shopDropdownList">
      <NavLink to="/">
          <h5 className="listTitle">collectibles</h5>
        </NavLink>
        <NavLink to="/">
          <li className="shopDropdownItem">Framed Sets</li>
        </NavLink>
        <NavLink to="/">
          <li className="shopDropdownItem">Scale Models</li>
        </NavLink>
        <NavLink to="/">
          <li className="shopDropdownItem">Patches</li>
        </NavLink>
        <NavLink to="/">
          <li className="shopDropdownItem">Pins</li>
        </NavLink>
        <NavLink to="/">
          <li className="shopDropdownItem">Medallions</li>
        </NavLink>
      </ul>
      <ul className="shopDropdownList">
      <NavLink to="/">
          <h5 className="listTitle">bookstore</h5>
        </NavLink>
        <NavLink to="/">
          <li className="shopDropdownItem">Children`s Books</li>
        </NavLink>
        <NavLink to="/">
          <li className="shopDropdownItem">Publications</li>
        </NavLink>
        <NavLink to="/">
          <li className="shopDropdownItem">Posters & Prints</li>
        </NavLink>
 
      </ul>
      <ul className="shopDropdownList">
        <NavLink to="/">
          <h5 className="listTitle">novelties</h5>
        </NavLink>
        <NavLink to="/">
          <li className="shopDropdownItem">Office & Stationery</li>
        </NavLink>
        <NavLink to="/">
          <li className="shopDropdownItem">Pens</li>
        </NavLink>
        <NavLink to="/">
          <li className="shopDropdownItem">Jewelry</li>
        </NavLink>
        <NavLink to="/">
          <li className="shopDropdownItem">Bags & Wallets</li>
        </NavLink>
        <NavLink to="/">
          <li className="shopDropdownItem">Drinkware</li>
        </NavLink>
        <NavLink to="/">
          <li className="shopDropdownItem">Lanyards</li>
        </NavLink>
        <NavLink to="/">
          <li className="shopDropdownItem">Keychains & Magnets</li>
        </NavLink>
      </ul>
    </div>
  );
};

export default Dropdown;
