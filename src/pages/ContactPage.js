import React, {Component, Fragment} from 'react';
import NavMenuDesktop from "../components/common/NavMenuDesktop";
import NavMenuMobile from "../components/common/NavMenuMobile";
import FooterDesktop from "../components/common/FooterDesktop";
import FooterMobile from "../components/common/FooterMobile";
import Contact from "../components/common/Contact";
import Axios from "axios";
import AppUrl from "../api/AppUrl";
import PageTop from "../components/common/PageTop";


class ContactPage extends Component {
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
                <PageTop pagetitle="CONTACT WITH US" activepage="Contact With Us"/>
                <Contact/>

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

export default ContactPage;