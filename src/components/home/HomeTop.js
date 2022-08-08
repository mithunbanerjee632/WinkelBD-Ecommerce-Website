import React, {Component, Fragment} from 'react';
import {Col, Container, Row} from "react-bootstrap";
import MegaMenu from "./MegaMenu";
import HomeSlider from "./HomeSlider";
import Axios from "axios";
import AppUrl from "../../api/AppUrl";

class HomeTop extends Component {
    constructor() {
        super();
        this.state={
            MegaMenu:[]
        }
    }

    componentDidMount() {
        Axios.get(AppUrl.CategoryDetails).then(response=>{
            let jsonData = response.data;
            this.setState({MegaMenu:jsonData});
        }).catch(error=>{

        });
    }

    render() {
        return (
            <Fragment>
               <Container className="p-0 TopSection overflow-hidden" fluid={true}>
                   <Row className="p-0 m-0">
                       <Col className="p-0 m-0" lg={3} md={3} sm={12} xs={12}>
                           <MegaMenu MenuData={this.state.MegaMenu}/>
                       </Col>

                       <Col className="p-0 m-0" lg={9} md={9} sm={12} xs={12}>
                           <HomeSlider/>
                       </Col>
                   </Row>
               </Container>
            </Fragment>
        );
    }
}

export default HomeTop;