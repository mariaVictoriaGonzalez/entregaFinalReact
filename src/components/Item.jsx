import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import './Item.css'
import { useContext } from 'react';
import { CartContext } from '../context/cartContext';

function Item({title, id, price, image, quantity }) {
const cartContext =useContext(CartContext)

    return (
        <div>
                <Card key={id} className='card' style={{ width: '18rem' }}>
                    <Card.Img variant="top" src= {image} />
                    <Card.Body>
                        <Card.Title>{title} </Card.Title>
                        <Card.Text>
                            ${price}
                        </Card.Text>
                        <div className='divBotones'>
                        <Button variant="secondary"><Link key={id} to={`/Item/${id}`} className='links'>Detail</Link></Button>
                        <Button variant="secondary" onClick={()=>{ cartContext.addToCart ([{id,price,title}]), cartContext.addCartQuantity([{id,price,title}])}} >Add to cart</Button>
                        </div>
                    </Card.Body>
                </Card>
            </div>
    );    
}

export default Item;
