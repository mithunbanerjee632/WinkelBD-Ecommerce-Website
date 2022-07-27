import React, {Component, Fragment} from 'react';
import {Card, Col, Container, Row} from "react-bootstrap";

class FeaturedTopBanner extends Component {
    render() {
        return (
            <Fragment>
                <Container fluid={true}  className="m-0 p-0 overflow-hidden w-100">
                    <Row>
                        <Col xl={12} lg={12} md={12} sm={12} xs={12}>
                            <Card className="card h-100 w-100">
                                <img src="images/mobile-ac-updated.jpg"/>
                            </Card>
                        </Col>
                    </Row>
                </Container>
            </Fragment>
        );
    }
}

export default FeaturedTopBanner;