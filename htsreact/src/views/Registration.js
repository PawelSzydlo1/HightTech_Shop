import React from 'react';
import styled from "styled-components";
import {ButtonContainer} from "../components/Button";
import validate from "../Validate";
import ServiceRegistration from "../ServiceRegistration";
import {Link} from "react-router-dom";

function Registration ({submitForm}) {
    const {handleChange, handleSubmit, values, errors} = ServiceRegistration(submitForm, validate);


        return (
            <RegistrationWrapper>
                <div className="container d-flex ">
                    <div className="row align-content-center justify-content-center">
                        <div className="col-xs-12 col-sm-10 col-md-6 col-sm-offset-4 col-md-offset-6 m-lg-5">
                            <div className="panel panel-default ">
                                <div className="panel-heading">
                                    <h3 className="panel-title py-3">Please sign up for HighTechShop </h3>
                                    <h5 className="d-flex align-content-between justify-content-center">
                                        <small className="py-1">I have an account</small>
                                        <Link to='/successfulLogin'>
                                            <ButtonContainer className="login">
                                                Login
                                            </ButtonContainer>
                                        </Link>
                                    </h5>
                                </div>
                                <div className="panel-body">
                                    <form role="form" onSubmit={handleSubmit}>
                                        <div className="col">
                                            <div className="row-col-xs-6 row-col-sm-6 row-col-md-6 pt-3">
                                                <div className="form-group">
                                                    <input
                                                        type="text"
                                                        name="name"
                                                        id="name"
                                                        className="form-control input-sm"
                                                        placeholder="Name"
                                                        value={values.name}
                                                        onChange={handleChange}
                                                        required
                                                        autoComplete="off"
                                                    />

                                                </div>
                                            </div>
                                            <div className="row-col-xs-6 row-col-sm-6 row-col-md-6 pt-3">
                                                <div className="form-group">
                                                    <input
                                                        type="text"
                                                        name="surname"
                                                        id="surname"
                                                        className="form-control input-sm"
                                                        placeholder="Surname"
                                                        value={values.surname}
                                                        onChange={handleChange}
                                                        required
                                                        autoComplete="off"
                                                    />

                                                </div>
                                            </div>
                                        </div>

                                        <div className="form-group pt-3">
                                            <input
                                                type="email"
                                                name="email"
                                                id="email"
                                                className="form-control input-sm"
                                                placeholder="Email Address"
                                                value={values.email}
                                                onChange={handleChange}
                                                required
                                                autoComplete="off"
                                            />
                                            {errors.email && <p>{errors.email}</p>}
                                        </div>

                                        <div className="col">
                                            <div className="row-col-xs-6 row-col-sm-6 row-col-md-6 pt-3">
                                                <div className="form-group">
                                                    <input
                                                        type="password"
                                                        name="password"
                                                        id="password"
                                                        className="form-control input-sm"
                                                        placeholder="Password"
                                                        value={values.password}
                                                        onChange={handleChange}

                                                    />
                                                    {errors.password && <p>{errors.password}</p>}
                                                </div>
                                            </div>
                                            <div className="row-col-xs-6 row-col-sm-6 row-col-md-6 pt-3 pb-3">
                                                <div className="form-group">
                                                    <input
                                                        type="password"
                                                        name="confirmPassword"
                                                        id="confirmPassword"
                                                        className="form-control input-sm"
                                                        placeholder="Confirm Password"
                                                        value={values.confirmPassword}
                                                        onChange={handleChange}
                                                    />
                                                    {errors.confirmPassword && <p>{errors.confirmPassword}</p>}
                                                </div>
                                            </div>
                                        </div>
                                        <div className="row-cols-3 d-flex justify-content-center align-content-center">
                                            <ButtonContainer type="submit" className="registration">
                                                Register
                                            </ButtonContainer>
                                        </div>

                                    </form>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </RegistrationWrapper>
        );
}
export default Registration;

const RegistrationWrapper = styled.div`
  input {
    font-size: larger;
    background: transparent;
    border-radius: 0.5rem;
    padding: 0.2rem 0.5rem;
    border-color: var(--lightBlue)
    
  }

  .login {
    font-size: medium;
  }
  .registration {
    font-size: large;
  }

`;