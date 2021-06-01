import {Link} from "react-router-dom";
import {useEffect, useState} from "react";
import axios from "axios";

const api = axios.create({
    baseURL: `http://localhost:8080/api/product/`
})
export default function CartTotal({products, changeNumber,deleteDetect}) {
    const sum=(prod)=>{
        let total=0;
        prod.map((p)=>{
          total=total+p["total"];

        })

        return total;

    }
    const config = {
        headers: {
            "Authorization": "Bearer " + localStorage.getItem('token')
        }
    };
    const [cartSubTotal, setCartSubTotal]=useState(sum(products))

    const deleteAll = async() =>{
        await api.delete("deleteAll/" + localStorage.getItem("id"),config).then(products.clear)
    }



    useEffect(()=>{

        setCartSubTotal(sum(products));

    },[changeNumber,deleteDetect,products])



    return (
        <div className="row gx-0">
            <div className="col-10 mt-2 ml-sm-5 ml-md-auto col-sm-8 text-capitalize text-right px-4">
                <Link to="/">
                    <button
                        className="btn btn-outline-danger text-uppercase mb-3 px-5"
                        type="button"
                        onClick={() => {
                            deleteAll();
                        }}
                    >
                        clear cart
                    </button>
                </Link>
                <h5>
                    <span className="text-title"> Total :</span>{" "}
                    <strong>$ {cartSubTotal} </strong>
                </h5>

            </div>
        </div>
    );
}