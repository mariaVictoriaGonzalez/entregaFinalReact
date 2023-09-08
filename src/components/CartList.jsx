import React from 'react';
import ListGroup from 'react-bootstrap/ListGroup';
import { CartContext } from '../context/cartContext';
import { useContext } from 'react';
import { Alert, Button } from 'react-bootstrap';
import "./CartList.css"

function CartList() {
    const cartContext = useContext(CartContext);
    const cartList = cartContext.cartList;

    const total = cartContext.calculateTotal(cartList);

    const handleDeleteItem = (product) => {
        cartContext.deleteItem(cartList, product);
    };

    return (
        <>
            {cartList.length? cartList.map((product) => (
                <div key={product.id} className='divCartList' >
                <ListGroup horizontal  className="my-2">
                    <ListGroup.Item className='listName' > {product.title} </ListGroup.Item>
                    <ListGroup.Item> ${product.price} </ListGroup.Item>
                    <ListGroup.Item>
                        <Button onClick={() => handleDeleteItem(product)}>
                            Eliminar Item
                        </Button>
                    </ListGroup.Item>
                </ListGroup>

                </div>
            )): <Alert variant='danger'>
                There're no products in your cart!
            </Alert>
        }
        <div className='divPrice'>
        <ListGroup horizontal className="my-2"  >
                <ListGroup.Item> Total price: </ListGroup.Item>
                <ListGroup.Item> ${total.toFixed(2)} </ListGroup.Item>
            </ListGroup>
        </div>
        </>
    );
}

export default CartList;
