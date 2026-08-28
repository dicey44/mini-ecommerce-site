import type { Product } from "./types/product";
import ProductCard from "./ProductCard";
import "./ProductGrid.css";
import { useState, useContext, useEffect } from "react";
import { translations } from "./translations"
import { LanguageContext } from "./LanguageContext"



interface ProductGridProps {
    productList: Product[];
    isLoading: boolean;
    error: null | string;
    filterProducts: (category: string, minPrice: number, maxPrice: number, method: string) => void;
}



export function ProductGrid( { productList, isLoading, error, filterProducts }: ProductGridProps ) {

    const { language } = useContext(LanguageContext);
    const tFilters = translations[language].filters;
    const tGrid = translations[language].productSection;
    const priceConfig = language === "ja"
    ? {
        min: 0,
        max: 150000,
        symbol: "¥"
    }
    : {
        min: 0,
        max: 1000,
        symbol: "$"
    };

    const [minPrice, setMinPrice] = useState(0);
    const [sliderMin, setSliderMin] = useState(0);
    const [maxPrice, setMaxPrice] = useState(priceConfig.max);
    const [sliderMax, setSliderMax] = useState(priceConfig.max);
    const [selectedCategory, setSelectedCategory] = useState("all products");
    const [sortingMethod, setSortingMethod] = useState("featured");
    

    useEffect(() => {
        const max = language === "ja" ? 150000 : 1000;

        setMinPrice(0);
        setSliderMin(0);
        setMaxPrice(max);
        setSliderMax(max);

        filterProducts("all products", 0, max, sortingMethod);
    }, [language]);
    

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
        const max = language === "ja" ? 150000 : 1000;

        setSelectedCategory("all products");
        setSortingMethod("featured");
        setMinPrice(0);
        setSliderMin(0);
        setSliderMax(max);
        setMaxPrice(max);
        filterProducts("all products", 0, max, "featured");
    }
    
    return (
        <div className="product-and-filter-container">
            <div className="filters-container">
                <div className="filters-header">
                    <h2>{tFilters.filters}</h2>
                    <button className="reset-filters" onClick={handleResetBtn}>{tFilters.reset}</button>
                </div>
                <h3 className="filters-labels">{tFilters.categories}</h3>
                <select value={selectedCategory} onChange={handleCategoryChange}>
                    <option value="all products">{tFilters.allProducts}</option>
                    <option value="men's clothing">{tFilters.mensClothing}</option>
                    <option value="women's clothing">{tFilters.womensClothing}</option>
                    <option value="jewelery">{tFilters.jewelery}</option>
                    <option value="electronics">{tFilters.electronics}</option>
                </select>
                <div className="price-filter">
                    <h3 className="filters-labels">{tFilters.priceRange}</h3>

                    <div className="price-values">
                        <span>{priceConfig.symbol}{sliderMin.toLocaleString()}</span>
                        <span>{priceConfig.symbol}{sliderMax.toLocaleString()}</span>
                    </div>

                    <div className="range-slider">
                        <input
                            className="min-range"
                            type="range"
                            min={priceConfig.min}
                            max={priceConfig.max}
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
                            min={priceConfig.min}
                            max={priceConfig.max}
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
                <h3 className="filters-labels">{tFilters.sortBy}</h3>
                <select value={sortingMethod} onChange={handleSortingMethodChange}>
                    <option value="featured">{tFilters.featured}</option>
                    <option value="price-lowest">{tFilters.priceLowest}</option>
                    <option value="price-highest">{tFilters.priceHighest}</option>
                </select>
            </div>
            <div className="product-grid-container">
                <h2>{tGrid.productListings}</h2><span>{productList.length + tGrid.products}</span>
                <p>{productList.length === 0 && isLoading === false ? tGrid.noProducts : ""}</p>
                <p>{isLoading === true && tGrid.loading}</p>
                <p>{error !== null ? tGrid.errorMsg : ""}</p>
                
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