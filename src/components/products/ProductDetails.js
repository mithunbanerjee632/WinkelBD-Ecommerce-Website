import React, {Component, Fragment} from 'react';
import {Breadcrumb, Col, Container, Row} from "react-bootstrap";
import {Link} from "react-router-dom";

class ProductDetails extends Component {
    render() {
        return (
            <Fragment>
                <Container fluid={true}  className="TopSection  animated slideInDown">
                    <Row>
                        <Breadcrumb className="shadow-sm w-100 bg-white">
                            <Breadcrumb.Item> <Link to="/">Home</Link>    </Breadcrumb.Item>
                            <Breadcrumb.Item> <Link to="/productDetails/">Details</Link></Breadcrumb.Item>
                        </Breadcrumb>
                    </Row>
                    <Row className="p-1">
                        <Col  className=" shadow-sm  bg-white" md={12} lg={12} sm={12} xs={12}>
                            <Row >
                                <Col className="p-3" md={6} lg={6} sm={12} xs={12}>
                                    <img  className="w-100 h-25" src="images/img4.jpg" alt=""/>
                                    <Container className="my-3">
                                        <Row>
                                            <Col className="p-0 m-0"  md={3} lg={3} sm={3} xs={3}>
                                                <img  className="w-100" src="images/img4.jpg" alt=""/>
                                            </Col>
                                            <Col className="p-0 m-0" md={3} lg={3} sm={3} xs={3}>
                                                <img  className="w-100 " src="images/img5.jpg" alt=""/>
                                            </Col>
                                            <Col className="p-0 m-0" md={3} lg={3} sm={3} xs={3}>
                                                <img  className="w-100 " src="images/img6.jpg" alt=""/>
                                            </Col>
                                            <Col className="p-0  m-0" md={3} lg={3} sm={3} xs={3}>
                                                <img  className="w-100" src="images/img7.jpg" alt=""/>
                                            </Col>
                                        </Row>
                                    </Container>
                                </Col>
                                <Col className="p-3 " md={6} lg={6} sm={12} xs={12}>
                                    <h5 className="Product-Name">Vivo Y21</h5>
                                    <h6 className="section-sub-title">Lorem Ipsum is simply dummy text.  </h6>
                                     20000 Tk.

                                    <div className="">
                                        <h6 className="mt-2">Choose Color</h6>
                                        <select  className="form-control form-select">
                                            <option value="">Choose Color</option>
                                            <option>red</option>


                                        </select>
                                    </div>

                                    <div className="">
                                        <h6 className="mt-2">Choose Size</h6>
                                        <select className="form-control form-select">
                                            <option value="">Choose Size</option>
                                             <option>S</option>
                                             <option>M</option>

                                        </select>
                                    </div>
                                    <div className="">
                                        <h6 className="mt-2">Choose Quantity</h6>
                                        <select  className="form-control form-select">
                                            <option value="">Choose Quantity</option>
                                            <option value="01">01</option>

                                        </select>
                                    </div>
                                    <div className="input-group mt-3">
                                        <button  className="btn site-btn m-1 "> <i className="fa fa-shopping-cart"/>Add to Cart</button>
                                        <button  className="btn btn-primary m-1"> <i className="fa fa-car"/>Order Now</button>
                                        <button  className="btn btn-primary m-1"> <i className="fa fa-heart"/> Add to Wishlist</button>
                                    </div>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                    <Row>
                        <Col className="p-1" md={6} lg={6} sm={12} xs={12}>
                            <div className="shadow-sm p-3 bg-white">
                                <h6 className="mt-2">DETAILS</h6>
                                   <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum</p>
                            </div>
                        </Col>
                        <Col className="p-1" md={6} lg={6} sm={12} xs={12}>
                            <div className="shadow-sm p-3 bg-white">
                                <h5>Mithun Banerjee</h5>
                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has </p>

                                <h5>Mithun Banerjee</h5>
                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has </p>

                                <h5>Mithun Banerjee</h5>
                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has </p>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </Fragment>
        );
    }
}

export default ProductDetails;