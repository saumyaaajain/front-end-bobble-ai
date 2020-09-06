import React from "react";
import {
    Link
} from "react-router-dom";
import {FacebookLogin} from '../Login/FacebookLogin';

export const FacebookLoginButton = () => {
    const [isAuth, setAuth] = React.useState(false);
    return (
    <div>
        <div onClick={FacebookLogin} className="fb-login-button" data-size="large" data-button-type="continue_with" data-layout="default"
             data-auto-logout-link="false" data-use-continue-as="false" data-width=""/>
        {isAuth && <Link to="/user" />}
    </div>
)}