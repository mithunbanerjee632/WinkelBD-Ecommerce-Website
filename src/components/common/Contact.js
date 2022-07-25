import React, {Component, Fragment} from 'react';
import {Breadcrumb, Button, Col, Container, Form, Row} from "react-bootstrap";
import {Link} from "react-router-dom";

class Contact extends Component {
    render() {
        return (
            <Fragment>
                <Container>
                    <Row>
                        <Breadcrumb className="shadow-sm TopSection w-100 bg-white">
                            <Breadcrumb.Item> <Link to="/">Home</Link> </Breadcrumb.Item>
                            <Breadcrumb.Item> <Link to="/contact">Contact</Link> </Breadcrumb.Item>
                        </Breadcrumb>
                        <Col className="shadow-sm mt-1 animated slideInDown bg-white " md={12} lg={12} sm={12} xs={12}>
                            <Row className="text-center">
                                <Col className="d-flex justify-content-center" md={6} lg={6} sm={12} xs={12}>
                                    <Form id="contactForm"  className="onboardForm">
                                        <h4 className="section-title">CONTACT WITH US</h4>
                                        <h6 className="section-sub-title">Please Enter Your Mobile No, And Go Next</h6>
                                        <input  className="form-control m-2" type="text" placeholder="Your Name"/>
                                        <input  className="form-control m-2" type="text" placeholder="Mobile Number"/>
                                        <textarea  className="form-control m-2" type="text" placeholder="Message"/>
                                        <Button id="sendBtn" type="submit" className="btn w-100 m-2 site-btn">Send</Button>
                                    </Form>
                                </Col>
                                <Col className="p-0 Desktop m-0" md={6} lg={6} sm={6} xs={6}>
                                    <iframe
                                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1663.0146924111457!2d90.4339106713758!3d23.69939880174579!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755b9ff52a9fb3d%3A0x55ee9ecc7ee93e50!2sSouth%20Point%20School%20%26%20College%2C%20Shampur%20Campus%2C%20Dhaka!5e0!3m2!1sen!2sbd!4v1658761174201!5m2!1sen!2sbd"
                                        width="600" height="450" allowFullScreen="" loading="lazy"
                                        referrerPolicy="no-referrer-when-downgrade"></iframe>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                </Container>
            </Fragment>
        );
    }
}

export default Contact;