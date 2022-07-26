import React, {Component, Fragment} from 'react';
import FeaturedProducts from "../components/home/FeaturedProducts";
import Categories from "../components/home/Categories";
import Collection from "../components/home/Collection";
import NewArrival from "../components/home/NewArrival";
import HomeTop from "../components/home/HomeTop";
import NavMenuDesktop from "../components/common/NavMenuDesktop";
import NavMenuMobile from "../components/common/NavMenuMobile";
import HomeTopMobile from "../components/home/HomeTopMobile";
import FooterDesktop from "../components/common/FooterDesktop";
import FooterMobile from "../components/common/FooterMobile";
import HomeTopBanner from "../components/home/HomeTopBanner";
import HomeTopBannerMobile from "../components/home/HomeTopBannerMobile";
import FeaturedTopBanner from "../components/home/FeaturedTopBanner";
import CollectionTopBanner from "../components/home/CollectionTopBanner";
import CategoriesTopBanner from "../components/home/CategoriesTopBanner";

class HomePage extends Component {
    componentDidMount() {
        window.scroll(0,0);
    }
    render() {
        return (
            <Fragment>

                <div className="Desktop">
                    <NavMenuDesktop/>
                    <HomeTop/>
                </div>

                <div className="Mobile">
                    <NavMenuMobile/>
                    <HomeTopMobile/>
                </div>

                <HomeTopBanner/>

                {/*<div className="Desktop">*/}
                {/*    <HomeTopBanner/>*/}

                {/*</div>*/}

                {/*<div className="Mobile">*/}
                {/*    <HomeTopBannerMobile/>*/}

                {/*</div>*/}


                 <NewArrival/>
                 <FeaturedTopBanner/>
                 <FeaturedProducts/>
                 <CollectionTopBanner/>
                 <Collection/>
                 <CategoriesTopBanner/>
                 <Categories/>

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

export default HomePage;