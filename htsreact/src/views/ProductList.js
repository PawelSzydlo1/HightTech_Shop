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
    const [status, setStatus] = useState(false);


    const [products, setProducts] = useState([]);
    const [details, setDetails] = useState([]);

    useEffect(() => {
        api.get('/').then(response => response.data)
            .then(data => {
                setProducts(data);

            })

    }, []);

    const handleClick = e => {
        //e.preventDefault();

        setStatus(true);
    }

    function changeStatus() {
        setStatus(false);

    }

    const detailsFunction = (detail) => {
        handleClick();
        setDetails(detail);
    }

    return (
        <ProductListWrapper>
            {(status === false) ? (
                <div className="row ">
                    <div className="col-3 ">

                        <div className="container ">
                            <Filter/>
                        </div>
                    </div>
                    <div className="col-9">
                        <div className="container">
                            <Title name="our" title="products"/>

                            <div className="row">

                                {products.map(product => (
                                    <Product product={product}
                                             detailsFunction={detailsFunction}/>
                                ))
                                }

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
