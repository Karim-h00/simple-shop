import { memo, useContext } from "react"
import { CartContext } from "../CartContext";

function CartObject({id, flavor, quantity, price}){

    const { removeFromCart, addToCart, decreaseFromCart } = useContext(CartContext)

    return(
        <>
        <h3>flavor: {flavor}</h3>
        <button onClick={()=>addToCart(id)}>+</button>
        <span>{quantity}</span>
        <button onClick={()=>decreaseFromCart(id)}>-</button>
        <p>cost: {quantity*price}</p>

        <div>
            <button onClick={()=>removeFromCart(id)}>Remove from cart</button>
        </div>
        </>
    )

    
}

export default memo(CartObject)