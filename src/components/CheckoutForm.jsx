import React, { useContext, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import { CartContext } from '../context/cartContext';
import { Alert } from 'react-bootstrap';
import "./CheckoutForm.css"

function CheckoutForm() {
    const cartContext = useContext(CartContext);
    const cartList = cartContext.cartList;
    const orderId = cartContext.orderId

    const [name, setName] = useState('');
    const [lastname, setLastname] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');

    const handleClickSendInfo = (event) => {
        event.preventDefault()
        cartContext.purchaseCart(cartContext.cartList, { name, lastname, phone, email });
    }
    

    return (
        
        <>
        {cartList.length?
        <Form className='divForm'>
            <Row className="mb-3">
                <Form.Group as={Col} controlId="formGridName">
                    <Form.Label>Name</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="Enter name"
                        onChange={(event) => setName(event.target.value)}
                        value={name}
                    />
                </Form.Group>

                <Form.Group as={Col} controlId="formGridLastname">
                    <Form.Label>Lastname</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="Enter lastname"
                        onChange={(event) => setLastname(event.target.value)}
                        value={lastname}
                    />
                </Form.Group>
            </Row>

            <Form.Group className="mb-3" controlId="formGridEmail">
                <Form.Label>Email</Form.Label>
                <Form.Control
                    type="email"
                    placeholder="Enter E-mail"
                    onChange={(event) => setEmail(event.target.value)}
                    value={email}
                />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formGridPhone">
                <Form.Label>Phone</Form.Label>
                <Form.Control
                    type="tel"
                    placeholder="Enter phone number"
                    onChange={(event) => setPhone(event.target.value)}
                    value={phone}
                />
            </Form.Group>

            <Button onClick={handleClickSendInfo} variant="primary" type="button">
                Submit
            </Button>
        </Form>
        : <Alert variant='success'>Thank you for your purchase, the order Id is: {orderId} </Alert>
        }

        </>
    );
}

export default CheckoutForm;
