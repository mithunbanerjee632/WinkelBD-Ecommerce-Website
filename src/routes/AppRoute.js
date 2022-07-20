import React, {Component, Fragment} from 'react';
import { Routes, Route, Link } from "react-router-dom";
import HomePage from "../pages/HomePage";

class AppRoute extends Component {
    render() {
        return (
            <Fragment>
                <Routes>
                   <Route path="/" element={<HomePage />} />
                </Routes>
            </Fragment>
        );
    }
}

export default AppRoute;