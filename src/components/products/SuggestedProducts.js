import React, {Component, Fragment} from 'react';
import {Card, Col, Container, Row} from "react-bootstrap";
import {Link} from "react-router-dom";

class SuggestedProducts extends Component {
    render() {
        return (
            <Fragment>
                <Container fluid={true} className="text-center BetweenTwoSection">
                    <h4 className="section-title">YOU MAY LIKE</h4>
                    <h6 className="section-sub-title">Some Of Our Exclusive Collection, You May Like</h6>
                    <Row>
                        <Col className="p-1" key={1} xl={2} lg={2} md={2} sm={4} xs={6} >
                            <Link to="/productDetails/">
                                <Card className="card h-100 w-100  image-box ">
                                    <img src="images/img7.jpg" alt=""/>
                                    <Card.Body>
                                        <h5 className="product-name-on-card">Vivo Y22s</h5>
                                        <p className="product-price-on-card">
                                            Price: <strike class="text-secondary">25000TK</strike>  23500TK
                                        </p>
                                    </Card.Body>
                                </Card>
                            </Link>
                        </Col>
                    </Row>
                </Container>

            </Fragment>
        );
    }
}

export default SuggestedProducts;