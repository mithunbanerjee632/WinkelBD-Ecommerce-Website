import React, {Component, Fragment} from 'react';
import {Col, Container, Row} from "react-bootstrap";
import NavMenuDesktop from "../components/common/NavMenuDesktop";
import HomeTop from "../components/home/HomeTop";
import NavMenuMobile from "../components/common/NavMenuMobile";
import HomeTopMobile from "../components/home/HomeTopMobile";
import FooterDesktop from "../components/common/FooterDesktop";
import FooterMobile from "../components/common/FooterMobile";
import UserOnboard from "../components/common/UserOnboard";

class UserOnboardPage extends Component {
    componentDidMount() {
        window.scroll(0,0);
    }
    render() {

        return (
            <Fragment>
                <div className="Desktop">
                    <NavMenuDesktop/>

                </div>

                <div className="Mobile">
                    <NavMenuMobile/>

                </div>

                <UserOnboard/>

                <div className="Desktop">
                    <FooterDesktop/>

                </div>
                <div className="Mobile">
                    <FooterMobile/>

                </div>

            </Fragment>
        );
    }
}

export default UserOnboardPage;