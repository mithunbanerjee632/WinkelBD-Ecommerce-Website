import React, {Component, Fragment} from 'react';
import {Button, Col, Container, Row} from "react-bootstrap";
import MegaMenu from "../home/MegaMenu";
import MegaMenuMobile from "../home/MegaMenuMobile";

class NavMenuMobile extends Component {
    constructor(props) {
        super(props);
        this.state={
            SideNavState:"sideNavClose",
            ContentOverlayState:"ContentOverlayClose",
        }
    }

    MenuBarClickHandler=()=>{
        this.SideNavOpenClose();
    }

    ContentOverlayHandler=()=>{
        this.SideNavOpenClose();
    }

    SideNavOpenClose=()=>{
        let SideNavState= this.state.SideNavState;
        let ContentOverlayState= this.state.ContentOverlayState;
        if(SideNavState==="sideNavOpen"){
            this.setState({SideNavState:"sideNavClose",ContentOverlayState:"ContentOverlayClose"})
        }
        else{
            this.setState({SideNavState:"sideNavOpen",ContentOverlayState:"ContentOverlayOpen"})
        }
    }

    render() {
        return (
            <Fragment>
                <Container fluid={true} className="fixed-top shadow-sm p-2 m-0 bg-white">
                    <Row>
                        <Col className="p-1 " lg={12} md={12} sm={12} xs={12} >
                            <Button onClick={this.MenuBarClickHandler} className="btn"><i className="fa fa-bars"></i></Button>
                        </Col>
                    </Row>

                    <div className={this.state.SideNavState}>
                        <MegaMenuMobile/>
                    </div>

                    <div onClick={this.ContentOverlayHandler} className={this.state.ContentOverlayState}>

                    </div>
                </Container>
            </Fragment>
        );
    }
}

export default NavMenuMobile;