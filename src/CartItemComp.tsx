import type { CartItem, Product } from "./types/product";


interface CartItemProps {
    cartListing: CartItem;
    removeFromCart: (product: Product) => void;
}

export default function CartItemComp( { cartListing, removeFromCart }: CartItemProps ) {


    return (
         <div>
            <img src={cartListing.product.image_url} width="150"/>
            <p>{cartListing.product.name}<span>{" $" + cartListing.product.price + " "}</span></p>
            
                        <p>Quantity: {cartListing.quantity}</p>
                        
                        <button onClick={() => removeFromCart(cartListing.product)}>Remove From Cart</button>
        </div>
    )
}