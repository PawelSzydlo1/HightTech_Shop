import logo from "../logo.svg";

import styled from "styled-components";
import {ButtonContainer} from "./Button";
import {Link, useHistory} from "react-router-dom";
import {useSelector,useDispatch} from "react-redux";
import {signout} from "../authorization/ActionAuth";


export default function NavigationBar() {

    const auth = useSelector(state => state.auth)
    const dispatch = useDispatch();
    const history = useHistory()
    const handleLogout = () => {
        dispatch(signout()).then(() => {
            history.replace("/");
        });
    }
    return (
        <NavWrapper>
            <div className="navbar navbar-expand-lg">
                <Link to="/">
                    <a className="navbar-brand">
                        <img src={logo} alt="image"/>

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
                            <Link to="/formAdd">
                                <a className="nav-link">
                                    <ButtonContainer>
                                        <span className="mr-2">
                                        <i className="fas fa-tools"/>
                                        </span>
                                        Add Product
                                    </ButtonContainer>
                                </a>
                            </Link>
                        </li>

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

                        {(auth.login)?(
                            <li className="nav-item">
                                <Link to="/">
                                    <a className="nav-link"  onClick={handleLogout}>
                                        <ButtonContainer>
                                        <span className="ml-2 mr-2">
                                            <i className="fas fa-users-cog"/>
                                        </span>
                                            Logout
                                        </ButtonContainer>
                                    </a>
                                </Link>
                            </li>
                        ):(
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
                        )}




                    </div>
                </div>
            </div>
        </NavWrapper>
    );
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

  a {
    text-decoration: none;
  }

  img {
    width: 3rem;
  }
`;

