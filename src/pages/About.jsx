import React from "react";
import { render } from "@testing-library/react";
import {Container, Nav,Row,Col,Tab} from "react-bootstrap";
import Contacts from "./Contacts";

class About extends React.Component {
    constructor(props) {
        super(props);
        };
    
    render() {
        return (
            <Container>
                <Tab.Container id="ledt-tabs-example" defaultActiveKey="first">  {/* Сделали 3 вклдаки слева*/}
                    <Row>
                        <Col sm={3}>
                            <Nav variant="pills" className="flex-column mt-2">
                                <Nav.Item>
                                    <Nav.Link eventKey="first">Design</Nav.Link>
                                </Nav.Item>

                                <Nav.Item>
                                    <Nav.Link eventKey="second">Team</Nav.Link>
                                </Nav.Item>

                                <Nav.Item>
                                    <Nav.Link eventKey="third">Programming</Nav.Link>
                                </Nav.Item>
                            </Nav>
                        </Col>

                        <Col sm={9}>
                            <Tab.Content className="mt-3">
                                <Tab.Pane eventKey="first">{/* Содержимое вкладок*/}
                                    <img 
                                    src="https://papertiger.com/assets/figma-dark/images/screen.jpg"
                                    className="w-100"
                                    />
                                    <p className="mt-4">
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sit eum excepturi quis quia pariatur perferendis repellat neque facilis delectus velit, molestias soluta autem! Assumenda adipisci quaerat, odit saepe deserunt vitae.
                                    </p>
                                </Tab.Pane>

                                <Tab.Pane eventKey="second">
                                    <img 
                                    src="https://dvlog.ru/education_for_school/images/1cprog.jpg"
                                    className="w-100"
                                    />
                                    <p className="mt-4">
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sit eum excepturi quis quia pariatur perferendis repellat neque facilis delectus velit, molestias soluta autem! Assumenda adipisci quaerat, odit saepe deserunt vitae.
                                    </p>
                                </Tab.Pane>

                                <Tab.Pane eventKey="third">
                                    <img 
                                    src="https://avatars.mds.yandex.net/get-zen_doc/965902/pub_5da429a69c944600b18e6dca_5da481288600e100ae813572/scale_1200"
                                    className="w-100"
                                    />
                                    <p className="mt-4">
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sit eum excepturi quis quia pariatur perferendis repellat neque facilis delectus velit, molestias soluta autem! Assumenda adipisci quaerat, odit saepe deserunt vitae.
                                    </p>
                                </Tab.Pane>

                            </Tab.Content>
                        </Col>
                    </Row>
                </Tab.Container>
            </Container>
        )
    }
}

export default About