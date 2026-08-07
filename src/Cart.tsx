import type { Product } from "./types/product";


interface CartProps {
    cart: Product[];
}

export default function Cart( { cart }: CartProps) {


    return (
        <div>
            <h1>My Cart</h1>
            {cart.map((item: Product, index: number) => {
                return (
                    <div key={index}>{item.name}</div>
                );
            })}
        </div>
    )
}