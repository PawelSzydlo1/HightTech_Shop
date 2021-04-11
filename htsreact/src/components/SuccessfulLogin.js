import React, { useState} from 'react';
import axios from "axios";
import {Link} from "react-router-dom";
import Login from "../views/Login";
import {ButtonContainer} from "./Button";

function SuccessfulLogin() {


    const api = axios.create({
        baseURL: `http://localhost:8080`
    })


    const [user, setUser] = useState({email: ""});
    const [error, setError] = useState("");

    const CheckLogin = data => {


        if(data !== ""){
            console.log(data.email);
            setUser({
                email: data.email
            });
        } else{
            setError("Wrong email or password!")
        }
    }

    return (
        <div className='container'>

            {(user.email !== "") ? (
                <div className=" container align-content-center d-flex justify-content-center h-75">
                <Link to='/'>
                    <ButtonContainer className='button-welcome'>You are logged in!</ButtonContainer>
                </Link>
                </div>
            ) : (
                <Login CheckLogin={CheckLogin} error={error}/>
            )}
        </div>
    )
}






export default SuccessfulLogin;