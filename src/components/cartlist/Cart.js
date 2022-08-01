import React, {Component, Fragment} from 'react';
import {Breadcrumb, Button, Card, Col, Container, Row} from "react-bootstrap";
import {Link} from "react-router-dom";

class Cart extends Component {
    render() {
        return (
            <Fragment>
                <Container className="TopSection text-center shadow-sm bg-white pb-5">

                    <Row  className="p-2">
                        <Col className="p-1" key={1} xl={3} lg={3} md={3} sm={3} xs={6}>
                            <Card className="cart-card w-100 image-box">
                                <img src="images/img4.jpg " alt="product Image"/>

                                <Card.Body>
                                    <h5 className="product-name-on-card p-0 m-0" >Vivo 21s Mobile</h5>
                                    <p className="product-price-on-card p-0 m-0"></p>
                                </Card.Body>
                                <div className="input-group m-0 p-0 w-100">
                                    <Button className="btn text-danger btn-light w-50"><i className="fa fa-trash-alt"></i>Remove</Button>
                                    <input placeholder="5" className="form-control text-center w-50" type="number"/>
                                </div>
                            </Card>
                        </Col>

                        <Col className="p-1" key={1} xl={3} lg={3} md={3} sm={3} xs={6}>
                            <Card className="cart-card w-100 image-box">
                                <img src="images/img4.jpg " alt="product Image"/>

                                <Card.Body>
                                    <h5 className="product-name-on-card p-0 m-0" >Vivo 21s Mobile</h5>
                                    <p className="product-price-on-card p-0 m-0"></p>
                                </Card.Body>
                                <div className="input-group m-0 p-0 w-100">
                                    <Button className="btn text-danger btn-light w-50"><i className="fa fa-trash-alt"></i>Remove</Button>
                                    <input placeholder="5" className="form-control text-center w-50" type="number"/>
                                </div>
                            </Card>
                        </Col>

                        <Col className="p-1" key={1} xl={3} lg={3} md={3} sm={3} xs={6}>
                            <Card className="cart-card w-100 image-box">
                                <img src="images/img4.jpg " alt="product Image"/>

                                <Card.Body>
                                    <h5 className="product-name-on-card p-0 m-0" >Vivo 21s Mobile</h5>
                                    <p className="product-price-on-card p-0 m-0"></p>
                                </Card.Body>
                                <div className="input-group m-0 p-0 w-100">
                                    <Button className="btn text-danger btn-light w-50"><i className="fa fa-trash-alt"></i>Remove</Button>
                                    <input placeholder="5" className="form-control text-center w-50" type="number"/>
                                </div>
                            </Card>
                        </Col>

                        <Col className="p-1" key={1} xl={3} lg={3} md={3} sm={3} xs={6}>
                            <Card className="cart-card w-100 image-box">
                                <img src="images/img4.jpg " alt="product Image"/>

                                <Card.Body>
                                    <h5 className="product-name-on-card p-0 m-0" >Vivo 21s Mobile</h5>
                                    <p className="product-price-on-card p-0 m-0"></p>
                                </Card.Body>
                                <div className="input-group m-0 p-0 w-100">
                                    <Button className="btn text-danger btn-light w-50"><i className="fa fa-trash-alt"></i>Remove</Button>
                                    <input placeholder="5" className="form-control text-center w-50" type="number"/>
                                </div>
                            </Card>
                        </Col>

                        <Col className="p-1" key={1} xl={3} lg={3} md={3} sm={3} xs={6}>
                            <Card className="cart-card w-100 image-box">
                                <img src="images/img4.jpg " alt="product Image"/>

                                <Card.Body>
                                    <h5 className="product-name-on-card p-0 m-0" >Vivo 21s Mobile</h5>
                                    <p className="product-price-on-card p-0 m-0"></p>
                                </Card.Body>
                                <div className="input-group m-0 p-0 w-100">
                                    <Button className="btn text-danger btn-light w-50"><i className="fa fa-trash-alt"></i>Remove</Button>
                                    <input placeholder="5" className="form-control text-center w-50" type="number"/>
                                </div>
                            </Card>
                        </Col>
                    </Row>
                    <hr/>

                    <Row className="p-2 bg-light text-center BetweenTwoSection d-flex justify-content-center">
                        <Col className="p-1" key={1} xl={3} lg={3} md={3} sm={3} xs={6}>
                            <h5 className="">PRODUCT CART LIST</h5>
                            <h6 className="m-8 p-8">Total Price :5000 Tk | Total Item:04</h6>
                            <button className="btn site-btn m-1"><i className="fa fa-shopping-cart"></i>Checkout</button>
                        </Col>
                    </Row>
                </Container>
            </Fragment>
        );
    }
}

export default Cart;