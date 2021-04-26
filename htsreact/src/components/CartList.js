import {useEffect, useState} from "react";
import CartItem from "./CartItem";
import axios from "axios";



const api = axios.create({
    baseURL: `http://localhost:8080/productList/`
})

export default function CartList({cart}){
    const [products, setProducts]=useState([]);

    const {id,subTotal}=cart;

    useEffect(() => {

        api.get('/').then(response => response.data)
            .then(data => setProducts(data))
    }, []);

    console.log("Product"+ products);


    return (
        <div className="container-fluid">
            {products.map(product => (
                <CartItem key={product.id} product={product} />
            ))}
        </div>
    );
}