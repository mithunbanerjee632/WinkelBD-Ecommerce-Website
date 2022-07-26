import React, {Component, Fragment} from 'react';
import {Breadcrumb, Col, Container, Modal, Row} from "react-bootstrap";
import {Link} from "react-router-dom";

class Notification extends Component {
    constructor() {
        super();
        this.state={
            NotificationModal:false,
        }
    }

    handleClose=()=>{
        this.setState({NotificationModal:false});
    }

    handleShow=()=>{
        this.setState({NotificationModal:true})
    }


    render() {
        return (
            <Fragment>
                <Container  className= "TopSection">
                    <Row  className="d-flex justify-content-center">
                        <Col  md={10} lg={10} sm={12} xs={12}>
                            <Container>

                            </Container>
                        </Col>
                    </Row>
                </Container>

                <Container className=" TopSection">


                    <Row  className="d-flex justify-content-center">
                        <Col  md={10} lg={10}  sm={12} xs={12}>
                            <Breadcrumb className="shadow-sm mt-2 bg-white">
                                <Breadcrumb.Item><Link to="/">Home</Link></Breadcrumb.Item>
                                <Breadcrumb.Item><Link to="/notification">Notification</Link></Breadcrumb.Item>
                            </Breadcrumb>
                            <Container className="mt-1">
                                <Row onClick={this.handleShow} className="shadow-sm animated slideInDown bg-white p-4">
                                    <h6 className="notification-title"> <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p></h6>
                                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a gal</p>
                                </Row>
                            </Container>
                        </Col>
                    </Row>
                </Container>

                <Modal show={this.state.NotificationModal} onHide={this.handleClose}>
                    <Modal.Header closeButton>
                        <h6> <i className="fa theme-text fa-bell"/> Date: 26/7/2022</h6>
                    </Modal.Header>
                    <Modal.Body>
                        <h6 className="notification-title">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</h6>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, bu</p>
                    </Modal.Body>
                    <Modal.Footer>
                        <button className="btn site-btn" onClick={this.handleClose}>
                            Close
                        </button>
                    </Modal.Footer>
                </Modal>
            </Fragment>
        );
    }
}

export default Notification;