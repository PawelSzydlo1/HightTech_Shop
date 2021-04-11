import React, {Component} from "react";
import Product from "../components/Product";
import Title from "../components/Title";
import Filter from "../components/Filter";

import styled from "styled-components";


import axios from "axios";


const api = axios.create({
    baseURL: `http://localhost:8080/productList/`
})

export default class ProductList extends Component {
    state = {
        carts: []
    }

    constructor() {
        super();
        api.get('/').then(response => response.data)
            .then((data) => {
                this.setState({carts: data})
            })
    }


    render() {
        return (
            <React.Fragment>
                <div className="row ">
                    <div className="col-3 ">

                        <div className="container ">
                            <Filter/>
                        </div>
                    </div>


                    <div className="col-9">
                        <div className="container">
                            <Title name="our" title="products"/>
                            <div className="row">

                                    {this.state.carts.map(cart => (
                                        <Product key={cart.id } product={cart}>
                                        </Product>

                                    ))
                                    }

                            </div>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}
