import React, {useEffect} from "react";
import CartItem from "./CartItem";

export default function CartList({products,status,deleteItem,functionChange}){

    return (
        <div className="container-fluid ">
            {(status) ? (
                products.map(product => (
                        <CartItem key={product.id} product={product} deleteItem={deleteItem} functionChange={functionChange}/>
                    ))
            ):(
                <div className="spinner-border" role="status"/>
            )}

        </div>
    );
}