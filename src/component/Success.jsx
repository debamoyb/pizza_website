import React from 'react';
import "./css/success.css";
import { useNavigate } from 'react-router';

const Sucess = () => {
const navigate = useNavigate()
    setTimeout(() => {
       
        navigate("/")
        
    },5000)
  return (
    <div className='order_sucess_container' style={{color : "#d2401e" , textAlign: "center", marginTop: "5em", marginBottom : "5em"}}>
        <h1>Your order has been sucessfully placed</h1>
        <h2 style={{marginTop: "1em"}}>It wil be Delivered Shortly, Thank You</h2>
        <div className='order_gif'>
            <img src='https://kungspizzakebab.fi/assets/images/foodorder.gif'
            alt='order completed' />
        </div>
    </div>
  )
}

export default Sucess;