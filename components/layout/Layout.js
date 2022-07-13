import React, { Fragment } from "react";
import { connect } from "react-redux";
import adminAction from "../../redux/actions/admin";
import Header from "./Header";
const Layout = ({ children, dispatch, isHiddenHeader }) => {

    React.useEffect(() => {
        dispatch({
            type: adminAction.USER_INIT
        })
    }, []);

    return (
        <Fragment>
            {!isHiddenHeader && <Header />}
            {children}
        </Fragment>
    );
};


export default (connect(() => ({}))(Layout));