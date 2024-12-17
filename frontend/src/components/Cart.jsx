import { Fragment, useContext, useEffect, useState } from "react"
import { CartContext } from "../CartContext";
import CartObject from "./CartObject";

function Cart() {
    const { cartItems } = useContext(CartContext);


  const [sortedCartItems, setSortedCartItems] = useState([]);

  useEffect(() => {
    const sortedItems = [...cartItems].sort((a, b) => a.id - b.id);
    setSortedCartItems(sortedItems);
  }, [cartItems]);

    // function totalPrice(){
    //     let total = 0
    //     cartItems.forEach((element) => {
    //         total += (element.price*element.quantity)
    //     });
    //     return total
    // }


    const reducedTotal = () => cartItems.reduce((acc, value)=>acc+=value.price*value.quantity, 0)


    return (
        <>
            <h1>Cart</h1>


            {sortedCartItems.map((v) => {
                return (
                    <Fragment key={v.id}>
                        <div>
                            <CartObject {...v} key={v.id}/>
                        </div>
                    </Fragment>
                )
            })}

            <div>
                <h4>total price: {reducedTotal()}</h4>
            </div>
        </>
    )
}

export default Cart