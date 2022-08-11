import React, {Component, Fragment} from 'react';
import NavMenuDesktop from "../components/common/NavMenuDesktop";
import NavMenuMobile from "../components/common/NavMenuMobile";
import PageTop from "../components/common/PageTop";
import About from "../components/others/About";
import FooterDesktop from "../components/common/FooterDesktop";
import FooterMobile from "../components/common/FooterMobile";
import ProductBySubcategory from "../components/products/ProductBySubcategory";
import {useParams} from "react-router-dom";

function withParams(Component){
    return props=><Component {...props} params={useParams()}/>
}

class ProductBySubcategoryPage extends Component {

    componentDidMount() {
        window.scroll(0,0);
    }

    render() {
        const {category} = this.props.params;
        const {subcategory} = this.props.params;
        return (
            <Fragment>
                <div className="Desktop">
                    <NavMenuDesktop/>

                </div>

                <div className="Mobile">
                    <NavMenuMobile/>

                </div>
                <PageTop pagetitle={subcategory} activepage={subcategory}/>

                <ProductBySubcategory catName={category} subCatName={subcategory}/>

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

export default withParams(ProductBySubcategoryPage);