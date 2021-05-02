import {Link} from "react-router-dom";
import {ButtonContainer} from "../components/Button";
import React, {useState} from "react";
import styled from "styled-components";
import axios from "axios";

const api = axios.create({
    baseURL: `http://localhost:8080`
})

function FormAddProduct() {

    const [values, setValues]=useState({
        title:"",
        company:"",
        category:"Other",
        price:0,
        info:"",
        productImage:""
    })
    let file='';

    const handleSubmit = e => {
        e.preventDefault();
        sendData();




    };
    const handleChange = e => {
        const { name, value } = e.target;
        setValues({
            ...values,
            [name]: value
        });
    };



    const fileChange = async e =>{
        file= e.target.files[0];

        const toBase64 = file => new Promise((resolve, reject) => {
            const reader = new FileReader();
            reader.readAsDataURL(file);
            reader.onload = (  ) => resolve(reader.result);
            reader.onerror = error => reject(error);
        });
        const base64String = await toBase64(file);
        setValues({...values,productImage: base64String})


    }

    const sendData = async ()=>{

        api.post("/productAdd", values).then(response => {
                console.log("Jestem w api")
                if(response.data != null){
                    //console.log("wysyłam = " + values.title + " "+ values.company + " category -> " + values.category + " " + values.price + " " + values.info + "  "+ values.productImage);
                    setValues({
                        title:"",
                        company:"",
                        category:"Other",
                        price:0,
                        info:"",
                        productImage: ""

                    });
                    file= "";
                }
            });
    }



    return (
        <FormAddWrapper>
            <div className="container d-flex ">
                <div className="row align-content-center justify-content-center">
                    <div className="col-xs-12 col-sm-10 col-md-6 col-sm-offset-4 col-md-offset-6 m-lg-5">
                        <div className="panel panel-default ">
                            <div className="panel-heading">
                                <h3 className="panel-title py-3">Add or Edit Product </h3>
                                <h5 className="d-flex align-content-between justify-content-center">
                                    <small className="py-1">Do you want to edit a product?</small>
                                    <Link to='/'>
                                        <ButtonContainer className="edit">
                                            Edit
                                        </ButtonContainer>
                                    </Link>
                                </h5>
                            </div>
                            <div className="panel-body">
                                <form role="form" onSubmit={handleSubmit}>

                                    <div className="row-col-xs-6 row-col-sm-6 row-col-md-6 py-1">
                                        <div className="form-group">
                                            <input
                                                type="text"
                                                name="title"
                                                id="title"
                                                className="form-control input-sm"
                                                placeholder="Title/Name"
                                                value={values.title}
                                                onChange={handleChange}
                                                required
                                                autoComplete="off"
                                            />

                                        </div>
                                    </div>
                                    <div className="row-col-xs-6 row-col-sm-6 row-col-md-6 py-1">
                                        <div className="form-group">
                                            <input
                                                type="file"
                                                name="imgName"
                                                id="imgName"
                                                className="form-control input-sm"
                                                placeholder="Img"

                                                onChange={fileChange}
                                                required
                                                autoComplete="off"
                                            />

                                        </div>
                                    </div>


                                    <div className="form-group py-1">
                                        <input
                                            type="number"
                                            step="0.01"
                                            name="price"
                                            id="price"
                                            className="form-control input-sm"
                                            placeholder="Price"
                                            value={values.price}
                                            onChange={handleChange}
                                            required
                                            autoComplete="off"
                                        />

                                    </div>
                                    <div className="form-group py-1">
                                        <select
                                            className="form-select"
                                            name="category"
                                            id="category"
                                            value={values.category}
                                            onChange={handleChange}
                                        >
                                            <option value="Other" >Other</option>
                                            <option value="Phone" >Phone</option>
                                            <option value="Laptop" >Laptop</option>
                                            <option value="Computer" >Computer</option>
                                            <option value="Disc" >Disc</option>
                                        </select>


                                    </div>

                                    <div className="row-col-xs-6 row-col-sm-6 row-col-md-6 py-1">
                                        <div className="form-group">
                                            <input
                                                type="text"
                                                name="company"
                                                id="company"
                                                className="form-control input-sm"
                                                placeholder="Company"
                                                value={values.company}
                                                onChange={handleChange}

                                            />

                                        </div>
                                    </div>
                                    <div className="row-col-xs-6 row-col-sm-6 row-col-md-6 py-1 ">
                                        <div className="form-group">
                                                <textarea

                                                    name="info"
                                                    id="info"
                                                    className="form-control input-sm "
                                                    placeholder="Add info"
                                                    value={values.info}
                                                    onChange={handleChange}


                                                />

                                        </div>
                                    </div>


                                    <div className="row-cols-3 d-flex justify-content-center align-content-center">
                                        <ButtonContainer type="submit" className="add">
                                            Add
                                        </ButtonContainer>
                                    </div>

                                </form>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </FormAddWrapper>

    );

}


export default FormAddProduct;

const FormAddWrapper = styled.div`
  .edit {
    font-size: medium;
  }

  .add {
    font-size: large;
  }

  textarea {
    height: 10rem;
  }
`;