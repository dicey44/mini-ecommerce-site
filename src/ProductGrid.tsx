import type { Product } from "./types/product";
import ProductCard from "./ProductCard";

interface ProductGridProps {
    productList: Product[];
}

export function ProductGrid( { productList }: ProductGridProps ) {
    return productList.map((product: Product) => 
        (
            <ProductCard product={product} key={product.id}/>
        )
    )
}