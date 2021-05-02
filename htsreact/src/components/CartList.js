import React, {useEffect, useState} from "react";
import CartItem from "./CartItem";
import axios from "axios";



const api = axios.create({
    baseURL: `http://localhost:8080/productList/`
})

export default function CartList({cart}){
    const [products, setProducts]=useState([]);
    const [status, setStatus]=useState(false);
    useEffect(() => {
        api.get('/')
            .then(response => {
                Promise.all(response.data.map(num =>
                    api.get('http://localhost:8080/productList/file/' + num.id)
                        .then(resp => resp.data)
                        .then(data => {
                            return {num, data};
                        }))
                ).then(v => {
                        v.map(k => k.num.productImage = k.data)

                        setProducts(response.data);
                        setStatus(true);
                    }
                );
            })

    }, []);




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