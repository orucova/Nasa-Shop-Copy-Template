import { Link, NavLink } from "react-router-dom";
import HeroLogo from "../assets/images/hero-logo_1.webp";
import videoBg from "../assets/images/videoBg.mp4";
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
          <div className="cardBox">
          <div className="row">
            <div className="tabCard">
              <div className="cardImage">
                <img src="" alt="" />
              </div>
              <div className="cardTitle">
                <Link>NASA's SpaceX_CRS-29 Unisex t-shirt</Link>
              </div>
              <p className="cardPrice">Sale priceFrom $24.95 USD</p>
              <span className="onSale">6 colors available</span>
              <div className="cardButton">
                <NavLink>quick view</NavLink>
              </div>
            </div>
          </div>
            
          </div>
        </div>
      </section>
    </main>
  );
};

export default Home;
