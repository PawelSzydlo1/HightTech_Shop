import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import logo from "./logo.svg";
import "./App.css";

import ProductList from "./views/ProductList";
import Details from "./components/Details";
import Cart from "./views/Cart";
import Default from "./components/Default";
import { BrowserRouter } from "react-router-dom";
import NavigationBar from "./components/NavigationBar";
import Service from "./views/Service";


class App extends Component {
  render() {
    return (
        <React.Fragment>
          <NavigationBar />
          <Switch>
            <Route exact path="/" component={ProductList} />
            <Route path="/cart" component={Cart} />
            <Route path="/details" component={Details} />
            <Route path="/service" component={Service} />
            <Route component={Default} />
          </Switch>
        </React.Fragment>
    );
  }
}

export default App;
