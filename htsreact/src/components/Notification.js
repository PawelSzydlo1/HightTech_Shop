import styled from "styled-components";
import {useEffect, useState} from "react";
import axios from "axios";

const api = axios.create({
    baseURL: `http://localhost:8080`
})

export default function Notification() {
    const [status, setStatus] = useState(false);
    const [noti, setNoti] = useState("")
    const [timer, setTimer] = useState(false)
    const [spamer, setSpamer]=useState([
        "Tylko dziś SUPER okazja! Z kodem: !WYPRZ! 10% zniżki",
        "Przy zakupie 3 rzeczy za minimum 2000zł => Najtańsza za darmo",
        "Przy zakupie Laptopa => pendrive GRATIS"
    ])
    const changeStatus = (stat) => {
        setStatus(stat);
    }
    const changeTimer = () => {
        if (timer === true) {
            changeStatus(false);
            setTimer(false);

        } else {
            getNotification().then(()=>{
                console.log(noti);
                if(noti!==""){
                changeStatus(true);
                }
            });
            setTimer(true);


        }
    }


    const getNotification = async () => {
        await api.get("/rabbit/receiveNotification").then(response => {
            if(response.data!=="")
            setNoti(response.data)
            else{
                changeStatus(false);
            }
        })

    }

    const sendNotification = () =>{
        api.get(`/rabbit/addNotification?message=${randSpamer()}`)
    }


    const randSpamer = () =>{
        return  spamer[Math.floor(Math.random() * spamer.length)];
    }

    useEffect(() => {

        setTimeout(changeTimer,15000);
        sendNotification();


    }, [timer]);


    return (

        <NotificationWrapper status={status}>
            <div>
                <div className="toastHeader">
                    <strong className="me-auto">Super Okazja !!!</strong>
                    <i onClick={() => changeStatus(false)} className="far fa-times-circle"/>
                </div>
                <div className="toastBody">
                    <p>{noti}</p>
                    <div className="mt-2 pt-2 d-flex justify-content-end">
                        <button className="btn btn-secondary btn-sm"
                                onClick={() => changeStatus(false)}>Close
                        </button>
                    </div>
                </div>
            </div>

        </NotificationWrapper>


    )
}


const NotificationWrapper = styled.div`
  width: 20%;
  position: absolute;
  top: 1.5em;
  right: 1.5em;
  z-index: 5;
  background-color: rgb(252, 241, 234);
  border-radius: 0.25em;
  padding: 0.5em;
  border: 1px solid black;
  display: ${(props) => props.status ? "block" : "none"};

  .toastHeader {
    display: flex;
    justify-content: space-around;
  }

  i {
    cursor: pointer;
  }

  .toastBody > p {
    word-wrap: break-word;
  }


`
