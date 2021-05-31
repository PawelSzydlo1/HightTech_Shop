import React, {Component} from "react";
import {BrowserRouter, Switch, Route} from "react-router-dom";

import "./App.css";
import ProductList from "./views/ProductList";
import Details from "./components/Details";
import Cart from "./views/Cart";
import Default from "./components/Default";
import NavigationBar from "./components/NavigationBar";
import Service from "./views/Service";
import SuccessfulLogin from "./components/SuccessfulLogin";
import SuccessfulRegistration from "./components/SuccessfulRegistration";
import FormAddProduct from "./views/FormAddProduct";


class App extends Component {
    render() {
        return (
            <React.Fragment>
                <BrowserRouter>
                    <NavigationBar/>
                    <Switch>
                        <Route exact path="/" component={ProductList}/>
                        <Route path="/cart" component={Cart}/>
                        <Route path="/details" component={Details}/>
                        <Route path="/service" component={Service}/>
                        <Route path="/successfulLogin" component={SuccessfulLogin}/>
                        <Route path="/successfulRegistration" component={SuccessfulRegistration}/>
                        <Route path="/cart" component={Cart}/>
                        <Route path="/formAdd" component={FormAddProduct}/>
                        <Route component={Default}/>
                    </Switch>
                </BrowserRouter>
            </React.Fragment>
        );
    }
}

export default App;
