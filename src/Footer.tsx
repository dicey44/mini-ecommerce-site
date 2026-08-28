import "./Footer.css"
import { useContext } from "react";
import { translations } from "./translations";
import { LanguageContext } from "./LanguageContext";


export default function Footer() {
    const { language, changeLanguage } = useContext(LanguageContext);
    const t = translations[language].footer;

    return (
        <footer className="footer">
            <div className="footer-content">
                <div className="footer-section">
                    <h2>{t.miMart}</h2>
                    <p>{t.caption}</p>
                </div>

                <div className="footer-section">
                    <h3>{t.shop}</h3>
                    <a href="#">{t.allProducts}</a>
                    <a href="#">{t.mensClothing}</a>
                    <a href="#">{t.womensClothing}</a>
                    <a href="#">{t.electronics}</a>
                </div>

                <div className="footer-section">
                    <h3>{t.about}</h3>
                    <a href="#">{t.aboutUs}</a>
                    <a href="#">{t.contact}</a>
                    <a href="#">{t.privacy}</a>
                    <a href="#">{t.terms}</a>
                </div>
            </div>

            <div className="footer-bottom">
                <p>{t.copyright}</p>
                <div className="language-switcher">
                <button className={language === "en" ? "current-lang": ""} onClick={() => changeLanguage("en")}>
                    English
                </button>

                <button className={language === "ja" ? "current-lang": ""} onClick={() => changeLanguage("ja")}>
                    日本語
                </button>
        </div>
            </div>
        </footer>
    );
}