import type { Product } from "./types/product";
import ProductCard from "./ProductCard";
import "./ProductGrid.css";
import { useState } from "react";



interface ProductGridProps {
    productList: Product[];
    isLoading: boolean;
    error: null | string;
    filterProducts: (category: string, minPrice: number, maxPrice: number) => void;
}

export function ProductGrid( { productList, isLoading, error, filterProducts }: ProductGridProps ) {

    const [minPrice, setMinPrice] = useState(0);
    const [sliderMin, setSliderMin] = useState(0);
    const [maxPrice, setMaxPrice] = useState(1000);
    const [sliderMax, setSliderMax] = useState(1000);
    const [selectedCategory, setSelectedCategory] = useState("all products");

    function handleCategoryChange(event: React.ChangeEvent<HTMLSelectElement>) {
        const category = event.target.value.toLowerCase();
        setSelectedCategory(category);
        filterProducts(category, minPrice, maxPrice);
    }
    
    return (
        <div className="product-and-filter-container">
            <div className="filters-container">
                <div className="filters-header">
                    <h2>Filters</h2>
                    <button className="reset-filters">Reset</button>
                </div>
                <h3 className="filters-labels">Categories</h3>
                <select value={selectedCategory} onChange={handleCategoryChange}>
                    <option value="all products">All Products</option>
                    <option value="men's clothing">Men's Clothing</option>
                    <option value="women's clothing">Women's Clothing</option>
                    <option value="jewelery">Jewelery</option>
                    <option value="electronics">Electronics</option>
                </select>
                <div className="price-filter">
                    <h3 className="filters-labels">Price Range</h3>

                    <div className="price-values">
                        <span>${sliderMin}</span>
                        <span>${sliderMax}</span>
                    </div>

                    <div className="range-slider">
                        <input
                            className="min-range"
                            type="range"
                            min="0"
                            max="1000"
                            value={sliderMin}
                            onMouseUp={() => {                               
                                    setMinPrice(sliderMin);
                                    filterProducts(selectedCategory, sliderMin, maxPrice);
                            }}
                            onChange={(e) => {
                                const value = Number(e.target.value);

                                if (value <= maxPrice) {
                                    setSliderMin(value);
                                    
                                }
                            }}
                        />

                        <input
                            className="max-range"
                            type="range"
                            min="0"
                            max="1000"
                            value={sliderMax}
                            onChange={(e) => {
                                const value = Number(e.target.value);

                                if (value >= minPrice) {
                                    setSliderMax(value)
                                }
                            }}
                            onMouseUp={() => {
                                setMaxPrice(sliderMax);
                                filterProducts(selectedCategory, minPrice, sliderMax);
                            }}
                        />
                    </div>
                </div>
                <h3 className="filters-labels">Sort By</h3>
                <select>
                    <option>Featured</option>
                    <option>Price: lowest to highest</option>
                    <option>Price: highest to lowest</option>
                </select>
            </div>
            <div className="product-grid-container">
                <h2>Product Listings</h2><span>{productList.length} Products</span>
                <p>{productList.length === 0 && isLoading === false ? "No items found": ""}</p>
                <p>{isLoading === true && "Loading items..."}</p>
                <p>{error !== null ? error : ""}</p>
                
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