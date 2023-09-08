import { useParams } from "react-router-dom";
import React, { useContext, useEffect, useState } from "react";
import Card from "react-bootstrap/Card";
import "./ItemDetailContainer.css";
import { doc, getDoc, getFirestore } from "firebase/firestore";
import { Button } from "react-bootstrap";
import { CartContext } from "../context/cartContext";

function ItemDetailContainer() {
    const params = useParams();
    const [isLoading, setIsLoading] = useState(true);
    const [productDetail, setProductDetail] = useState({});
    const [counter, setCounter] = useState(1);

    useEffect(() => {
        setIsLoading(true);
        const db = getFirestore();
        const productChosen = doc(db, "data", params.id);

        getDoc(productChosen)
            .then((snapshot) => {
                if (snapshot.exists()) {
                    setProductDetail({ id: params.id, ...snapshot.data() });
                } else {
                    console.log("Product not found.");
                }
            })
            .catch((error) => console.log(error))
            .finally(() => setIsLoading(false));
    }, [params.id]);

    const cartContext = useContext(CartContext);
    const cartList = cartContext.cartList;

    const handleDecrement = () => {
        if (counter > 1) {
            setCounter(counter - 1);
        }
    };

    const handleIncrement = () => {
        setCounter(counter + 1);
        addToCart();
        cartContext.addCartQuantity();
    };

    const addToCart = () => {
        const itemToAdd = {
            id: productDetail.id,
            title: productDetail.title,
            price: productDetail.price,
            quantity: counter,
        };
        cartList.push(itemToAdd);
        for (let i = 0; i < counter; i++) {
            cartContext.addToCart(itemToAdd);
        }            
    };

    return (
        <>
            <div className="contenedorCard">
                <Card key={productDetail.id}>
                    <Card.Img variant="top" src={productDetail.image} />
                    <Card.Body>
                        <Card.Text>{productDetail.title}</Card.Text>
                        <Card.Text>{productDetail.description}</Card.Text>
                        <Card.Text>${productDetail.price}</Card.Text>
                        <div className="counter">
                            <Button
                                className="btn btn-primary"
                                onClick={handleDecrement}
                                disabled={counter === 1}
                            >
                                -
                            </Button>
                            <span>{counter}</span>
                            <Button className="btn btn-primary" onClick={handleIncrement}>
                                +
                            </Button>
                        </div>
                        <Button className="btn btn-success" onClick={addToCart}>
                            Add to cart
                        </Button>
                    </Card.Body>
                </Card>
            </div>
        </>
    );
}

export default ItemDetailContainer;