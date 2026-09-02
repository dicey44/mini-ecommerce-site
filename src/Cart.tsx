import CartItemComp from "./CartItemComp";
import type { CartItem } from "./types/product";
import { useCart } from "./CartContext";
import "./Cart.css"
import closeSymbol from "./assets/images/window-close.svg";
import { useContext } from "react";
import { LanguageContext } from "./LanguageContext";
import { translations, productTranslations } from "./translations";


export default function Cart() {
    
    const { cart, cartStatus, closeCart } = useCart();
    const { language } = useContext(LanguageContext);


    const subTotal = cart.reduce((accumulator, currentItem) => {
                return (currentItem.product.price * currentItem.quantity) + accumulator;
            }, 0);

    const subTotalJa = cart.reduce((accumulator, currentItem) => {
        return (productTranslations[currentItem.product.id].price * currentItem.quantity) + accumulator
        }, 0);
    

    const totalTax = subTotal * 0.065;

    const totalTaxJa = Math.round(subTotalJa * 0.10);

    const total = language === "en" ? (subTotal + totalTax).toFixed(2) : Math.round(subTotalJa + totalTaxJa); 

    const moneySign = language === "en" ? "$" : "¥";

    const jaTranslations = translations.ja.cart;

    return (
        <div>
            <div className={`cart-overlay ${cartStatus === "cart" ? "visible" : ""}`} onClick={closeCart}></div>
            <div className={cartStatus}>
                <div className="cart-header">
                    <h2>{language === "en" ? "My Cart" : jaTranslations.myCart}</h2>
                    <img src={closeSymbol} onClick={closeCart}></img>                   
                </div>
                <h3>{language === "en" ? "Items" : jaTranslations.items}</h3>
                <div className="cart-items">
                    {cart.map(( item: CartItem) => {
                        return (
                            <CartItemComp cartListing={item} key={item.product.id}/>
                                
                        );
                    })}
                </div>
                
                <div className="totals first-total">
                    <span >{language === "en" ? "Subtotal" : jaTranslations.subTotal}</span><span>{moneySign}{language === "en" ? subTotal.toFixed(2) : subTotalJa}</span>
                </div>
                <div className="totals">
                    <span className="total-tax">{language === "en" ? "Tax" : jaTranslations.tax}</span><span>{moneySign}{language === "en" ? totalTax.toFixed(2) : totalTaxJa}</span>
                </div>
                <div className="totals total-amount">
                    <span>{language === "en" ? "Total" : jaTranslations.total}</span><span>{moneySign}{total}</span>
                </div>
                <button className="proceed-to-checkout-btn">{language === "en" ? "Proceed to Checkout" : jaTranslations.checkout}</button>
            </div>
        </div>
        
    )
}