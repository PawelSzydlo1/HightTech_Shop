import React, {useState} from 'react';
import styled from "styled-components";
import axios from 'axios'
import {ButtonContainer} from "../components/Button";
import {Link} from "react-router-dom";



const api = axios.create({
    baseURL: `http://localhost:8080`
})



function Login({CheckLogin, error}) {

    const [data, setData] = useState({email: "", password: ""});
    const res = async () => {
        const resp = await api.post("http://localhost:8080/login", data);
        CheckLogin(resp.data);
    }

    const submitFunction = e => {
        e.preventDefault();

        res();

    }

        return (
            <LoginWrapper>
                <div className="container d-flex">
                    <div className="row align-content-center justify-content-center">
                        <div className="col-xs-12 col-sm-10 col-md-6 col-sm-offset-4 col-md-offset-6 m-lg-5">
                            <div className="panel panel-default ">
                                <div className="panel-heading">
                                    <h3 className="panel-title p-3">Login for HighTechShop </h3>
                                </div>
                                <div className="panel-body">
                                    <form role="form" onSubmit={submitFunction}>
                                        {(error !== "") ? (<p className='error'>{error}</p>) : ""}

                                        <div className="form-group pt-3">
                                            <input
                                                type="email"
                                                name="email"
                                                id="email"
                                                className="form-control input-sm"
                                                onChange={e => setData({...data, email: e.target.value})}
                                                value={data.email}
                                                placeholder="Email Address"
                                                required/>
                                        </div>

                                        <div className="col">
                                            <div className="row-col-xs-6 row-col-sm-6 row-col-md-6 pt-3 pb-3">
                                                <div className="form-group">
                                                    <input
                                                        type="password"
                                                        name="password"
                                                        id="password"
                                                        className="form-control input-sm"
                                                        onChange={e => setData({...data, password: e.target.value})}
                                                        value={data.password}
                                                        placeholder="Password"
                                                        required/>
                                                </div>
                                            </div>
                                        </div>

                                        <ButtonContainer type="submit">
                                            Login
                                        </ButtonContainer>

                                    </form>

                                </div>

                                <div className="panel-footer">
                                    <div className="row ">
                                        <h5 className=" p-2">You don't have an account? </h5>
                                        <Link to='/successfulRegistration'>
                                            <ButtonContainer className='Registration'>
                                                Registration
                                            </ButtonContainer>
                                        </Link>
                                    </div>


                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </LoginWrapper>
        );
}

export default Login;

const LoginWrapper = styled.div`
    
`
