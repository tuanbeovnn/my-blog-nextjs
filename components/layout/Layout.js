import React, { Fragment } from "react";
import { connect } from "react-redux";
import adminAction from "../../redux/actions/admin";
import Header from "./Header";
import { ToastContainer, toast } from 'react-toastify';
const Layout = ({ children, dispatch, isHiddenHeader }) => {

    React.useEffect(() => {
        dispatch({
            type: adminAction.USER_INIT
        })
    }, []);

    return (
        
            <Fragment>
                <ToastContainer/>
                {!isHiddenHeader && <Header />}
                {children}
            </Fragment>

    );
};


export default (connect(() => ({}))(Layout));