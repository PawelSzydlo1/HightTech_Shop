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
    baseURL: `http://localhost:8080/api/`
})
export default function Cart() {
    const [status, setStatus]=useState(false);
    const history = useHistory()
    const auth = useSelector(state => state.auth)
    const [products, setProducts]=useState([]);
    const [deleteDetect, setDeleteDetect]=useState(false)
    const deleteItem =(id) =>{
        api.delete("deleteProduct/" + id).then(r  =>{
            if(deleteDetect){
                setDeleteDetect(false)
            }
            else {
                setDeleteDetect(true)
            }
        });

    }

    useEffect(() => {
        if (!auth.login) {
            history.push("/successfulLogin");
        }else{
            api.get('productList/'+auth.user.first.toString())
                .then(response => {
                    Promise.all(response.data.map(num =>
                        api.get('productList/file/' + num.id)
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
        }
    }, [deleteDetect]);


    return (
        <div>
            {(products.length>0) ? (
                <div>
                    <Title name="your" title="cart"/>
                    <CartColumns/>
                    <CartList products={products} status={status} deleteItem={deleteItem}/>
                    <CartTotals/>
                </div>
            ) : (
                <EmptyCart/>
            )
            }
        </div>


    )
}



