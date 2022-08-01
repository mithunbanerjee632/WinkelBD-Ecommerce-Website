import React, {Component, Fragment} from 'react';
import { Routes, Route, Link } from "react-router-dom";
import HomePage from "../pages/HomePage";
import UserOnboardPage from "../pages/UserOnboardPage";
import ContactPage from "../pages/ContactPage";
import PolicyPage from "../pages/PolicyPage";
import PurchasePage from "../pages/PurchasePage";
import RefundPage from "../pages/RefundPage";
import AboutPage from "../pages/AboutPage";
import ProductDetailsPage from "../pages/ProductDetailsPage";
import NotificationPage from "../pages/NotificationPage";
import WishListPage from "../pages/WishListPage";
import CartPage from "../pages/CartPage";


class AppRoute extends Component {
    render() {
        return (
            <Fragment>
                <Routes>
                   <Route path="/" element={<HomePage />} />
                   <Route path="/onboard" element={<UserOnboardPage />} />
                   <Route path="/contact" element={<ContactPage />} />
                   <Route path="/policy" element={<PolicyPage />} />
                   <Route path="/purchase" element={<PurchasePage />} />
                   <Route path="/refund" element={<RefundPage />} />
                   <Route path="/about" element={<AboutPage />} />
                   <Route path="/productDetails" element={<ProductDetailsPage />} />
                   <Route path="/notification" element={<NotificationPage />} />
                   <Route path="/cart" element={<CartPage />} />
                   <Route path="/wishlist" element={<WishListPage />} />
                </Routes>
            </Fragment>
        );
    }
}

export default AppRoute;