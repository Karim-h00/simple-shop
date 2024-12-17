import { createContext, useState } from "react";

export const CartContext = createContext({

    },
)

export function CartContextProvider(props){

    const [cartItems, setCartItems] = useState([])

    function getItemQuantity(id){
        return cartItems.find(item => item.id === id)?.quantity || 0
      } 
    
      function addToCart(id, flavor, price) {
        setCartItems(currentItems => {
          const existingItem = currentItems.find(item => item.id === id);
          return existingItem
            ? [...currentItems.filter(item => item.id !== id), { ...existingItem, quantity: existingItem.quantity + 1 }]
            : [...currentItems, { id, flavor, price, quantity: 1 }]
        })
      }
    
      function decreaseFromCart(id) {
        setCartItems(currentItems => {
          const item = currentItems.find(item => item.id === id);
          return item
            ? [...currentItems.filter(item => item.id !== id), { ...item, quantity: Math.max(item.quantity - 1, 0) }]
            : currentItems;
        })
      }
      
      function removeFromCart(id){
        setCartItems(currentItems =>{
          return currentItems.filter(item => item.id !== id)
        })
    
      }

      return(
        <CartContext.Provider value={{
            cartItems,
            getItemQuantity,
            addToCart,
            decreaseFromCart,
            removeFromCart,
            }}>
                {props.children}
        </ CartContext.Provider>
      )
}