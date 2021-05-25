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
    baseURL: `http://localhost:8080/api/product/`
})
export default function Cart() {
    const [status, setStatus]=useState(false);
    const history = useHistory()
    const auth = useSelector(state => state.auth)
    const [products, setProducts]=useState([]);
    const [deleteDetect, setDeleteDetect]=useState(false)
    const [changeNumber,setChangeNumber]=useState(false)

    const functionChange = () =>{
        if(changeNumber){
            setChangeNumber(false);
            console.log("Jestem w function change false");
        }
        else {
            setChangeNumber(true);
            console.log("Jestem w function change true");
        }
    }
    const config = {
        headers: {
            "Authorization": "Bearer " + localStorage.getItem('token')
        }
    };
    const deleteItem =(id) =>{
        api.delete("delete/" + id,config).then(r  =>{
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
            api.get('List/'+auth.auth.first.toString())
                .then(response => {
                    console.log(response.data);
                    Promise.all(response.data.map(num =>
                        api.get('List/file/' + num.id)
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
                    <CartList products={products} status={status} deleteItem={deleteItem} functionChange={functionChange}/>
                    <CartTotals products={products} changeNumber={changeNumber}/>
                </div>
            ) : (
                <EmptyCart/>
            )
            }
        </div>


    )
}



