import React, { useEffect, useState } from "react";
import axios from "axios";
import { Card } from "../components/Card";
import { Loading } from "../components/Loading";
import { useNavigate } from "react-router-dom";

export const Shop = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();
  useEffect(() => {
    const getProducts = async () => {
        setLoading(true);
      await axios
        .get("http://localhost:4000/api/v1/shop-nasa")
        .then((res) => {
          setProducts(res.data);
          setLoading(false);
        })
        .catch((err) => {
            navigate("/errors");
          console.log(err);
        });
    };
    setTimeout(() => {
        getProducts();
      }, 3000);
  }, [navigate]);
  return (
    <section className="shop">
            {loading && <Loading/>}
      <div className="conainer">
        <div className="row">
            <h2 className="titleShop">Shops</h2>
          <div className="cardBoxs">
            {products.map((item) => (
              <Card item={item}  key={item.id}/>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
