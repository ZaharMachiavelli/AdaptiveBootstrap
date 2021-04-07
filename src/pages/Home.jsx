import { render } from "@testing-library/react";
import React from "react";
import { Card, CardDeck, Container, Button } from "react-bootstrap";
import CarouselBox from '../components/CarouselBox.jsx'

class Home extends React.Component {
    render() {
        return (
            <>
            <CarouselBox/>
            <Container>
                <h2 className="text-center m-4">Our team</h2>
                <CardDeck className="mt-4">
                    <Card border="primary">
                        <Card.Img
                        variant="top"
                        src="https://i08.fotocdn.net/s124/76676de09fb85048/public_pin_m/2836169370.jpg"
                        />
                        <Card.Body>
                            <Card.Title>Developers</Card.Title>
                            <Card.Text>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni obcaecati quas incidunt
                            </Card.Text>
                            <Button variant="primary">About Team</Button>
                        </Card.Body>
                    </Card>

                    <Card border="primary">
                        <Card.Img
                        variant="top"
                        src="https://i.pinimg.com/originals/e2/4c/66/e24c66708d37f6bb8855032223ef4bd1.png"
                        />
                        <Card.Body>
                            <Card.Title>Developers</Card.Title>
                            <Card.Text>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni obcaecati quas incidunt
                            </Card.Text>
                            <Button variant="primary">About Team</Button>
                        </Card.Body>
                    </Card>

                    <Card border="primary">
                        <Card.Img
                        variant="top"
                        src="https://d2halst20r4hcy.cloudfront.net/507/f9c35/656e/4714/90d9/a2c720e4d27b/normal/29349.jpg"
                        />
                        <Card.Body>
                            <Card.Title>Developers</Card.Title>
                            <Card.Text>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni obcaecati quas incidunt
                            </Card.Text>
                            <Button variant="primary">About Team</Button>
                        </Card.Body>
                    </Card>
                </CardDeck>
            </Container>
            </>
        )
    }
}
export default Home