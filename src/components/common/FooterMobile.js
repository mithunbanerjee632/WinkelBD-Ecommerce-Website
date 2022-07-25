import React, {Component, Fragment} from 'react';
import {Col, Container, Row} from "react-bootstrap";

class FooterMobile extends Component {
    render() {
        return (
            <Fragment>
                <div className="m-0 footer pt-4 shadow-sm">
                    <Container>
                        <Row>
                            <Col xs={12} sm={12} xm={12}>
                                <h5 className="footer-menu-title">OFFICE ADDRESS</h5>
                                <p>West Dholairpar,Shyampur,Dhaka-1204.      Help Line: 01713574869, deshibazar@gmail.com</p>

                                <h5 className="footer-menu-title">SOCIAL LINK</h5>
                                <a target="_blank" href=""><i className="fab h4 fa-facebook"/> </a>
                                <a target="_blank" href=""><i className="fab mx-1 h4 fa-instagram"/> </a>
                                <a target="_blank" href=""><i className="fab  h4 fa-twitter"/></a>
                            </Col>
                        </Row>
                    </Container>
                    <Container fluid={true} className=" m-0 pt-3 pb-1 bg-dark">
                        <Container className="">
                            <Row className="px-0 text-white">
                                {/*<p>{ ReactHtmlParser(this.state.deliveryNotice) }</p>*/}
                                <p className="text-center">Copyright &copy; 2022 deshibazar.com</p>
                            </Row>
                        </Container>
                    </Container>
                </div>
            </Fragment>
        );
    }
}

export default FooterMobile;