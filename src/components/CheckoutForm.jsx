import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';

function CheckoutForm() {
    return (
        <Form>
            <Row className="mb-3">
                <Form.Group as={Col} controlId="formGridName">
                    <Form.Label>Name</Form.Label>
                    <Form.Control type="name" placeholder="Enter name" />
                </Form.Group>

                <Form.Group as={Col} controlId="formGridLastname">
                    <Form.Label>Lastname</Form.Label>
                    <Form.Control type="lastname" placeholder="Enter lastname" />
                </Form.Group>
            </Row>

            <Form.Group className="mb-3" controlId="formGridEmail">
                <Form.Label>Email</Form.Label>
                <Form.Control placeholder="Enter E-mail" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formGridPhone">
                <Form.Label>Phone</Form.Label>
                <Form.Control placeholder="Enter phone number" />
            </Form.Group>

            <Button variant="primary" type="submit">
                Submit
            </Button>
        </Form>
    );
}

export default CheckoutForm;