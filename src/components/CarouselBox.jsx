import { render } from "@testing-library/react";
import React from "react";
import  Carousel  from "react-bootstrap/Carousel";
import CarouselItem from 'react-bootstrap/CarouselItem'
import leo from "../assets/leo.jpg";
import vernik from "../assets/vernik.jpg";
import antonio from "../assets/antonio.jpg";


class CarouselBox extends React.Component {
    render() {
        return (
            <Carousel>
            <CarouselItem>
                    <img
                        className="d-block w-100"
                        src={leo}
                        alt="leo"
                    />
                    <Carousel.Caption>
                        <h3>Leo Di Kaprio</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                    </Carousel.Caption>
                </CarouselItem>

                <CarouselItem>
                    <img
                        className="d-block w-100"
                        src={vernik}
                        alt="leo"
                    />
                    <Carousel.Caption>
                        <h3>Igor vernik</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                    </Carousel.Caption>
                </CarouselItem>

                <CarouselItem>
                    <img
                        className="d-block w-100"
                        src={antonio}
                        alt="leo"
                    />
                    <Carousel.Caption>
                        <h3>Antonio Banderas</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                    </Carousel.Caption>
                </CarouselItem>
                </Carousel>
        )
    }
}

export default CarouselBox