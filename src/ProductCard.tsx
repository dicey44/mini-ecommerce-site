import type { Product } from "./types/product"
import "./ProductCard.css"

interface ProductCardProps {
    product: Product;
}

export default function ProductCard( { product }: ProductCardProps ) {
    return (
        <div>
            <img src={product.image_url} className="product-card-img"/>
            <p>{product.name}</p>
            <p>{`$${product.price}`}</p>
        </div>
    )
}