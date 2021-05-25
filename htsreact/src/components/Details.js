
import {ButtonContainer} from "./Button";
import React from "react";
import axios from "axios";
import {useSelector} from "react-redux";

const api = axios.create({
    baseURL: `http://localhost:8080/api/product/`
})
export default function Details ({details, changeStatus}) {

        const {title, productImage, price, inCart,company, info }=details;
    const auth = useSelector(state => state.auth)

    const addToCart = () => {
        console.log("add to cart");
        api.get("/changecart/" + details.id.toString() + "/" + auth.user.first.toString());
    }

        return (
            <div className="container py-5">

                <div className="row">
                    <div className="col-10 mx-auto text-center text-slanted text-blue my-5">
                        <h1>{title}</h1>
                    </div>
                </div>


                <div className="row">
                    <div className="col-10 mx-auto col-md-6 my-3">
                        <img src={productImage} className="img-fluid" alt="product"/>
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
                            onClick={()=>addToCart()}
                        >
                            add to cart
                        </ButtonContainer>

                    </div>
                </div>
            </div>

        );


}
