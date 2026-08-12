import CartItemComp from "./CartItemComp";
import type { Product, CartItem } from "./types/product";


interface CartAppProps {
    cart: CartItem[];
    removeFromCart: (product: Product) => void;
    addToCart: (product: Product) => void;

}

export default function Cart( { cart, removeFromCart, addToCart}: CartAppProps) {


    return (
        <div>
            <h1>My Cart</h1>
            {cart.map(( item: CartItem) => {
                return (
                    <CartItemComp cartListing={item} removeFromCart={removeFromCart} key={item.product.id} addToCart={addToCart}/>
                        
                );
            })}

            <h3>Total: ${cart.reduce((accumulator, currentItem) => {
                return (currentItem.product.price * currentItem.quantity) + accumulator;
            }, 0)}</h3>
        </div>
    )
}