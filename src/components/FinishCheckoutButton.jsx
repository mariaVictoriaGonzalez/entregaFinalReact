import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import './Item.css';


function FinishCheckoutButton (){
    return(
        <Button><Link className='links' to={`/checkout`}>Finish Checkout</Link></Button>
    )

}

export default FinishCheckoutButton