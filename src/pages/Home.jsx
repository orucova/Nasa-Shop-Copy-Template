import { Link } from "react-router-dom";
import HeroLogo from "../assets/images/hero-logo_1.webp";
import videoBg from "../assets/images/videoBg.mp4";
import { Tabs } from "../components/Tabs";
import sectionVideo from "../assets/images/sectionVideo.mp4";
import LatestCard from "../components/LatestCard";

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
      <section className="videoSection">
        <div className="videoSectionContent">
          <div className="video">
            <video src={sectionVideo} autoPlay muted loop></video>
          </div>
          <div className="videoContent">
            <h2 className="videoTitle">EXPAND YOUR HORIZONS AND TAKE HOME A PIECE OF THE GALAXY.</h2>
            <div className="videoButton">
              <Link className="btn">Learn more</Link>
            </div>
          </div>
        </div>
      </section>
      <section className="latestSection">
        <div className="container">
          <div className="sectionTitle">
            <h2 className="title">the latest</h2>
          </div>
          <LatestCard/>
        </div>
      </section>
    </main>
  );
};

export default Home;
