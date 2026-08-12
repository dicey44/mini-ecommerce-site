import { createContext, useContext } from "react";
import type { Product, CartItem } from "./types/product";
import type { ReactNode } from "react";
import { useState } from "react";


interface CartContextType {
    cart: CartItem[];
    removeFromCart: (product: Product) => void;
    addToCart: (product: Product) => void;
}

interface CartProviderProps {
    children: ReactNode;
}


export const CartContext = createContext<CartContextType | undefined>(undefined);

export function useCart() {
    const context = useContext(CartContext);

    if (!context) {
        throw new Error("useCart must be used inside CartProvider");

    }

    return context;
}


export function CartProvider({children}: CartProviderProps) {
    const [cart, setCart] = useState<CartItem[]>([]);

    function addToCart(product: Product) {

        const newCartObj = {
        product: product,
        quantity: 1,
        }

        

        setCart(prevCart => {
        if ((prevCart.some(item => item.product.id === newCartObj.product.id))) {
            return prevCart.map(i => {

            if (i.product.id === newCartObj.product.id) {
            
            return {
                product: i.product,
                quantity: i.quantity + 1,
            }
            } 
            return i;
            })
        }
        
        return [...prevCart, newCartObj];
        })

  }

  function removeFromCart(product: Product) {

      return setCart(prevCart => prevCart
      .map(i => {
        
        
        if (i.product.id === product.id) {

          return {
            product: i.product,
            quantity: i.quantity - 1,
          }
        } 
      
        return i;
      }).filter(i => i.quantity > 0));

  }



  return (
    <CartContext.Provider value={{
        cart,
        addToCart: addToCart,
        removeFromCart: removeFromCart
    }} >{children}</CartContext.Provider>
  )
}