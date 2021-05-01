import React, {useEffect, useState} from "react";
import Product from "../components/Product";
import Title from "../components/Title";
import Filter from "../components/Filter";
import Details from "../components/Details";
import styled from "styled-components";


import axios from "axios";


const api = axios.create({
    baseURL: `http://localhost:8080/productList/`
})

export default function ProductList() {
    const [status, setStatus] = useState(true);
    const [statusDownload, setStatusDownload] = useState(false);
    const [filterPrice, setFilterPrice]=useState([]);

    const [products, setProducts] = useState([]);
    const [products2, setProducts2] = useState([]);
    const [details, setDetails] = useState([]);


    const handleClick = e => {
        //e.preventDefault();

        setStatus(false);
    }

    function changeStatus() {
        setStatus(true);
    }

    const detailsFunction = (detail) => {
        handleClick();
        setDetails(detail);
    }

    const [searchText, setSearchText] = useState("");
    const [searchTag, setSearchTag] = useState([]);


    function search(prod) {
        const productKeys = prod[0] && Object.keys(prod[0])
        let filtr1 = prod.filter((product) =>
            productKeys.some((key) => product[key].toString().toLowerCase().indexOf(searchText.toLowerCase()) > -1));
        let filtr2 = filtr1.filter((product) => product["category"].toString().toLowerCase().indexOf(searchTag.toString().toLowerCase()) > -1);
        let filtr3 = filtr2.filter((product) =>
            product["price"]>filterPrice[0] && product["price"] <= filterPrice[1]);

        return filtr3;
    }

    const changeStatusDownload = ()=> {
        setProducts2(products)

        console.log("Product2");
        console.log(products2);
        setStatusDownload(true);
    }

    useEffect(() => {

        api.get('/').then(response => response.data)
            .then(data => {
                for (let num in data){
                    fetch('http://localhost:8080/productList/file/'+data[num].id)
                        .then(response=>{
                            console.log(response);
                            response.blob().then(blob=>{
                                data[num].productImage= window.URL.createObjectURL(blob)
                                console.log("Jestem w petli ----");
                            })
                        })
                }

                setProducts(data);
                changeStatusDownload();



            })
    }, [statusDownload]);

    return (
        <ProductListWrapper>
            {(status ) ? (
                <div className="row ">
                    <div className="col-3 ">

                        <div className="container ">
                            <Filter setSearchText={setSearchText} searchTag={searchTag} setSearchTag={setSearchTag} setFilterPrice={setFilterPrice}/>
                        </div>
                    </div>
                    <div className="col-9">
                        <div className="container">
                            <Title name="our" title="products"/>

                            <div className="row">
                                {statusDownload ? (
                                    search(products2).map(product => (
                                            <Product product={product}
                                                     detailsFunction={detailsFunction}/>
                                        ))
                                ):(
                                    <div className="spinner-border" role="status"/>
                                )}
                            </div>
                        </div>
                    </div>
                </div>

            ) : (
                <Details details={details} changeStatus={changeStatus}/>

            )}
        </ProductListWrapper>
    );
};

const ProductListWrapper = styled.div`

`
