import type { Product } from "./types/product";
import ProductCard from "./ProductCard";
import "./ProductGrid.css";
import { useState } from "react";



interface ProductGridProps {
    productList: Product[];
    isLoading: boolean;
    error: null | string;
    filterProducts: (category: string, minPrice: number, maxPrice: number, method: string) => void;
}

export function ProductGrid( { productList, isLoading, error, filterProducts }: ProductGridProps ) {

    const [minPrice, setMinPrice] = useState(0);
    const [sliderMin, setSliderMin] = useState(0);
    const [maxPrice, setMaxPrice] = useState(1000);
    const [sliderMax, setSliderMax] = useState(1000);
    const [selectedCategory, setSelectedCategory] = useState("all products");
    const [sortingMethod, setSortingMethod] = useState("featured");

    function handleCategoryChange(event: React.ChangeEvent<HTMLSelectElement>) {
        const category = event.target.value.toLowerCase();
        setSelectedCategory(category);
        filterProducts(category, minPrice, maxPrice, sortingMethod);
    }

    function handleSortingMethodChange(event: React.ChangeEvent<HTMLSelectElement>) {
        const method = event.target.value.toLowerCase();
        setSortingMethod(method);
        filterProducts(selectedCategory, minPrice, maxPrice, method);
    }

    function handleResetBtn() {
        setSelectedCategory("all products");
        setSortingMethod("featured");
        setMinPrice(0);
        setSliderMin(0);
        setSliderMax(1000);
        setMaxPrice(1000);
        filterProducts("all products", 0, 1000, "featured");
    }
    
    return (
        <div className="product-and-filter-container">
            <div className="filters-container">
                <div className="filters-header">
                    <h2>Filters</h2>
                    <button className="reset-filters" onClick={handleResetBtn}>Reset</button>
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
                            onPointerUp={() => {                               
                                    setMinPrice(sliderMin);
                                    filterProducts(selectedCategory, sliderMin, maxPrice, sortingMethod);
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
                            onPointerUp={() => {
                                setMaxPrice(sliderMax);
                                filterProducts(selectedCategory, minPrice, sliderMax, sortingMethod);
                            }}
                        />
                    </div>
                </div>
                <h3 className="filters-labels">Sort By</h3>
                <select value={sortingMethod} onChange={handleSortingMethodChange}>
                    <option value="featured">Featured</option>
                    <option value="price-lowest">Price: lowest to highest</option>
                    <option value="price-highest">Price: highest to lowest</option>
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