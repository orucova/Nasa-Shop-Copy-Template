import data from "../db/card.json"
import img from "../assets/images/nasacard-1.webp"
import { Link } from "react-router-dom"
const LatestCard = () => {
  return (
    <div className="latestCardBox">
        <div className="row">
        {
            data && 
            data.map((item)=>(
                <div className="latestCard" id={item.id}>
                    <Link>
                    <div className="cardImg">
                        <img src={img} alt="" />
                    </div>
                    <div className="cardInfo">
                    <p className="cardSubtitle">{item.subtitle}</p>
                    <h4 className="cardTitle">{item.title}</h4>
                    <div className="button">
                    <Link className="btn">{item.btn}</Link>
                    </div>
                    </div>
                    </Link>
                </div>
            ))
        }
        </div>
    </div>
  )
}

export default LatestCard