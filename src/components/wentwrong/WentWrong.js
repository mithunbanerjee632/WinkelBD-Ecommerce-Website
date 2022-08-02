import React, {Component, Fragment} from 'react';
import {Col, Container, Row} from "react-bootstrap";
import wentWrong from "../../assets/images/wentWrong.png";

class WentWrong extends Component {
    render() {
        return (
            <Fragment>
               <Container className="text-center">
                   <Row>
                       <Col>
                           <img className="loadingAnimation" src={wentWrong}/>
                       </Col>
                   </Row>
               </Container>
            </Fragment>
        );
    }
}

export default WentWrong;