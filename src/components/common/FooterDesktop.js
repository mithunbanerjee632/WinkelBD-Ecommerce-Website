import React, {Component, Fragment} from 'react';
import {Col, Container, Row} from "react-bootstrap";
import {Link} from "react-router-dom";
import apple from  "../../assets/images/appstore.png";
import android from  "../../assets/images/playstore.png";
class FooterDesktop extends Component {
    render() {
        return (
            <Fragment>
                <div className="card footer">
                    <Container fluid={true}>
                        <Row className="px-0 my-5">
                            <Col xl={3} lg={3} md={3} sm={6} xs={12}>
                                <h5 className="footer-menu-title">About</h5>
                                <p>WinkelBD is a New Ecommerce Company in Bangladesh.We want supply authentic product to our valuable custormers.</p>
                                 <h5 className="footer-menu-title">SOCIAL LINK</h5>
                                <a target="_blank" href=""><i className="fab m-1 h4 fa-facebook"/></a>
                                <a target="_blank" href=""><i className="fab m-1 h4 fa-instagram"/></a>
                                <a target="_blank" href=""><i className="fab m-1 h4 fa-twitter"/></a>

                            </Col>

                            <Col xl={3} lg={3} md={3} sm={6} xs={12}>
                                <h5 className="footer-menu-title">THE COMPANY</h5>
                                <Link to="/about" className="footer-link">About Us</Link><br/>
                                <Link to="/contact" className="footer-link">Contact Us</Link><br/>
                                <h5 className="footer-menu-title mt-3">OFFICE ADDRESS</h5>
                                {/*<p>{ ReactHtmlParser(this.state.address) }</p>*/}
                                <p>West Dholairpar,Shyampur,Dhaka-1204.      Help Line: 01713574869, deshibazar@gmail.com</p>
                                <p></p>
                            </Col>

                            <Col xl={3} lg={3} md={3} sm={6} xs={12}>
                                <h5 className="footer-menu-title">MORE INFO</h5>
                                <Link to="/purchase" className="footer-link">How To Purchase</Link><br/>
                                <Link to="/policy" className="footer-link">Privacy Policy</Link><br/>
                                <Link  to="/refund" className="footer-link">Refund Policy</Link><br/>
                            </Col>



                            <Col xl={3} lg={3} md={3} sm={6} xs={12}>
                                <h5 className="footer-menu-title">DOWNLOAD APP</h5>
                                <a target="_blank" href=""><img className="mt-2" src={android} alt="android logo"/></a>
                                <a target="_blank" href=""><img className="" src={apple} alt="ios logo"/></a><br/>
                            </Col>
                            <div id="google_translate_element"></div>
                        </Row>
                    </Container>

                    <Container fluid={true} className=" m-0 pt-3 pb-1 bg-dark">
                        <Container className="">
                            <Row className="px-0 text-white">
                                {/*<p>{ ReactHtmlParser(this.state.deliveryNotice) }</p>*/}
                                <p className="text-center">Copyright &copy; 2022 winkelbd.com</p>
                            </Row>
                        </Container>
                    </Container>
                </div>
            </Fragment>
        );
    }
}

export default FooterDesktop;