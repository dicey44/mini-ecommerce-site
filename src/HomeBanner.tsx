import homeBannerImg from "./assets/images/home-banner.png"
import "./HomeBanner.css"

export default function HomeBanner() {
    return (
        <div className="home-banner">
            <div className="home-banner-content">
                <h1>Everything you need.</h1>
                <h1>All in one place.</h1>
                <p>Quality products. Great prices.</p>
                <p>Fast delivery. Easy Returns.</p>
                <button>Shop Now</button>
            </div>
            <div className="home-banner-img">
                <img src={homeBannerImg} alt="Different Items on Display" />
            </div>
            
        </div>
    )
}