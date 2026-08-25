import type { Product } from "./types/product";
import ProductCard from "./ProductCard";
import "./ProductGrid.css";



interface ProductGridProps {
    productList: Product[];
}

export function ProductGrid( { productList }: ProductGridProps ) {

    return <div className="product-grid-container">
        <h2>Product Listings</h2>
        {productList.length === 0 && (<p>No Items Found</p>)}
        <div className="product-grid-items">
            {productList.map((product: Product) => 
            (
                <ProductCard product={product} key={product.id}/>
            )
            )}
        </div>
        
    </div>
}