import { useContext } from "react";
import { Button } from "react-bootstrap";
import { CartContext } from "../context/cartContext";

function ClearButton (){
const cartContext = useContext(CartContext)

    return(
        <Button onClick={()=>{ cartContext.clearCart()}} >Clear Cart</Button>
    )

}

export default ClearButton