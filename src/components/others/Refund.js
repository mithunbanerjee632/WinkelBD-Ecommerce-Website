import React, {Component, Fragment} from 'react';
import { Col, Container, Row} from "react-bootstrap";
import Loading from "../loader/Loading";
import WentWrong from "../wentwrong/WentWrong";
import Axios from "axios";
import AppUrl from "../../api/AppUrl";
import ReactHtmlParser from "react-html-parser";

class Refund extends Component {
    render() {
        return (
            <Fragment>
                <Container className="TopSection bg-white">
                    <Row>
                        <Col className="mt-1" md={12} lg={12} sm={12} xs={12}>
                                    <div className="">
                                        <div className="animated zoomIn">
                                            <p>Deshi Bazar is New Ecommerce Company in Bangladesh.We want supply authentic product to our valuable custormers.</p>
                                            <p>Deshi Bazar is New Ecommerce Company in Bangladesh.We want supply authentic product to our valuable custormers.</p>
                                            <p>Deshi Bazar is New Ecommerce Company in Bangladesh.We want supply authentic product to our valuable custormers.</p>
                                            <p>Deshi Bazar is New Ecommerce Company in Bangladesh.We want supply authentic product to our valuable custormers.</p>
                                            <p>Deshi Bazar is New Ecommerce Company in Bangladesh.We want supply authentic product to our valuable custormers.</p>
                                            <p>Deshi Bazar is New Ecommerce Company in Bangladesh.We want supply authentic product to our valuable custormers.</p>
                                            <p>Deshi Bazar is New Ecommerce Company in Bangladesh.We want supply authentic product to our valuable custormers.</p>
                                        </div>
                                    </div>

                        </Col>
                    </Row>
                </Container>
            </Fragment>
        );
    }
}

export default Refund;