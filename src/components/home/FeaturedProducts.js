import React, {Component, Fragment} from 'react';
import {Card, Col, Container, Row} from "react-bootstrap";

class FeaturedProducts extends Component {
    render() {
        return (
            <Fragment>
                <Container fluid={true} className="text-center BetweenTwoSection">
                    <h4 className="section-title">Featured Products</h4>
                    <p className="section-sub-title">Some of Our Exclusive Collection.You May Like</p>
                    <Row>
                        <Col className="p-1" key={1} xl={2} lg={2} md={2} sm={4} xs={6}>
                           <Card className="image-box h-100 w-100 card">
                               <img src="https://azse77seaprodsa.blob.core.windows.net/b2b-dr-pickaboocdn/media/catalog/product/cache/a4a71470c99ce7a4925275fbc94e38e5/a/m/amazfit-gts-4-mini-smart-watch-17-07-2022.jpg"/>
                               <Card.Body>
                                   <p className="product-name-on-card">Amazfit GTS 4 Mini Smart Watch Global Version</p>
                                   <p className="product-name-on-card">Price:7,999 Tk</p>
                               </Card.Body>
                           </Card>
                        </Col>

                        <Col className="p-1" key={1} xl={2} lg={2} md={2} sm={4} xs={6}>
                            <Card className="image-box h-100 w-100 card">
                                <img src="https://azse77seaprodsa.blob.core.windows.net/b2b-dr-pickaboocdn/media/catalog/product/cache/a4a71470c99ce7a4925275fbc94e38e5/a/m/amazfit-gts-4-mini-smart-watch-17-07-2022.jpg"/>
                                <Card.Body>
                                    <p className="product-name-on-card">Amazfit GTS 4 Mini Smart Watch Global Version</p>
                                    <p className="product-name-on-card">Price:7,999 Tk</p>
                                </Card.Body>
                            </Card>
                        </Col>

                        <Col className="p-1" key={1} xl={2} lg={2} md={2} sm={4} xs={6}>
                            <Card className="image-box h-100 w-100 card">
                                <img src="https://azse77seaprodsa.blob.core.windows.net/b2b-dr-pickaboocdn/media/catalog/product/cache/a4a71470c99ce7a4925275fbc94e38e5/a/m/amazfit-gts-4-mini-smart-watch-17-07-2022.jpg"/>
                                <Card.Body>
                                    <p className="product-name-on-card">Amazfit GTS 4 Mini Smart Watch Global Version</p>
                                    <p className="product-name-on-card">Price:7,999 Tk</p>
                                </Card.Body>
                            </Card>
                        </Col>

                        <Col className="p-1" key={1} xl={2} lg={2} md={2} sm={4} xs={6}>
                            <Card className="image-box h-100 w-100 card">
                                <img src="https://azse77seaprodsa.blob.core.windows.net/b2b-dr-pickaboocdn/media/catalog/product/cache/a4a71470c99ce7a4925275fbc94e38e5/a/m/amazfit-gts-4-mini-smart-watch-17-07-2022.jpg"/>
                                <Card.Body>
                                    <p className="product-name-on-card">Amazfit GTS 4 Mini Smart Watch Global Version</p>
                                    <p className="product-name-on-card">Price:7,999 Tk</p>
                                </Card.Body>
                            </Card>
                        </Col>

                        <Col className="p-1" key={1} xl={2} lg={2} md={2} sm={4} xs={6}>
                            <Card className="image-box h-100 w-100 card">
                                <img src="https://azse77seaprodsa.blob.core.windows.net/b2b-dr-pickaboocdn/media/catalog/product/cache/a4a71470c99ce7a4925275fbc94e38e5/a/m/amazfit-gts-4-mini-smart-watch-17-07-2022.jpg"/>
                                <Card.Body>
                                    <p className="product-name-on-card">Amazfit GTS 4 Mini Smart Watch Global Version</p>
                                    <p className="product-name-on-card">Price:7,999 Tk</p>
                                </Card.Body>
                            </Card>
                        </Col>

                        <Col className="p-1" key={1} xl={2} lg={2} md={2} sm={4} xs={6}>
                            <Card className="image-box h-100 w-100 card">
                                <img src="https://azse77seaprodsa.blob.core.windows.net/b2b-dr-pickaboocdn/media/catalog/product/cache/a4a71470c99ce7a4925275fbc94e38e5/a/m/amazfit-gts-4-mini-smart-watch-17-07-2022.jpg"/>
                                <Card.Body>
                                    <p className="product-name-on-card">Amazfit GTS 4 Mini Smart Watch Global Version</p>
                                    <p className="product-name-on-card">Price:7,999 Tk</p>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                </Container>
            </Fragment>
        );
    }
}

export default FeaturedProducts;