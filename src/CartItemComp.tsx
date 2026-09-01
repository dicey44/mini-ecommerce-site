import type { CartItem } from "./types/product";
import { useCart } from "./CartContext";
import { useContext } from "react";
import { LanguageContext } from "./LanguageContext";
import { productTranslations } from "./translations";

interface CartItemProps {
    cartListing: CartItem;
}

export default function CartItemComp( { cartListing }: CartItemProps ) {

    const { removeFromCart, addToCart } = useCart();
    const { language } = useContext(LanguageContext);

    const productName = language === "en" ? cartListing.product.name : productTranslations[cartListing.product.id].name;
    const productTotalPrice = language === "en" ? (cartListing.quantity * cartListing.product.price).toFixed(2) : productTranslations[cartListing.product.id].price * cartListing.quantity;
    const moneySign = language === "en" ? "$" : "¥"

    return (
         <div className="cart-item">
            
            <p>{productName}<span> x {cartListing.quantity}</span></p>
                
            <strong>{moneySign}{productTotalPrice}</strong>
            <br/>
            <div className="cart-item-buttons">
                <button onClick={() => removeFromCart(cartListing.product)}>Remove -</button>
                <button onClick={() => addToCart(cartListing.product)}>Add +</button>
            </div>
                        
        </div>
    )
}