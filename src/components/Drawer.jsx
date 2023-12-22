import React, { useEffect, useState } from "react";
import { InputText } from "primereact/inputtext";
import { FiSearch } from "react-icons/fi";
import { IoMdClose } from "react-icons/io";
import axios from "axios";
import { Link, useLocation } from "react-router-dom";
const Drawer = ({ open, setOpen }) => {
  const path=useLocation()
  useEffect(() => {
    setOpen(false);
  }, [setOpen,path.pathname]);

  const [products, setProducts] = useState([]);
  const [value, setValue] = useState("");

  const inputValue = function (e) {
    setValue(e.target.value);
  };

  useEffect(() => {
    const getProducts = async () => {
      await axios
        .get("http://localhost:4000/api/v1/shop-nasa")
        .then((res) => {
          setProducts(res.data);
        })
        .catch((err) => {
          console.log(err);
        });
    };
    getProducts();
  }, []);

  let productsfilter = products.filter((item) =>
    item.name.toLowerCase().includes(value.toLowerCase())
  );
  console.log(value); 
  return (
    <>
      <div
        className={`overlay ${open && "active"}`}
        onClick={() => setOpen(false)}
      ></div>
      <div className={`drawer ${open && "active"}`}>
        <div className="searchComp">
          <div className="searchInp">
            <FiSearch className="icon" />
            <span className="p-input-icon-left">
              <InputText
                placeholder="What are you looking for?"
                value={value}
                onChange={inputValue}
              />
            </span>
          </div>

          <IoMdClose className="icon close" onClick={() => setOpen(false)} />
        </div>
        <div className="searchBody">
          <ul className="searchList">
            {value === ""
              ? undefined
              : productsfilter.map((item) => (
                  <Link to={`/product-detail/${item.id}`}>
                    <li className="searchItem" key={item.id}>
                          <div className="cardImg">
                            <img src={`http://localhost:4000/${item.productImage}`} alt="" />
                          </div>
                          <div className="cardInfo">
                            <p className="cardtitle">{item.name}</p>
                            <span className="price">{item.price}</span>
                          </div>
                    </li>
                  </Link>
                ))}
          </ul>
        </div>
      </div>
    </>
  );
};

export default Drawer;
