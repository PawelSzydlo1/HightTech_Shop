import axios from "axios";
import {useEffect, useState} from "react";
import styled from "styled-components";

const api = axios.create({
    baseURL: `http://localhost:8080/`
})

export default function CartItem({product}) {

    const {id, title, imgName, price, total, count} = product;
    const [number, setNumber] = useState(0);

    useEffect(() => {

        if ((count + number) >= 0) {
            api.get("changecount/" + id.toString() + "/" + number.toString());
            setNumber(0);
        } else {
            console.log("Liczba mniejsza od zera");
        }

    }, [number, count])

    return (

            <CartItemWrapper key={id} className="row my-1 text-capitalize text-center">
                <div className="col-10 mx-auto col-lg-2 align-items-center justify-content-center d-flex">
                    <img
                        src={imgName}
                        className="img-fluid"
                        alt=""
                    />
                </div>
                <div className="col-10 mx-auto col-lg-2 align-items-center justify-content-center d-flex">
                    <span className="d-lg-none">product :</span> {title}
                </div>
                <div className="col-10 mx-auto col-lg-2 align-items-center justify-content-center d-flex">
                    <strong>
                        <span className="d-lg-none">price :</span> ${price}
                    </strong>
                </div>
                <div className="col-10 mx-auto col-lg-2 my-2 my-lg-0 align-items-center justify-content-center d-flex">
                    <div className="align-items-center justify-content-center d-flex ">
                        <div>
                          <span
                              className="btn btn-black mx-1"
                              onClick={() => {
                                  setNumber(number - 1)
                              }}>
                              -
                          </span>
                            <span className="btn btn-black mx-1">{count}</span>
                            <span
                                className="btn btn-black mx-1"
                                onClick={() => {
                                    setNumber(number + 1)
                                }}
                            >
                            +
                          </span>
                        </div>
                    </div>
                </div>
                <div className="col-10 mx-auto col-lg-2 align-items-center justify-content-center d-flex">
                    <div className=" cart-icon" onClick={() => {//usuwanie itemów
                    }}
                    >
                        <i className="fas fa-trash"/>
                    </div>
                </div>
                <div className="col-10 mx-auto col-lg-2 align-items-center justify-content-center d-flex">
                    <strong>item total : $ {total} </strong>
                </div>
        </CartItemWrapper>
    );
}

const CartItemWrapper = styled.div`

  border: 0.05rem solid var(--lightBlue);
  border-radius: 0.5em;
  .img-fluid {
    width: 5rem;
    height: 5rem;
  }

`;