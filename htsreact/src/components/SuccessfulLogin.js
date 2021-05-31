import React from 'react';

import {Link} from "react-router-dom";
import Login from "../views/Login";
import {ButtonContainer} from "./Button";
import {useSelector} from "react-redux";

function SuccessfulLogin() {

    const auth = useSelector(state => state.auth)

    return (
        <div className='container'>

            {(auth.login) ? (
                <div className=" container align-content-center d-flex justify-content-center h-75">
                <Link to='/'>
                    <ButtonContainer className='button-welcome'>You are logged in!</ButtonContainer>
                </Link>
                </div>
            ) : (
                <Login />
            )}
        </div>
    )
}








export default SuccessfulLogin;