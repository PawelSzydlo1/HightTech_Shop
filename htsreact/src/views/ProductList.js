import React, { Component } from "react";
import Product from "../components/Product";
import Title from "../components/Title";
import Filter from "../components/Filter";
import { ProductConsumer } from "../context";
import styled from "styled-components";
export default class ProductList extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="row ">
          <div className="col-3 ">

            <div className="container ">
              <Filter />
            </div>
          </div>



          <div className="col-9">
            <div className="container">
              <Title name="our" title="products" />
              <div className="row">
                <ProductConsumer>
                  {(value) => {
                    return value.products.map((product) => {
                      return <Product key={product.id} product={product} />;
                    });
                  }}
                </ProductConsumer>
              </div>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}
