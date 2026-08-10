import CartItemComp from "./CartItemComp";
import type { Product, CartItem } from "./types/product";


interface CartAppProps {
    cart: CartItem[];
    removeFromCart: (product: Product) => void;
}

export default function Cart( { cart, removeFromCart }: CartAppProps) {


    return (
        <div>
            <h1>My Cart</h1>
            {cart.map(( item: CartItem) => {
                return (
                    <CartItemComp cartListing={item} removeFromCart={removeFromCart} key={item.product.id}/>
                        
                );
            })}
        </div>
    )
}