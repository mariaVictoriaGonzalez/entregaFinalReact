import React, { useContext } from 'react'
import { LuShoppingCart } from "react-icons/lu";
import { CartContext } from '../context/cartContext';
import { Link } from 'react-router-dom';

export const CartWidget = ()=> {
    const cartContext =useContext(CartContext)
    
    return(
        <>
        <Link to={"/cart"}><LuShoppingCart/></Link>
        <span>{cartContext.cartQuantity}</span>
        </>
    )
}