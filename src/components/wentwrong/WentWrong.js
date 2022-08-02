import React, {Component, Fragment} from 'react';
import {Col, Container, Row} from "react-bootstrap";
import WentWrong from "../../assets/images/wentWrong.png";

class WentWrong extends Component {
    render() {
        return (
            <Fragment>
               <Container>
                   <Row>
                       <Col>
                           <img className="loadingAnimation" src={WentWrong}/>
                       </Col>
                   </Row>
               </Container>
            </Fragment>
        );
    }
}

export default WentWrong;