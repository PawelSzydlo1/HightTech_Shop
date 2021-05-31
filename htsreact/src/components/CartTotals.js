import {Link} from "react-router-dom";
import {useEffect, useState} from "react";


export default function CartTotal({products, changeNumber}) {
    const sum=(prod)=>{
        let total=0;
        prod.map((p)=>{
          total=total+p["total"];

        })

        return total;

    }

    const [cartSubTotal, setCartSubTotal]=useState(sum(products))
    const [cartTax, setCartTax]=useState(0.185*cartSubTotal)
    const [cartTotal, setCartTotal]=useState(cartSubTotal+cartTax)


    useEffect(()=>{

        setCartSubTotal(sum(products));
        setCartTax(0.185*cartSubTotal);
        setCartTotal(cartSubTotal+cartTax);
    },[changeNumber])



    return (
        <div className="row gx-0">
            <div className="col-10 mt-2 ml-sm-5 ml-md-auto col-sm-8 text-capitalize text-right px-4">
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
                    <strong>$ {cartSubTotal} </strong>
                </h5>
                <h5>
                    <span className="text-title"> tax :</span>{" "}
                    <strong>$ {cartTax} </strong>
                </h5>
                <h5>
                    <span className="text-title"> total :</span>{" "}
                    <strong>$ {cartTotal} </strong>
                </h5>
            </div>
        </div>
    );
}