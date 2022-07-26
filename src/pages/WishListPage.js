import React, {Component, Fragment} from 'react';
import NavMenuDesktop from "../components/common/NavMenuDesktop";
import NavMenuMobile from "../components/common/NavMenuMobile";
import FooterDesktop from "../components/common/FooterDesktop";
import FooterMobile from "../components/common/FooterMobile";
import WishList from "../components/wishlist/WishList";

class WishListPage extends Component {
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

                <WishList/>

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

export default WishListPage;