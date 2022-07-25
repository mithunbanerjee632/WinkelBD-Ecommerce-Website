import React, {Component} from 'react';
import {Fragment} from "react";
import {Card, Col, Container, Form, Row} from "react-bootstrap";

class UserOnboard extends Component {
    render() {
        return (
            <Fragment>
                <Container className="TopSection animated slideInDown">
                    <Row className="d-flex p-1 justify-content-center">
                        <Col className="shadow-sm bg-white mt-2" md={8} lg={8} sm={12} xs={12}>
                            <Row className="text-center ">
                                <Col className="d-flex justify-content-center" md={6} lg={6} sm={12} xs={12}>
                                    <div className="onboardForm">
                                        <h4 className="section-title">USER SIGN IN</h4>
                                        <h6 className="section-sub-title">Please Enter Your Mobile Number</h6>
                                        <input  className="form-control m-2" type="text" placeholder="Mobile Number"/>
                                        <button  className="btn w-100 m-2 site-btn">Log In</button>
                                    </div>
                                </Col>
                                <Col className="p-0 Desktop m-0" md={6} lg={6} sm={6} xs={6}>
                                    <img className="onboardBanner" src="/Images/tech3.jpg" alt="login banner"/>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                </Container>
            </Fragment>
        );
    }
}

export default UserOnboard;