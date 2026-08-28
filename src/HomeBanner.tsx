import homeBannerImg from "./assets/images/home-banner.png"
import "./HomeBanner.css"
import { useContext } from "react"
import { translations } from "./translations"
import { LanguageContext } from "./LanguageContext"

export default function HomeBanner() {
    const { language } = useContext(LanguageContext);
    const t = translations[language].homeBanner;

    return (
        <div className="home-banner">
            <div className="home-banner-content">
                <h1>{t.title1}</h1>
                <h1>{t.title2}</h1>
                <p>{t.subtitle1}</p>
                <p>{t.subtitle2}</p>
                <button>{t.button}</button>
            </div>
            <div className="home-banner-img">
                <img src={homeBannerImg} alt="Different Items on Display" />
            </div>
            
        </div>
    )
}