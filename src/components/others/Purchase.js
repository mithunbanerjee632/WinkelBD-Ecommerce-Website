import React, {Component, Fragment} from 'react';
import {Breadcrumb, Card, Col, Container, Row} from "react-bootstrap";
import {Link} from "react-router-dom";

class Purchase extends Component {
    render() {
        return (
            <Fragment>
                <Container className="TopSection">
                    <Breadcrumb className="shadow-sm mt-2 bg-white">
                        <Breadcrumb.Item><Link to="/">Home</Link></Breadcrumb.Item>
                        <Breadcrumb.Item><Link to="/purchase">Purchase</Link></Breadcrumb.Item>
                    </Breadcrumb>
                    <Row>
                        <Col className="mt-1" md={12} lg={12} sm={12} xs={12}>
                            <Card>
                                <Card.Body>
                                    <div className="">
                                        <div className="animated zoomIn">
                                            <p>Deshi Bazar is New Ecommerce Company in Bangladesh.We want supply authentic product to our valuable custormers.</p>
                                            <p>Deshi Bazar is New Ecommerce Company in Bangladesh.We want supply authentic product to our valuable custormers.</p>
                                            <p>Deshi Bazar is New Ecommerce Company in Bangladesh.We want supply authentic product to our valuable custormers.</p>
                                            <p>Deshi Bazar is New Ecommerce Company in Bangladesh.We want supply authentic product to our valuable custormers.</p>
                                            <p>Deshi Bazar is New Ecommerce Company in Bangladesh.We want supply authentic product to our valuable custormers.</p>
                                            <p>Deshi Bazar is New Ecommerce Company in Bangladesh.We want supply authentic product to our valuable custormers.</p>
                                            <p>Deshi Bazar is New Ecommerce Company in Bangladesh.We want supply authentic product to our valuable custormers.</p>


                                        </div>
                                    </div>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                </Container>
            </Fragment>
        );
    }
}

export default Purchase;