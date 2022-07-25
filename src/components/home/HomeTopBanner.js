import React, {Component, Fragment} from 'react';
import {Card, Col, Container, Row} from "react-bootstrap";

class HomeTopBanner extends Component {
    render() {
        return (
            <Fragment>
                <Container fluid={true} className="text-center HomeTopBanner">
                    <Row>
                        <Col xl={3} lg={3} md={3} sm={6} xs={6}>
                            <Card className="card h-100  text-center w-100">
                                <img src="https://image.kilimall.com/kenya/shop/adv/96ae08c2622278c1b060427ba44f013c.jpg.webp" alt="banner"/>
                             </Card>
                          </Col>
                        <Col xl={3} lg={3} md={3} sm={6} xs={6}>
                            <Card className="card h-100  text-center w-100">
                                <img src="https://image.kilimall.com/kenya/shop/adv/0e050dfe8bde93d9a9f01f9667a7e993.jpg.webp" alt="banner"/>
                            </Card>
                        </Col>
                        <Col xl={3} lg={3} md={3} sm={6} xs={6}>
                            <Card className="card h-100  text-center w-100">
                                <img src="https://image.kilimall.com/kenya/shop/adv/bcadf29ce8b125c7b5d8024402b6ee9c.jpg.webp" alt="banner"/>
                            </Card>
                        </Col>
                        <Col xl={3} lg={3} md={3} sm={6} xs={6}>
                            <Card className="card h-100  text-center w-100">
                                <img src="https://image.kilimall.com/kenya/shop/adv/e84f8c8ed728a61486cf352fc5fa9b85.jpg.webp" alt="banner"/>
                            </Card>
                        </Col>
                    </Row>

                </Container>
            </Fragment>
        );
    }
}

export default HomeTopBanner;