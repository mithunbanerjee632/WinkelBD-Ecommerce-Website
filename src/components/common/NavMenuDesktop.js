import React, {Component, Fragment} from 'react';
import {Col, Container, Navbar, Row} from "react-bootstrap";
import {Link} from "react-router-dom";
import logo from "../../assets/images/logo.png";

class NavMenuDesktop extends Component {
    render() {
        return (
            <Fragment>
                <Navbar className="navbar" fixed={"top"} bg="light">

                    <Container fluid={"true"} className="fixed-top shadow-sm p-2 m-0 bg-white">
                        <Row>
                            <Col className="p-1" lg={4} md={4} sm={12} xs={12}>
                                <Link to="/" className="btn"> <img className="nav-logo" src={logo} alt="logo"/></Link>
                                <Link to="/cart" className="cart-btn"><i className="fa fa-shopping-cart"/> 4 items </Link>
                            </Col>
                            <Col className="p-1" lg={6} md={6} sm={12} xs={12}>
                                <div className="input-group w-100">
                                    <input  name="example" list="exampleList" type="text" className="form-control" aria-label="Text input with segmented dropdown button"/>
                                    <button  type="button" className="btn  site-btn"><i className="fa fa-search"/></button>
                                </div>
                            </Col>
                            <Col className="p-1" lg={2} md={2} sm={12} xs={12}>
                                <Link to="/notification" className="btn mx-1 nav-round-btn"><img src="" alt="notification"/></Link>
                                <Link to="/onboard" className=" btn-light btn">LOGIN</Link>
                            </Col>
                        </Row>

                    </Container>
                </Navbar>
            </Fragment>
        );
    }
}

export default NavMenuDesktop;