import React from 'react';
import ListGroup from 'react-bootstrap/ListGroup';
import { CartContext } from '../context/cartContext';
import { useContext } from 'react';
import { Alert, Button } from 'react-bootstrap';
import "./CartList.css"

function CartList() {
    const cartContext = useContext(CartContext);
    const cartList = cartContext.cartList;

    const groupProducts = (cartItems) => {
        const grouped = {};
        cartItems.forEach((product) => {
            if (!grouped[product.id]) {
                grouped[product.id] = { ...product, quantity: 1 };
            } else {
                grouped[product.id].quantity += 1;
            }
        });
        return Object.values(grouped);
    };

    const groupedCartList = groupProducts(cartList);

    const total = groupedCartList.reduce((accumulator, product) => {
        return accumulator + product.price * product.quantity;
    }, 0);

    const handleDeleteItem = (product) => {
        cartContext.deleteItem(cartList, product);
    };

    return (
        <>
            {groupedCartList.length ? groupedCartList.map((product) => (
                <div key={product.id} className='divCartList'>
                    <ListGroup horizontal className="my-2">
                        <ListGroup.Item className='listName'> {product.title} (Quantity: {product.quantity})</ListGroup.Item>
                        <ListGroup.Item> ${product.price} </ListGroup.Item>
                        <ListGroup.Item>
                            <Button onClick={() => handleDeleteItem(product)}>
                                Delete item
                            </Button>
                        </ListGroup.Item>
                    </ListGroup>
                </div>
            )) : <Alert variant='danger'>
                There're no products in your cart!
            </Alert>}
            <div className='divPrice'>
                <ListGroup horizontal className="my-2">
                    <ListGroup.Item> Total price: </ListGroup.Item>
                    <ListGroup.Item> ${total.toFixed(2)} </ListGroup.Item>
                </ListGroup>
            </div>
        </>
    );
}

export default CartList;


