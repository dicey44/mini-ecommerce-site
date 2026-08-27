import CartItemComp from "./CartItemComp";
import type { CartItem } from "./types/product";
import { useCart } from "./CartContext";
import "./Cart.css"
import closeSymbol from "./assets/images/window-close.svg"



export default function Cart() {
    
    const { cart, cartStatus, closeCart } = useCart();

    const subTotal = cart.reduce((accumulator, currentItem) => {
                return (currentItem.product.price * currentItem.quantity) + accumulator;
            }, 0);

    const totalTax = subTotal * 0.065;

    return (
        <div>
            <div className={`cart-overlay ${cartStatus === "cart" ? "visible" : ""}`} onClick={closeCart}></div>
            <div className={cartStatus}>
                <div className="cart-header">
                    <h2>My Cart</h2>
                    <img src={closeSymbol} onClick={closeCart}></img>                   
                </div>
                <h3>Items</h3>
                <div className="cart-items">
                    {cart.map(( item: CartItem) => {
                        return (
                            <CartItemComp cartListing={item} key={item.product.id}/>
                                
                        );
                    })}
                </div>
                
                <div className="totals first-total">
                    <span >Subtotal</span><span>${subTotal.toFixed(2)}</span>
                </div>
                <div className="totals">
                    <span className="total-tax">Tax</span><span>${totalTax.toFixed(2)}</span>
                </div>
                <div className="totals total-amount">
                    <span>Total</span><span>${(subTotal + totalTax).toFixed(2)}</span>
                </div>
                <button className="proceed-to-checkout-btn">Proceed to Checkout</button>
            </div>
        </div>
        
    )
}