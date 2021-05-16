import React from "react";
import CartItem from "./CartItem";

export default function CartList({products,status,deleteItem}){

    return (
        <div className="container-fluid ">
            {(status) ? (
                products.map(product => (
                        <CartItem key={product.id} product={product} deleteItem={deleteItem}/>
                    ))
            ):(
                <div className="spinner-border" role="status"/>
            )}

        </div>
    );
}