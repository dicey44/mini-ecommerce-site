import type { Product } from "./types/product"
import "./ProductCard.css"
import { useCart } from "./CartContext";
import { useContext } from "react";
import { LanguageContext } from "./LanguageContext";
import { productTranslations } from "./translations";


interface ProductCardProps {
    product: Product;
}

export default function ProductCard( { product }: ProductCardProps ) {

    const { addToCart } = useCart();

    const { language } = useContext(LanguageContext);

    const displayName = language === "ja" ? productTranslations[product.id].name : product.name;
    const displayPrice = language === "ja" ? "¥" + productTranslations[product.id].price : "$" + product.price.toFixed(2);

    return (
        <div className="product-card">
            <img src={product.image_url} className="product-card-img"/>
            <div className="product-card-content">
                <p className="product-card-name">{displayName}</p>
                <p className="product-card-price">{displayPrice}</p>
            </div>
            <button onClick={() => addToCart(product)}>Add to Cart</button>
        </div>
    )
}