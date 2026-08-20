import CartItemComp from "./CartItemComp";
import type { CartItem } from "./types/product";
import { useCart } from "./CartContext";
import "./Cart.css"



export default function Cart() {
    
    const { cart } = useCart();

    const subTotal = cart.reduce((accumulator, currentItem) => {
                return (currentItem.product.price * currentItem.quantity) + accumulator;
            }, 0);

    const totalTax = subTotal * 0.065;

    return (
        <div className={(cart.length === 0 ? "hide" : "cart")}>
            <h2>My Cart</h2>
            <h3>Items</h3>
            <div className="cart-items">
                {cart.map(( item: CartItem) => {
                    return (
                        <CartItemComp cartListing={item} key={item.product.id}/>
                            
                    );
                })}
            </div>
            
            <div className="totals">
                <span >Subtotal</span><span>${subTotal}</span>
            </div>
            <div className="totals">
                <span className="total-tax">Tax</span><span>${totalTax.toFixed(2)}</span>
            </div>
            <div className="totals total-amount">
                <span>Total</span><span>${(subTotal + totalTax).toFixed(2)}</span>
            </div>
            <button className="proceed-to-checkout-btn">Proceed to Checkout</button>
            
            
        </div>
    )
}