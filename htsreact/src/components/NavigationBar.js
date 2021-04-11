import React, {Component} from "react";
import logo from "../logo.svg";

import styled from "styled-components";
import {ButtonContainer} from "./Button";
import {Link} from "react-router-dom";


export default class NavigationBar extends Component {
    render() {
        return (
            <NavWrapper>
                <div className="navbar navbar-expand-lg">
                    <Link to="/">
                    <a className="navbar-brand">
                        <Img src={logo}/>

                    </a>
                    </Link>
                    <Link to="/">
                    <a className="navbar-brand">
                        HighTech Shop
                    </a>
                    </Link>
                    <div className="navbar-toggle" data-bs-toggle="collapse" data-bs-target="#navbarNav"
                         aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggle-icon"/>
                    </div>
                    <div className="collapse navbar-collapse " id="navbarNav">
                        <div className="navbar-nav ml-auto">
                            <li className="nav-item">
                                <Link to="/service">
                                <a className="nav-link">
                                    <ButtonContainer>
                                        <span className="mr-2">
                                        <i className="fas fa-tools"/>
                                        </span>
                                        Service
                                    </ButtonContainer>
                                </a>
                                </Link>
                            </li>

                            <li className="nav-item">
                                <Link to="/cart">
                                <a className="nav-link">
                                    <ButtonContainer>
                                        <span className="mr-2">
                                        <i className="fa fa-cart-plus"/>
                                        </span>
                                        my cart
                                    </ButtonContainer>
                                </a>
                            </Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/successfulLogin">
                                <a className="nav-link">
                                    <ButtonContainer>
                                        <span className="ml-2 mr-2">
                                            <i className="fas fa-users-cog"/>
                                        </span>
                                        Login
                                    </ButtonContainer>
                                </a>
                                </Link>
                            </li>
                        </div>
                    </div>
                </div>
            </NavWrapper>
        );
    }
}

const NavWrapper = styled.div`
  background: var(--mainBlue);

  .nav-link,
  .navbar-brand {
    color: var(--lightBlue) !important;
    font-size: 2rem;
    text-transform: capitalize;
    padding: 0.4rem 1rem;
  }
`;

const Img = styled.img`
  width: 3rem;
`;
