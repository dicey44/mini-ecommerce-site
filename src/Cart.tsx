import CartItemComp from "./CartItemComp";
import type { CartItem } from "./types/product";
import { useCart } from "./CartContext";



export default function Cart() {
    
    const { cart } = useCart();

    return (
        <div>
            <h1>My Cart</h1>
            {cart.map(( item: CartItem) => {
                return (
                    <CartItemComp cartListing={item} key={item.product.id}/>
                        
                );
            })}

            <h3>Total: ${cart.reduce((accumulator, currentItem) => {
                return (currentItem.product.price * currentItem.quantity) + accumulator;
            }, 0)}</h3>
        </div>
    )
}