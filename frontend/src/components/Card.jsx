import { useContext, useEffect, useState } from "react";
import { CartContext } from '../CartContext';



function Card({id, flavor, price, amount}){

    const { getItemQuantity, addToCart, decreaseFromCart, removeFromCart } = useContext(CartContext);

    const quantity = getItemQuantity(id);

    return(
        <>
        <h2>{flavor} Juice</h2>
        <p>available: {amount}</p>
        <p>price: {price}</p>

        {quantity === 0 ?(
        <div>
            <button onClick={()=>addToCart(id, flavor, price)}>add to cart</button>
        </div>

        ):(
            <>
                <button onClick={()=>addToCart(id)}>+</button>
                <span>{quantity}</span>
                <button onClick={()=>decreaseFromCart(id)}>-</button>
                <div>
                    <button onClick={()=>removeFromCart(id)}>Remove from cart</button>
                </div>
            </>
        )}
        </>
    )
}

export default Card