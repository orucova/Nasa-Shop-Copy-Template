import { Link } from "react-router-dom";
import HeroLogo from "../assets/images/hero-logo_1.webp";
import videoBg from "../assets/images/videoBg.mp4";
import { Tabs } from "../components/Tabs";

const Home = () => {
  return (
    <main>
      <section className="hero">
        <div className="heroContent">
          <div className="heroVideo">
            <video
              className="videoBg"
              src={videoBg}
              autoPlay
              muted
              loop
            ></video>
          </div>
          <div className="heroInfo">
            <div className="logo">
              <img src={HeroLogo} alt="" />
            </div>
            <div className="heroButton">
              <Link className="heroLink">shop now</Link>
            </div>
          </div>
        </div>
      </section>
      <section className="tabSection">
        <div className="container">
          <div className="tabTitle">
            <p className="tabSubtitle">explore our</p>
            <h2 className="tabMainTitle">featured items</h2>
          </div>
          <Tabs />
        </div>
      </section>
    </main>
  );
};

export default Home;
