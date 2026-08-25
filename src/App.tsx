import './App.css';
import type { Product } from './types/product';
import { ProductGrid } from './ProductGrid';
import Cart from './Cart';
import Navbar from './Navbar';
import HomeBanner from './HomeBanner';
import { useEffect, useState } from 'react';
import { getProducts } from './services/productService';


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

  function filterProducts(filter: string | number) {
    
    if (typeof filter === "string") {
      if (filter === "all products") {
      return setFilteredProductList(productList);
      }

      return setFilteredProductList(productList.filter(product => product.category === filter ));
    }
    
    else if (typeof filter === "number") {
      
    }

  }

  return (
    <div>
      <Navbar searchProduct={searchProduct}/>
      <HomeBanner />
      <ProductGrid productList={filteredProductList} isLoading={isLoading} error={error} filterProducts = {filterProducts}/>
      <Cart />
    </div>
  )
}

export default App
