import type { CartItem } from "./types/product";
import { useCart } from "./CartContext";

interface CartItemProps {
    cartListing: CartItem;
}

export default function CartItemComp( { cartListing }: CartItemProps ) {

    const { removeFromCart, addToCart } = useCart();

    return (
         <div className="cart-item">
            
            <p>{cartListing.product.name}<span> x {cartListing.quantity}</span></p>
                
            <strong>${(cartListing.quantity * cartListing.product.price).toFixed(2)}</strong>
            <br/>
            <div className="cart-item-buttons">
                <button onClick={() => removeFromCart(cartListing.product)}>Remove -</button>
                <button onClick={() => addToCart(cartListing.product)}>Add +</button>
            </div>
                        
        </div>
    )
}