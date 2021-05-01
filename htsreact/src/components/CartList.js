import React, {useEffect, useState} from "react";
import CartItem from "./CartItem";
import axios from "axios";



const api = axios.create({
    baseURL: `http://localhost:8080/productList/`
})

export default function CartList({cart}){
    const [products, setProducts]=useState([]);
    const [status, setStatus]=useState(false);
    const changeStatus = (data) =>{
        setProducts(data);
        setStatus(true);
    }

    useEffect(() => {

        api.get('/').then(response => response.data)
            .then(data => {
                changeStatus(data);

            })
    }, []);

    console.log("Product"+ products);


    return (
        <div className="container-fluid ">
            {(status) ? (
                products.map(product => (
                        <CartItem key={product.id} product={product} cart={cart}/>
                    ))
            ):(
                <div className="spinner-border" role="status"/>
            )}

        </div>
    );
}