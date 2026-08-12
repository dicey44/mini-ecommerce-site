import CartItemComp from "./CartItemComp";
import type { Product, CartItem } from "./types/product";


interface CartAppProps {
    cart: CartItem[];
    removeFromCart: (product: Product) => void;
    total: number;
}

export default function Cart( { cart, removeFromCart, total }: CartAppProps) {


    return (
        <div>
            <h1>My Cart</h1>
            {cart.map(( item: CartItem) => {
                return (
                    <CartItemComp cartListing={item} removeFromCart={removeFromCart} key={item.product.id}/>
                        
                );
            })}

            <h3>Total: ${total}</h3>
        </div>
    )
}