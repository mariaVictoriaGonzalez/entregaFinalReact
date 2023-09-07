import ListGroup from 'react-bootstrap/ListGroup';
import { CartContext } from '../context/cartContext';
import { useContext } from 'react';
import { Button } from 'react-bootstrap';

function CartList() {
    const cartContex =useContext(CartContext)
    const cartList = cartContex.cartList

    return (
        <>
            {cartList.map((product) => (
                <ListGroup horizontal key={product.id} className="my-2">
                    <ListGroup.Item> {product.title} </ListGroup.Item>
                    <ListGroup.Item> {product.price} </ListGroup.Item>
                    <ListGroup.Item>on </ListGroup.Item>
                    <ListGroup.Item> <Button>Eliminar Item</Button> </ListGroup.Item>
                </ListGroup>
            ))}
        </>
    );
}

export default CartList;