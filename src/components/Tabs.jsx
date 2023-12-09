import { Card } from "../components/Card";
import { TabView, TabPanel } from "primereact/tabview";
import "primereact/resources/themes/lara-light-indigo/theme.css";
import { useEffect, useState } from "react";
import axios from "axios";

export const Tabs = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const getProducts = async () => {
      await axios
        .get("http://localhost:4000/nasa-api/products")
        .then((res) => {
          setProducts(res.data);
        })
        .catch((err) => {
          console.log(err);
        });
    };
    getProducts();
  }, []);


  return (
    <div className="tabs">
      <TabView>
        <TabPanel header="Resupply Missions">
          <div className="cardBox">
            <div className="row">
              {products.map((item) => (
                <Card key={item.id} item={item} />
              ))}
            </div>
          </div>
        </TabPanel>
        <TabPanel header="Artemis & Orion">
          <p className="m-0">Artemis & Orion</p>
        </TabPanel>
        <TabPanel header="Crew 7">
          <p className="m-0">Crew 7</p>
        </TabPanel>
        <TabPanel header="Flight Suits">
          <p className="m-0">Flight Suits</p>
        </TabPanel>
        <TabPanel header="Accessories">
          <p className="m-0">Accessories</p>
        </TabPanel>
      </TabView>
    </div>
  );
};
