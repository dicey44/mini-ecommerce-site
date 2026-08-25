import type { Product } from "./types/product";
import ProductCard from "./ProductCard";
import "./ProductGrid.css";
import { useState } from "react";



interface ProductGridProps {
    productList: Product[];
}

export function ProductGrid( { productList }: ProductGridProps ) {

    const [minPrice, setMinPrice] = useState(0);
    const [maxPrice, setMaxPrice] = useState(2000);
    
    return (
        <div className="product-and-filter-container">
            <div className="filters-container">
                <div className="filters-header">
                    <h2>Filters</h2>
                    <button className="reset-filters">Reset</button>
                </div>
                <label>Categories</label>
                <select>
                    <option>All Products</option>
                    <option>Clothing</option>
                    <option>Bags</option>
                    <option>Accessories</option>
                    <option>Home</option>
                    <option>Electronics</option>
                </select>
                <div className="price-filter">
                    <label>Price Range</label>

                    <div className="price-values">
                        <span>${minPrice}</span>
                        <span>${maxPrice}</span>
                    </div>

                    <div className="range-slider">
                        <input
                            className="min-range"
                            type="range"
                            min="0"
                            max="2000"
                            value={minPrice}
                            onChange={(e) => setMinPrice(Number(e.target.value))}
                        />

                        <input
                            className="max-range"
                            type="range"
                            min="0"
                            max="2000"
                            value={maxPrice}
                            onChange={(e) => setMaxPrice(Number(e.target.value))}
                        />
                    </div>
                </div>
                <label>Sort By</label>
                <select>
                    <option>Featured</option>
                    <option>Price: lowest to highest</option>
                    <option>Price: highest to lowest</option>
                </select>
            </div>
            <div className="product-grid-container">
                <h2>Product Listings</h2><span>{productList.length} Products</span>
                {productList.length === 0 && (<p>No Items Found</p>)}
                <div className="product-grid-items">
                    {productList.map((product: Product) => 
                    (
                        <ProductCard product={product} key={product.id}/>
                    )
                    )}
                </div>
            </div>
        </div>
    )
}