import React, {useEffect, useState} from "react";
import Title from "./Title";
import styled from 'styled-components';
import MultiRange from "./MultiRange";
import axios from "axios";


const api = axios.create({
    baseURL: `http://localhost:8080/productCategory/`
})

export default function Filter({setSearchText, searchTag, setSearchTag,setFilterPrice})   {

const [category, setCategory]=useState([]);
useEffect(()=> {
    api.get('/').then(response => response.data)
        .then(data => {
            setCategory(data);
        })
},[])

        return (
            <FilterWrapper>
                <Title title="Filter"/>
                <div className="container-lg p-2 justify-content-center">
                    <h3 className="title pl-4">Category</h3>
                </div>


                {category.map((cat)=>
                <div className="form-check form-switch " key={cat}>
                        <input
                            className="form-check-input"
                            type="checkbox"
                            id="flexSwitchCheckDefault"
                            value=""
                            checked={searchTag.includes(cat)}
                            onChange={(e)=>{
                                const checked = searchTag.includes(cat);
                                setSearchTag((prev) => checked ?
                                    prev.filter((sc) => sc !== cat)
                                    : [...prev, cat]);
                            }}
                        />
                        <label className="form-check-label " form="flexSwitchCheckDefault">
                            {cat}
                        </label>
                </div>
                )}
                <div className="container-lg p-2 justify-content-center">
                    <h3 className="title pl-4 pb-3">Price</h3>
                    <MultiRange setFilterPrice={setFilterPrice}/>
                </div>


                <div className="input-group">
                    <div className="form-outline col-12 py-3">
                        <input
                            type="search"
                            id="search "
                            className="form-control px-2 "
                            placeholder="Search"

                            onChange={(e)=>setSearchText(e.target.value)}/>
                    </div>


                </div>

            </FilterWrapper>
        );
}
const FilterWrapper = styled.div`
  .form-check {
    padding-left: 6rem;
    font-size: 1.2rem;
  }

  .form-range {
    width: 50%;
    height: 2.5rem;
  }

  .form-control {
    height: 2.5rem;
  }
`;
