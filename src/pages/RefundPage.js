import React, {Component, Fragment} from 'react';
import NavMenuDesktop from "../components/common/NavMenuDesktop";
import NavMenuMobile from "../components/common/NavMenuMobile";
import Contact from "../components/common/Contact";
import FooterDesktop from "../components/common/FooterDesktop";
import FooterMobile from "../components/common/FooterMobile";
import Refund from "../components/others/Refund";
import PageTop from "../components/common/PageTop";

class RefundPage extends Component {
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
                <PageTop pagetitle="RETURN & REPLACEMENT POLICY" activepage="Return & Replacement Policy"/>
                <Refund/>

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

export default RefundPage;