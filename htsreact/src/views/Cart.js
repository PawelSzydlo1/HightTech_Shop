import React, {useEffect, useState} from 'react'
import EmptyCart from "../components/EmptyCart";
import CartList from "../components/CartList";
import CartColumns from "../components/CartColumns";
import Title from "../components/Title";
import CartTotals from "../components/CartTotals";
import axios from "axios";

const api = axios.create({
    baseURL: `http://localhost:8080/cartList/`
})

export default function Cart() {
    const id_user = 1; //id zalogowanego użytkownika
    const [cart, setCart] = useState([]);


    useEffect(() => {

        api.get('/' + id_user).then(response => response.data)
            .then(data => {
                setCart(data)
            })
    }, []);


    return (
        <div>
            {(cart) ? (
                <div>
                    <Title name="your" title="cart"/>
                    <CartColumns/>
                    <CartList cart={cart}/>
                    <CartTotals/>
                </div>
            ) : (
                <EmptyCart/>
            )
            }
        </div>


    )
}



