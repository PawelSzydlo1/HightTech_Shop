import React, {useState} from 'react';
import styled from "styled-components";
import {ButtonContainer} from "../components/Button";
import {Link} from "react-router-dom";
import {signin} from "../authorization/ActionAuth.js"
import {useDispatch, useSelector} from "react-redux";


function Login() {
    const dispatch = useDispatch();
    const [error, setError]=useState("")
    const auth = useSelector(state => state.auth)

    const [data, setData] = useState({email: "", password: ""});
    const submitFunction = e => {
        e.preventDefault();
        dispatch(signin(data));
        if(!auth.register_error){
            setError("Wrong email or password");
        }
    }


    return (
        <LoginWrapper>
            <div className="container d-flex">
                <div className="row align-content-center justify-content-center">
                    <div className="col-xs-12 col-sm-10 col-md-8 col-sm-offset-4 col-md-offset-6 m-lg-5">
                        <div className="panel panel-default ">
                            <div className="panel-heading">
                                <h3 className="panel-title p-3">Login for HighTechShop </h3>
                            </div>
                            <div className="panel-body">
                                <form role="form" onSubmit={submitFunction}
                                      className="row d-flex align-content-center justify-content-center">
                                    {(error !== "") ? (<p className='error'>{error}</p>) : ""}

                                    <div className="form-group pt-3 ">
                                        <input
                                            type="email"
                                            name="email"
                                            id="email"
                                            className="form-control input-default"
                                            onChange={e => setData({...data, email: e.target.value})}
                                            value={data.email}
                                            placeholder="Email Address"
                                            required
                                            autoComplete="off"
                                        />
                                    </div>
                                    <div className="col">
                                        <div className="row-col-xs-6 row-col-sm-6 row-col-md-6 row-col-ld-8 pt-3 pb-3">
                                            <div className="form-group">
                                                <input
                                                    type="password"
                                                    name="password"
                                                    id="password"
                                                    className="form-control input-default"
                                                    onChange={e => setData({...data, password: e.target.value})}
                                                    value={data.password}
                                                    placeholder="Password"
                                                    required
                                                    autoComplete="off"
                                                />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row-cols-5 d-flex align-content-center justify-content-center">
                                        <ButtonContainer type="submit" className="login">
                                            Login
                                        </ButtonContainer>
                                    </div>
                                </form>
                            </div>
                            <div className="panel-footer ">
                                <div className="row d-flex align-content-around justify-content-start p-3">
                                    <h5 className="row ">You don't have an account? </h5>
                                    <div className="row">
                                        <Link to='/successfulRegistration'>
                                            <ButtonContainer className='registration'>
                                                Registration
                                            </ButtonContainer>
                                        </Link>
                                    </div>
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
  input {
    font-size: larger;
    background: transparent;
    border-radius: 0.5rem;
    padding: 0.2rem 0.5rem;
    border-color: var(--lightBlue)
  }

  .login {
    font-size: larger;
  }

  .registration {
    font-size: medium;
  }
`
