import type { Product, CartProps } from "./types/product";


interface CartAppProps {
    cart: CartProps[];
    removeFromCart: (product: Product) => void;
}

export default function Cart( { cart, removeFromCart }: CartAppProps) {


    return (
        <div>
            <h1>My Cart</h1>
            {cart.map(({ product }: CartProps, index: number) => {
                return (
                    <div key={index}>{product.name}<span>{" $" + product.price + " "}</span>
                        <button onClick={() => removeFromCart(product)}>Remove From Cart</button>
                    </div>
                );
            })}
        </div>
    )
}