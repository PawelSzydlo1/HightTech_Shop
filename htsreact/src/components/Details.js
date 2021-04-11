import React, {Component} from "react";

import {Link} from "react-router-dom";
import {ButtonContainer} from "./Button";

export default class Details extends Component {
    title = "telefon";
    imgName = "img/product-1.png";
    price = 11;
    inCart = false;
    company = "samsung";
    info = "opis";

    render() {
        return (
            <div className="container py-5">
                {/*title*/}
                <div className="row">
                    <div className="col-10 mx-auto text-center text-slanted text-blue my-5">
                        <h1>{this.title}</h1>
                    </div>
                </div>

                {/*end title */}
                {/* product info */}
                <div className="row">
                    <div className="col-10 mx-auto col-md-6 my-3">
                        <img src={this.imgName} className="img-fluid" alt="product"/>
                    </div>

                    {/*product text */}

                    <div className="col-10 mx-auto col-md-6 my-3
                text-capitalize">
                        <h2>model: {this.title}</h2>
                        <h4 className="text-title text-uppercase text-muted mt-3 mb-2">
                            made by: <span className="text-uppercase">{this.company}</span>
                        </h4>
                        <h4 className="text-blue">
                            <strong>
                                price: <span>$</span>
                                {this.price}
                            </strong>
                        </h4>
                        <p className="text-capitalize font-weight-bold mt-3 mb-0">
                            some info about product:
                        </p>
                        <p className=" text-muted lead">{this.info}</p>

                        {/*buttons */}
                        <Link to="/">
                            <ButtonContainer>
                                back to products
                            </ButtonContainer>
                        </Link>
                        <ButtonContainer
                            cart
                            disable={this.inCart}
                        >

                            {this.inCart ? "inCart" : "add to cart"}
                        </ButtonContainer>

                    </div>
                </div>
            </div>

        );

    }
}
