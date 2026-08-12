import type { Product } from "./types/product"
import "./ProductCard.css"
import { useCart } from "./CartContext";


interface ProductCardProps {
    product: Product;
}

export default function ProductCard( { product }: ProductCardProps ) {

    const { addToCart } = useCart();

    return (
        <div>
            <img src={product.image_url} className="product-card-img"/>
            <p>{product.name}</p>
            <p>{`$${product.price}`}</p>
            <button onClick={() => addToCart(product)}>Add to Cart</button>
        </div>
    )
}