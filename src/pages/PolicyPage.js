import React, {Component, Fragment} from 'react';
import NavMenuDesktop from "../components/common/NavMenuDesktop";
import NavMenuMobile from "../components/common/NavMenuMobile";
import Contact from "../components/common/Contact";
import FooterDesktop from "../components/common/FooterDesktop";
import FooterMobile from "../components/common/FooterMobile";
import Policy from "../components/others/Policy";
import PageTop from "../components/common/PageTop";

class PolicyPage extends Component {
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
                <PageTop pagetitle="PRIVACY POLICY" activepage="Privacy Policy"/>
                <Policy/>

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

export default PolicyPage;