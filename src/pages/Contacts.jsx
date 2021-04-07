import { render } from "@testing-library/react";
import React from "react";
import { Container, Form,Button } from "react-bootstrap";

class Contacts extends React.Component {
    render() {
        return (
            <Container>
                <h1 className="text-center">Contact Us</h1>
                <div className="Email_box">
                <Form className="Email">
                    <Form.Group controlId="formBasicEmail" >
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="input" placeholder="Enter ypur email"></Form.Control>
                        <Form.Text>
                            We'll never share your email with anyone else
                        </Form.Text>
                    </Form.Group>

                    <Form.Group controlId="formBasicPassword">
                            <Form.Label>Example textarea</Form.Label>
                            <Form.Control as="textarea" rows="3"/> 
                    </Form.Group>

                    <Form.Group controlId="formBasicCheckbox">
                            <Form.Check type="checkbox" label="Check me out"/> 
                    </Form.Group>
                    <Button variant="primary" type="submit">Submit</Button>
                </Form>
                </div>
            </Container>
        )
    }
}

export default Contacts