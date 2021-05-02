import axios from "axios";
import {useEffect, useState} from "react";
import styled from "styled-components";

const api = axios.create({
    baseURL: `http://localhost:8080/`
})

export default function CartItem({product}) {

    const {id, title, productImage, price, total, count} = product;

    const [number, setNumber] = useState(0);
    const [countProduct, setCountProduct]=useState(count);
    const [totalProduct, setTotalProduct]=useState(total);
    useEffect(() => {


        if ((count + number) >= 0 && (countProduct +number) >=0 && ((number === 1) || (number === (-1))) ) {
            api.get("changecount/" + id.toString() + "/" + number.toString())

            setCountProduct(countProduct+number);
            setTotalProduct((countProduct+number)*price)
            setNumber(0)
            // console.log("ile ma number " + number)
        }
        else{
            setNumber(0)
        }

    }, [number])

    return (

        <CartItemWrapper key={id} className="row my-1 text-capitalize text-center">
            <div className="col-10 mx-auto col-lg-2 align-items-center justify-content-center d-flex">
                <img
                    src={productImage}
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
                        <span className="btn btn-black mx-1">{countProduct}</span>
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
                <strong>item total : $ {totalProduct} </strong>
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
    padding: 0.25em;
  }

`;