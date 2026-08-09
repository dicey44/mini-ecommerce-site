import './App.css';
import type { Product, CartProps } from './types/product';
import { ProductGrid } from './ProductGrid';
import { useState } from 'react';
import Cart from './Cart';


function App() {
  let testArr = ["red", "pink", "blue"];

  let filteredArr = testArr.filter(item => item === "red");

  console.log(filteredArr)

  const [cart, setCart] = useState<CartProps[] | []>([]);

  const productList: Product[] = [
    {
      name: "Simple Tee",
      price: 15,
      image_url: "https://www.nuuds.com/cdn/shop/files/W-1019-WHIT-S_On-Model_Front-Crop_Kenna.jpg?v=1768499909&width=1024",
      id: 1
    },
    {
      name: "Laptop Backpack",
      price: 40,
      image_url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSjbIUEScaDNkTsIes0bBoFHRiO1J_3SAyP-A&s",
      id: 2
    },
    {
      name: "Large Suitcase",
      price: 150,
      image_url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS4GaqaZv4XRQGzN8WcS2lmDwn_zZtZQIvpZw&s",
      id: 3
    },
    {
      name: "Straight Jeans",
      price: 50,
      image_url: "https://dam.dynamiteclothing.com/asset/e18e363d-6164-47d0-ae0a-054f9b060272/100090530_07I_1920x2880.jpg?sw=500&sh=750",
      id: 4
    },
    {
      name: "Chino Shorts",
      price: 30,
      image_url: "https://lscoglobal.scene7.com/is/image/lscoglobal/MB_17202-0004_GLO_CM_DA?fmt=jpeg&qlt=70&resMode=sharp2&fit=crop,1&op_usm=0.6,0.6,8&wid=2000&hei=2500",
      id: 5
    },
    {
      name: "Belt",
      price: 15,
      image_url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRF7UchiEY1OwxPE14YbZkBWF0mIJRMA1EMxQ&s",
      id: 6
    },
    {
      name: "Standing Desk",
      price: 1000,
      image_url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSctYUCGBmJO7WiLVbJj6oNJ64bBhnau_D9pQ&s",
      id: 7
    }
  ]

  function addToCart(product: Product) {
    const newCartObj = {
      product: product,
      quantity: 1,
    }

    if ((cart.filter(item => item.product.id === newCartObj.product.id)).length === 1) {
      const newCart: CartProps[] = cart
      .map(i => {

        if (i.product.id === newCartObj.product.id) {
          return {
            product: i.product,
            quantity: i.quantity + 1,
          }
        } 

        return i;
      })

      return setCart(newCart);
    }
    
    setCart(prevCart => [...prevCart, newCartObj]);

  }

  function removeFromCart(product: Product) {
    
  }

  return (
    <div>
      <h1>MiMart</h1>
      <ProductGrid productList={productList} addToCart= {addToCart}/>
      <Cart cart={cart} removeFromCart={removeFromCart} />
    </div>
  )
}

export default App
