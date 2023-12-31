import { createContext, useState } from "react";
import { collection, addDoc } from "firebase/firestore";
import { firestore } from "../firebase/client";


export const CartContext = createContext([])

function CartContextProvider({ children }) {
    const [cartList, setCartList] = useState([])
    const [cartQuantity, setCartQuantity] = useState(0)
    const [orderId, setOrderId] = useState("")

    const addToCart = (product) => {
        setCartList([...cartList, ...product])
    }

    const addToCartDetail = (product) => {
        setCartList([...cartList, product])
    }


    const addCartQuantity = (cartQuantity) => {
        setCartQuantity(cartList.length + 1)
    }

    const clearCart = () => {
        setCartList([])
        setCartQuantity(0)
    }

    const deleteItem = (cartList, product) => {
        const index = cartList.findIndex(product => product.id === product.id)
        if (index !== -1) {
            const newArray = cartList.slice()
            newArray.splice(index, 1)
            setCartList(newArray)
            setCartQuantity(cartQuantity-1)
        }
    }

    const calculateTotal = (cartList) => {
        const totalPrice = cartList.reduce((total, product) => total + product.price, 0)

        return totalPrice
    }

    const purchaseCart = async (cartList, buyer) => {
        const order = {
            buyer: {
                name: buyer.name,
                lastname: buyer.lastname,
                email: buyer.email,
                phone: buyer.phone,
            },
            items: cartList,
            totalPrice: calculateTotal(cartList),
        };        
            const docRef = await addDoc(collection(firestore, "orders"), order);
            setOrderId(docRef.id);
            clearCart();
    }

    return (
        <CartContext.Provider
            value={{
                cartQuantity: cartQuantity,
                cartList: cartList,
                addToCart: addToCart,
                addCartQuantity: addCartQuantity,
                clearCart: clearCart,
                deleteItem: deleteItem,
                calculateTotal: calculateTotal,
                purchaseCart: purchaseCart,
                orderId:orderId,
                addToCartDetail:addToCartDetail
            }}
        >
            {children}
        </CartContext.Provider>

    )
}

export default CartContextProvider