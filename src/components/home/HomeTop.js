import React, {Component, Fragment} from 'react';
import {Col, Container, Row} from "react-bootstrap";
import MegaMenu from "./MegaMenu";
import SliderHome from "./SliderHome";

class HomeTop extends Component {
    render() {
        return (
            <Fragment>
               <Container className="p-0 m-0 overflow-hidden" fluid={true}>
                   <Row>
                       <Col lg={3} md={3} sm={12} xs={12}>
                           <MegaMenu/>
                       </Col>

                       <Col lg={9} md={9} sm={12} xs={12}>
                           <SliderHome/>
                       </Col>
                   </Row>
               </Container>
            </Fragment>
        );
    }
}

export default HomeTop;