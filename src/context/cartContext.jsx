import { createContext, useState } from "react";


export const CartContext = createContext([])

function CartContextProvider({ children }) {
    const [cartList, setCartList] = useState([])
    const [cartQuantity, setCartQuantity] = useState(0)

    const addToCart = (product, cartQuantity) => {
        setCartQuantity(cartList.length+1),
        setCartList([...cartList, ...product])
    }

    const clearCart = ()=> {
        setCartList([])
    }


    return (
        <CartContext.Provider
        value={{
            cartQuantity: cartQuantity,
            cartList: cartList,
            addToCart: addToCart,
            clearCart,
        }}
        >
            {children}
        </CartContext.Provider>

    )
}

export default CartContextProvider