import React, {useEffect, useState} from 'react'
import EmptyCart from "../components/EmptyCart";
import CartList from "../components/CartList";
import CartColumns from "../components/CartColumns";
import Title from "../components/Title";
import CartTotals from "../components/CartTotals";
import axios from "axios";
import {useHistory} from "react-router-dom";
import {useSelector} from "react-redux";

const api = axios.create({
    baseURL: `http://localhost:8080/api/cartList/`
})
export default function Cart() {

    const [cart, setCart] = useState([]);
    const history = useHistory()
    const auth = useSelector(state => state.auth)

    if(!auth.login){
        history.push("/successfulLogin")
    }
    useEffect(() => {

        api.get('/' + auth.user.first).then(response => response.data)
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



