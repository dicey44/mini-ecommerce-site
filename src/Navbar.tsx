import logo from "./assets/images/logo.png"
import cartLogo from "./assets/images/cart-outline.svg"
import accountLogo from "./assets/images/account-outline.svg"
import searchIcon from "./assets/images/magnify.svg"
import "./Navbar.css"
import { useCart } from "./CartContext"
import { useState } from "react"


interface NavbarProps {
    searchProduct: (input: string) => void;
}

export default function Navbar({ searchProduct }: NavbarProps) {
    const { totalQuantity, openCart } = useCart();

    const [searchValue, setSearchValue] = useState("");
    
    return (
    <header className='header'>
        <div className="logo">
            <img src={logo} alt="MiMart"/>
        </div>
        
        <nav className="nav">
            <a href="#" className="All Products">All Products</a>
            <a href="#">Categories</a>
            <a href="#">Deals</a>
            <a href="#">About Us</a>
        </nav>
        
        <div className="search">
            <input type="text" placeholder="Search products..." value={searchValue} onChange={e => setSearchValue(e.target.value)}></input>
            <img src={searchIcon} className="header-svg" onClick={() => searchProduct(searchValue)}></img>
        </div>
        
        <div className="account">
            <img src={accountLogo} className="header-svg"/>
            Account
        </div>

        <button className="cart-button" onClick={openCart}>
            <img src={cartLogo} className="header-svg"/>
            <span className="cart-count">{totalQuantity}</span>
        </button>
        
      </header>
    )
    
}