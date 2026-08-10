import type { Product, CartItem } from "./types/product";


interface CartAppProps {
    cart: CartItem[];
    removeFromCart: (product: Product) => void;
}

export default function Cart( { cart, removeFromCart }: CartAppProps) {


    return (
        <div>
            <h1>My Cart</h1>
            {cart.map(({ product, quantity }: CartItem) => {
                return (
                    <div key={product.id}>{product.name}<span>{" $" + product.price + " "}</span>
                        <p>Quantity: {quantity}</p>
                        <button onClick={() => removeFromCart(product)}>Remove From Cart</button>
                    </div>
                );
            })}
        </div>
    )
}