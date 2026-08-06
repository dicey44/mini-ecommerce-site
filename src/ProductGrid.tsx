import type { Product } from "./types/product";
import ProductCard from "./ProductCard";

interface ProductGridProps {
    productList: Product[];
    addToCart: (product: Product) => void;
}

export function ProductGrid( { productList, addToCart }: ProductGridProps ) {
    return productList.map((product: Product) => 
        (
            <ProductCard product={product} key={product.id} addToCart={addToCart}/>
        )
    )
}