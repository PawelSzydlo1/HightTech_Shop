import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Registration from "../views/Registration";
import {ButtonContainer} from "./Button";

function SuccessfulRegistration(){
    const [isSubmitted, setIsSubmitted] = useState(false);

    function submitForm() {
        setIsSubmitted(true);
    }

    return (
        <>

            {!isSubmitted ? (
                <Registration submitForm={submitForm} />
            ) : (
                <div className='container align-content-center d-flex justify-content-center h-75'>
                    <Link to='/successfulLogin'>
                        <ButtonContainer>Your account was created successfully</ButtonContainer>
                    </Link>
                </div>
            )}


        </>
    );
};

export default SuccessfulRegistration