import React, {Component, Fragment} from 'react';
import {Col, Container, Row} from "react-bootstrap";
import MegaMenu from "./MegaMenu";
import HomeSlider from "./HomeSlider";

class HomeTopMobile extends Component {
    render() {
        return (
            <Fragment>
                <Container className="p-0 TopSection overflow-hidden" fluid={true}>
                    <Row className="p-0 m-0 overflow-hidden">

                        <Col className="p-0 m-0 overflow-hidden" xl={12} lg={12} md={12} sm={12} xs={12}>
                            <HomeSlider/>
                        </Col>
                    </Row>
                </Container>
            </Fragment>
        );
    }
}

export default HomeTopMobile;