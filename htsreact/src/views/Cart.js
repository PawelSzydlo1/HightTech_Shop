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
    const history = useHistory();
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
    const deleteItem =async (id) =>{
        await api.delete("delete/" + id,config).then(r  =>{
            if(deleteDetect){
                setTimeout(()=>setDeleteDetect(false),2000)
            }
            else {
                setTimeout(()=>setDeleteDetect(true),2000);
            }
        });

    }



    useEffect(() => {
        if (!auth.login) {
            history.push("/successfulLogin");
        }else{
            api.get('List/'+localStorage.getItem('id'))
                .then(response => {

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


    const changeCountAndTotal = (id, count, total) =>{
        const tmp = products.find((prod)=>prod.id===id);
        const ind = products.findIndex((prod)=>prod.id===id)
        tmp.count=count;
        tmp.total=total;
        products[ind]=tmp;
    }


    return (
        <div>
            {(products.length>0) ? (

                <div>
                    <Title name="your" title="cart"/>
                    <CartColumns/>
                    <CartList products={products} status={status} deleteItem={deleteItem} functionChange={functionChange} changeCountAndTotal={changeCountAndTotal}/>
                    <CartTotals products={products} changeNumber={changeNumber} deleteDetect={deleteDetect}/>
                </div>
            ) : (
                <EmptyCart/>
            )
            }
        </div>


    )
}



