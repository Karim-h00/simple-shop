import { useContext } from "react";
import { CartContext } from "../CartContext";

function Header(){

    const {cartItems} = useContext(CartContext);

    // function totalQuantity(){
    //     let total = 0
    //     cartItems.forEach((element) => {
    //         total += (element.price*element.quantity)
    //     });
    //     return total
    // }

    function reducedTQuan(){
        const total = cartItems.reduce((acc, value, index)=>{
            return(
                acc+=value.quantity
            )
        }, 0)
        return total
    }

    return(
        <>
        <div>
            <h1>welcome to JuiceShop!</h1>
            <p>no. of items in cart: {cartItems.length}</p>
        </div>
        </>
    )
}

export default Header