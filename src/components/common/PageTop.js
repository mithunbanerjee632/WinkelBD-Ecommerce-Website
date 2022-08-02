import React, {Component, Fragment} from 'react';
import {Col, Container, Row} from "react-bootstrap";
import {Link} from "react-router-dom";

class PageTop extends Component {
    render() {
        return (
            <Fragment>
                <Container fluid={true} className="topFixedPage p-0">
                    <div className="topPageOverlay">
                        <Container className="topPageContent">
                            <Row>
                                <Col className="text-center" md={12} lg={12} sm={12} xs={12}>
                                    <h4 className="pageTitle">{this.props.pagetitle}</h4>
                                    <nav className="bradcaump-inner">
                                        <Link className="breadcrumb-item" to="/">Home</Link>
                                        <span className="brd-separetor">/</span>
                                        <span className="breadcrumb-item ">{this.props.activepage}</span>
                                    </nav>
                                </Col>
                            </Row>
                        </Container>

                    </div>
                </Container>
            </Fragment>
        );
    }
}

export default PageTop;