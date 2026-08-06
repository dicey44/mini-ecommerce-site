import type { Product } from "./types/product"
import "./ProductCard.css"

interface ProductCardProps {
    product: Product;
    addToCart: (product: Product) => void;
}

export default function ProductCard( { product, addToCart }: ProductCardProps ) {
    return (
        <div>
            <img src={product.image_url} className="product-card-img"/>
            <p>{product.name}</p>
            <p>{`$${product.price}`}</p>
            <button onClick={() => addToCart(product)}>Add to Cart</button>
        </div>
    )
}