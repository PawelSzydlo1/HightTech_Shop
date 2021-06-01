import React, {useState} from 'react';
import Modal from '@material-ui/core/Modal';
import styled from "styled-components";

export default function ModalAllert({info,open,handleClose}) {

    return (
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="simple-modal-title"
                aria-describedby="simple-modal-description"
            >

                <ModalWrapper>
                <div className="modal_style">
                    <h2 id="simple-modal-title">ALERT</h2>
                    <p id="simple-modal-description">
                        {info}
                    </p>

                    <div className="button_exit_container">
                        <button className="btn btn-primary" onClick={handleClose}>Close</button>
                    </div>
                </div>
                </ModalWrapper>
            </Modal>
    )
}

const ModalWrapper = styled.div`


  
  .modal_style{
    position: absolute;
    left: 35%;
    top: 35%;
    width: 400px;

    padding: 0 1em 1em 1em;
    background-color: #fff;
    border: 4px solid #000;
    box-shadow: 5px 5px 5px rgba(68,68,68,0.3);
    border-radius: 10px;
  }
  #simple-modal-title{
    padding: 0.15em 0;
  }

  .button_exit_container{
    margin-top: 1em;
    display: flex;
    justify-content: space-around;
  }
  
`