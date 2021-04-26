import {Link} from "react-router-dom";
import {useState} from "react";


export default function CartTotal(){

    const [value, setValue] = useState({
        cartSubTotal:0,
        cartTax:0,
        cartTotal:0
    });

    return (


                    <div className="row px-3">
                        <div className="col-10 mt-2 ml-sm-5 ml-md-auto col-sm-8  text-capitalize text-right">
                            <Link to="/">
                                <button
                                    className="btn btn-outline-danger text-uppercase mb-3 px-5"
                                    type="button"
                                    onClick={() => {
                                       //clear cart
                                    }}
                                >
                                    clear cart
                                </button>
                            </Link>
                            <h5>
                                <span className="text-title"> subtotal :</span>{" "}
                                <strong>$ {value.cartSubTotal} </strong>
                            </h5>
                            <h5>
                                <span className="text-title"> tax :</span>{" "}
                                <strong>$ {value.cartTax} </strong>
                            </h5>
                            <h5>
                                <span className="text-title"> total :</span>{" "}
                                <strong>$ {value.cartTotal} </strong>
                            </h5>
                        </div>
                    </div>
    );
}