import type { CartItem, Product } from "./types/product";


interface CartItemProps {
    cartListing: CartItem;
    removeFromCart: (product: Product) => void;
    addToCart: (product: Product) => void;
}

export default function CartItemComp( { cartListing, addToCart, removeFromCart }: CartItemProps ) {


    return (
         <div>
            <img src={cartListing.product.image_url} width="150"/>
            <p>{cartListing.product.name}<span>{" $" + cartListing.product.price + " "} x {cartListing.quantity}</span></p>

                        <strong>${cartListing.quantity * cartListing.product.price}</strong>
                        <br/>
                        
                        <button onClick={() => removeFromCart(cartListing.product)}>Remove 1</button>
                        <button onClick={() => addToCart(cartListing.product)}>Add 1</button>
        </div>
    )
}