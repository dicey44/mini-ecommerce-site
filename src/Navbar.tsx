import logo from "./assets/images/logo.png"
import cartLogo from "./assets/images/cart-outline.svg"
import accountLogo from "./assets/images/account-outline.svg"
import searchIcon from "./assets/images/magnify.svg"
import "./Navbar.css"
import { useCart } from "./CartContext"
import { useContext, useState } from "react"
import { translations } from "./translations"
import { LanguageContext } from "./LanguageContext"


interface NavbarProps {
    searchProduct: (input: string) => void;
}

export default function Navbar({ searchProduct }: NavbarProps) {
    const { totalQuantity, openCart } = useCart();
    const [searchValue, setSearchValue] = useState("");

    const { language, changeLanguage } = useContext(LanguageContext);

    const t = translations[language].navBar;

    function handleEnterPress(event: React.KeyboardEvent<HTMLInputElement>) {
        if (event.key === "Enter") {
            return searchProduct(searchValue);
        }
    }
    
    return (
    <header className='header'>
        <div className="logo">
            <img src={logo} alt="MiMart"/>
        </div>
        
        <nav className="nav">
            <a href="#" className="all-products">{t.allProducts}</a>
            <a href="#">{t.categories}</a>
            <a href="#">{t.aboutUs}</a>
        </nav>
        
        <div className="search">
            <input type="text" placeholder={t.search} value={searchValue} onChange={e => setSearchValue(e.target.value)} onKeyDown={handleEnterPress}></input>
            <img src={searchIcon} className="header-svg" onClick={() => searchProduct(searchValue)}></img>
        </div>
        <div className="language-switcher">
            <button className={language === "en" ? "current-lang": ""} onClick={() => changeLanguage("en")}>
                English
            </button>

            <button className={language === "ja" ? "current-lang": ""} onClick={() => changeLanguage("ja")}>
                日本語
            </button>
        </div>
        <div className="account">
            <img src={accountLogo} className="header-svg"/>
            <p>{t.account}</p>
        </div>

        <button className="cart-button" onClick={openCart}>
            <img src={cartLogo} className="header-svg"/>
            <span className="cart-count">{totalQuantity}</span>
        </button>
        
      </header>
    )
    
}