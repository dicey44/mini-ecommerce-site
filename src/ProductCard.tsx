import type { Product } from "./types/product"
import "./ProductCard.css"
import { useCart } from "./CartContext";


interface ProductCardProps {
    product: Product;
}

export default function ProductCard( { product }: ProductCardProps ) {

    const { addToCart } = useCart();

    return (
        <div className="product-card">
            <img src={product.image_url} className="product-card-img"/>
            <div className="product-card-content">
                <p className="product-card-name">{product.name}</p>
                <p className="product-card-price">{`$${product.price.toFixed(2)}`}</p>
            </div>
            <button onClick={() => addToCart(product)}>Add to Cart</button>
        </div>
    )
}