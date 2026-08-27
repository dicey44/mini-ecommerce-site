import './App.css';
import type { Product } from './types/product';
import { ProductGrid } from './ProductGrid';
import Cart from './Cart';
import Navbar from './Navbar';
import HomeBanner from './HomeBanner';
import { useEffect, useState } from 'react';
import { getProducts } from './services/productService';
import Footer from './Footer';


function App() {

  const [productList, setProductList] = useState<Product[]>([]);
  const [filteredProductList, setFilteredProductList] = useState<Product[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  

  useEffect(
    () => {
      async function loadProducts() {
        try {
          const products = await getProducts();
          setProductList(products);
          setFilteredProductList(products);
        } catch (error) {
          setError("Failed to load products.");
        } finally {
          setIsLoading(false);
        }
      }

      loadProducts()
    }, []);

  function searchProduct(input: string) {
    const trimmedInput = input.trim().toLowerCase();
    const newList = productList.filter(product => product.name.toLowerCase().includes(trimmedInput));
    setFilteredProductList(newList);
  }

  function filterProducts(category: string, minPrice: number, maxPrice: number, method: string) {

    let filtered = productList.filter(product => {
      const matchesCategory = category === "all products" || product.category === category
      const matchesPrice = product.price >= minPrice && product.price <= maxPrice

      return matchesCategory && matchesPrice;
    })

    if (method !== "featured") {
      
      sortProducts(method);

      function sortProducts(method: string) {
        if (method === "price-lowest") {
            filtered = filtered.sort((a, b) => a.price - b.price)
        }

        if (method === "price-highest") {
            filtered = filtered.sort((a, b) => b.price - a.price)
        }
      }
    }

    setFilteredProductList(filtered);
  }

  

  return (
    <div>
      <Navbar searchProduct={searchProduct}/>
      <HomeBanner />
      <ProductGrid productList={filteredProductList} isLoading={isLoading} error={error} filterProducts = {filterProducts}/>
      <Cart />
      <Footer />
    </div>
  )
}

export default App
