import { Card } from "../components/Card";
import data from "../data.json";
import { TabView, TabPanel } from "primereact/tabview";
import "primereact/resources/themes/lara-light-indigo/theme.css";

export const Tabs = () => {
  return (
    <div className="tabs">
    <TabView>
      <TabPanel header="Resupply Missions">
      <div className="cardBox">
    <div className="row">
      {data &&
        data.map((item) => (
          <Card
          key={item.id}
            img={item.img}
            price={item.price}
            title={item.title}
            color={item.color}
          />
        ))}
    </div>
  </div>
      </TabPanel>
      <TabPanel header="Artemis & Orion">
        <p className="m-0">
        Artemis & Orion
        </p>
      </TabPanel>
      <TabPanel header="Crew 7">
        <p className="m-0">
        Crew 7
        </p>
      </TabPanel>
      <TabPanel header="Flight Suits">
        <p className="m-0">
        Flight Suits
        </p>
      </TabPanel>
      <TabPanel header="Accessories">
        <p className="m-0">
        Accessories
        </p>
      </TabPanel>
    </TabView>
  </div>
  )
}
