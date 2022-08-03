import React, {Component, Fragment} from 'react';
import NavMenuDesktop from "../components/common/NavMenuDesktop";
import NavMenuMobile from "../components/common/NavMenuMobile";
import Contact from "../components/common/Contact";
import FooterDesktop from "../components/common/FooterDesktop";
import FooterMobile from "../components/common/FooterMobile";
import Purchase from "../components/others/Purchase";
import PageTop from "../components/common/PageTop";

class PurchasePage extends Component {
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
                <PageTop pagetitle="HOW TO PURCHASE" activepage="How to Purchase"/>
                <Purchase/>

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

export default PurchasePage;