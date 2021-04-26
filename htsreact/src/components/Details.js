
import {ButtonContainer} from "./Button";
import React from "react";

export default function Details ({details, changeStatus}) {

        const {title, imgName, price, inCart,company, info }=details;

        return (
            <div className="container py-5">
                {/*title*/}
                <div className="row">
                    <div className="col-10 mx-auto text-center text-slanted text-blue my-5">
                        <h1>{title}</h1>
                    </div>
                </div>


                <div className="row">
                    <div className="col-10 mx-auto col-md-6 my-3">
                        <img src={imgName} className="img-fluid" alt="product"/>
                    </div>


                    <div className="col-10 mx-auto col-md-6 my-3
                text-capitalize">
                        <h2>model: {title}</h2>
                        <h4 className="text-title text-uppercase text-muted mt-3 mb-2">
                            made by: <span className="text-uppercase">{company}</span>
                        </h4>
                        <h4 className="text-blue">
                            <strong>
                                price: <span>$</span>
                                {price}
                            </strong>
                        </h4>
                        <p className="text-capitalize font-weight-bold mt-3 mb-0">
                            some info about product:
                        </p>
                        <p className=" text-muted lead">{info}</p>


                            <ButtonContainer onClick={changeStatus}>
                                back to products
                            </ButtonContainer>
                        <ButtonContainer
                            cart
                            disable={inCart}
                        >

                            {inCart ? "inCart" : "add to cart"}
                        </ButtonContainer>

                    </div>
                </div>
            </div>

        );


}
