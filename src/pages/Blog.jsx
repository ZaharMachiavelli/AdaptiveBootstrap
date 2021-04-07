import { render } from "@testing-library/react";
import React from "react";
import { Container, Media,Row,Col, ListGroup, Card} from "react-bootstrap";

class Blog extends React.Component {
    render() {
        return (
            <Container >
                <Row>
                <Col md="9">
                    <Media className="mt-4">
                        <img
                        width={150}
                        height = {150}
                        className="mr-3"
                        src="https://toparticle.org/ContentSystemMediaApi/img/f3545d0a-6bec-4d31-a11c-7754eb383d2a"
                        />
                        <Media.Body>
                            <h5>Blog Post</h5>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit molestiae iusto non obcaecati id natus assumenda eligendi unde nobis, perferendis quasi placeat, illo, et laudantium laborum eum veritatis quidem rerum!</p>

                        </Media.Body>
                        
                    </Media>

                    <Media className="mt-4">
                        <img
                        width={150}
                        height = {150}
                        className="mr-3"
                        src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Python-logo-notext.svg/1200px-Python-logo-notext.svg.png"
                        />
                        <Media.Body>
                            <h5>Blog Post</h5>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit molestiae iusto non obcaecati id natus assumenda eligendi unde nobis, perferendis quasi placeat, illo, et laudantium laborum eum veritatis quidem rerum!</p>

                        </Media.Body>
                        
                    </Media>

                    <Media className="mt-4">
                        <img
                        width={150}
                        height = {150}
                        className="mr-3"
                        src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/57/Devicon-ruby-plain-wordmark.svg/1200px-Devicon-ruby-plain-wordmark.svg.png"
                        />
                        <Media.Body>
                            <h5>Blog Post</h5>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit molestiae iusto non obcaecati id natus assumenda eligendi unde nobis, perferendis quasi placeat, illo, et laudantium laborum eum veritatis quidem rerum!</p>

                        </Media.Body>
                        
                    </Media>
                </Col>
                <Col md="3" className="mt-4">
                    <h5>Categories</h5>
                    <Card>
                       <ListGroup variant="flush">
                           <ListGroup.Item>Html/Css</ListGroup.Item>
                           <ListGroup.Item>JavaScript</ListGroup.Item>
                           <ListGroup.Item>Python</ListGroup.Item>
                           <ListGroup.Item>Ruby</ListGroup.Item>
                        </ListGroup> 
                    </Card>

                    <Card className="mt-3" bg="light">
                        <Card.Body>
                            <Card.Title>Side widget</Card.Title>
                            <Card.Text>
                                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quibusdam porro aliquam sint, dolores hic velit quae consequuntur quidem, iste vero aut nemo, quas culpa libero at maiores voluptatum quo sapiente.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                </Row>
            </Container>
        )
    }
}

export default Blog