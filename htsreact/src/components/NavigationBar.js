import React, {Component} from "react";
import logo from "../logo.svg";
import serviceImg from "../serviceImage.svg";
import styled from "styled-components";
import {ButtonContainer} from "./Button";
import {Link} from "react-router-dom";


export default class NavigationBar extends Component {
    render() {
        return (
            <NavWrapper>
                <div className="navbar navbar-expand-lg">
                    <a className="navbar-brand" href="/">
                        <Img src={logo}/>

                    </a>
                    <a className="navbar-brand" href="/">
                        HighTech Shop
                    </a>
                    <div className="navbar-toggle" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggle-icon"/>
                    </div>
                    <div className="collapse navbar-collapse " id="navbarNav">
                        <div className="navbar-nav ml-auto">
                            <li className="nav-item">
                                <a className="nav-link" href="/service">
                                    <ButtonContainer>
                                        <span className="mr-2">
                                        <i class="fas fa-tools"/>
                                        </span>
                                        Service
                                    </ButtonContainer>
                                </a>
                            </li>

                            <li className="nav-item">
                                <a className="nav-link" href="/cart">
                                    <ButtonContainer>
                        <span className="mr-2">
                        <i className="fa fa-cart-plus"/>
                        </span>
                                        my cart
                                    </ButtonContainer>
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/">
                                    <ButtonContainer>
                        <span className="ml-2 mr-2">
                        <i className="fas fa-users-cog"/>
                        </span>
                                    </ButtonContainer>
                                </a>
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
