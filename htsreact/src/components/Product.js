
import styled from "styled-components";
import axios from "axios";
import {useSelector} from "react-redux";
import {useHistory} from "react-router-dom";
import ModalAllert from "./ModalAllert";
import {useState} from "react";

const api = axios.create({
    baseURL: `http://localhost:8080/api/product/`
})
export default function Product({product, detailsFunction}) {
        const auth = useSelector(state => state.auth)
        const {id,  title, productImage, price, inCart}=product;
        const history = useHistory()

    const config = {
        headers: {
            "Authorization": "Bearer " + localStorage.getItem('token')
        }
    };
        const addToCart = () => {
            if(localStorage.getItem('token')!==null){
                handleOpen();

                api.get("/changecart/"+id+"/"+localStorage.getItem('id'),config);
            }
            else{
                history.push("/successfulLogin");
                console.log("zaloguj sie")
            }
        }

    const [open, setOpen] = useState(false);
    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

        return (
            <ProductWrapper  key={id} className="col-12 mx-auto col-md-4 col-lg-3 my-3">
                <ModalAllert open={open} handleClose={handleClose} info={"Dodałeś produkt do koszyka"}/>
                <div className="card">
                    <div
                        className="img-container p-5">

                        <div onClick={() => detailsFunction(product)}>
                                <img src={productImage} alt="product" className="card-img-top"  />
                        </div>
                        <button className="cart-btn" disabled={inCart} onClick={addToCart}>
                          <i className="fas fa-cart-plus"/>
                        </button>
                    </div>
                    <div className="card-footer d-flex justify-content-between">
                        <p className="align-self-center mb-0">{title}</p>
                        <h5 className=" text-blue font-italic mb-0">
                            <span className="mr-1">$</span>
                            {price}
                        </h5>
                    </div>
                </div>
            </ProductWrapper>
        );
}

const ProductWrapper = styled.div`
  .card {
    border-color: transparent;
    transition: all 1s linear;
  }

  .card-footer {
    background: transparent;
    border-top: transparent;
    transition: all 1s linear;
  }

  &:hover {
    .card {
      border: 0.04rem solid rgba(0, 0, 0, 0.2);
      box-shadow: 2px, 2px, 5px, 0px, rgba(0, 0, 0, 0.2);
    }

    .card-footer {
      background: rgba(247, 247, 247);
    }
  }

  .img-container {
    position: relative;
    overflow: hidden;
    height:100%;
    width: 100%;
  }
  .img-container >img {
    height:100%;
    width: 100%;
  }

  .cart-img-top {
    transition: all 1s linear;
  }

  .img-container:hover .card-img-top {
    transform: scale(1.2);
  }

  .cart-btn {
    position: absolute;
    bottom: 0;
    right: 0;
    padding: 0.2rem 0.4rem;
    background: var(--lightBlue);
    border: none;
    color: var(--mainWhite);
    font-size: 1.4rem;
    border-radius: 0.5rem 0 0 0;
    transform: translate(100%, 100%);
    transition: all 1s linear;
  }

  .img-container:hover .cart-btn {
    transform: translate(0, 0);
  }

  .cart-btn:hover {
    color: var(--mainBlue);
    cursor: pointer;
  }
`;
