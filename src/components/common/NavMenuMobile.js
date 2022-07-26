import React, {Component, Fragment} from 'react';
import {Button, Col, Container, Navbar, Row} from "react-bootstrap";
import MegaMenu from "../home/MegaMenu";
import MegaMenuMobile from "../home/MegaMenuMobile";
import logo from "../../assets/images/logo.png";
import {Link} from "react-router-dom";
import notification from "../../assets/images/notification.svg";
import love from "../../assets/images/love.svg";
import user from "../../assets/images/user.svg";

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
                <Navbar className="navbar" fixed={"top"} bg="light">
                 <Container fluid={true} className="fixed-top shadow-sm p-2 m-0 bg-white">
                    <Row>
                        <Col className="p-1 " lg={12} md={12} sm={12} xs={12} >
                            <Button onClick={this.MenuBarClickHandler} className="btn"><i className="fa fa-bars"></i></Button>

                                {/*<Button className="cart-btn"><i className="fa fa-shopping-cart"></i>4 items</Button>*/}


                            <Link to="/cart" className="cart-btn float-right"><i className="fa fa-shopping-cart"/> 4 items </Link>
                            <Link to="/favourite" className="btn mx-1 nav-round-btn"><i className="fa fa-search"/> </Link>
                            <Link to="/notification" className="btn mx-1 nav-round-btn"><img src={notification} alt="notification"/></Link>
                            <Link to="/onboard" className=" btn-light btn"><img src={user} alt="user"/></Link>

                        </Col>
                    </Row>

                    <div className={this.state.SideNavState}>
                        <a href="" className="btn"><img className="nav-logo" src={logo} alt="logo"/></a>
                        <MegaMenuMobile/>
                    </div>

                    <div onClick={this.ContentOverlayHandler} className={this.state.ContentOverlayState}>

                    </div>
                </Container>
                </Navbar>
            </Fragment>
        );
    }
}

export default NavMenuMobile;