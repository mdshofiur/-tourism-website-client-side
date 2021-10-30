import React, { useEffect,useState } from 'react';
import { useParams } from 'react-router';
import { useForm } from "react-hook-form";
import './PlaceOrder.css';
import axios from 'axios';
const OrderDetail = () => {

    const { serviceId } = useParams();
    const [service,setservice] = useState({})

    useEffect(()=>{
        fetch(`http://localhost:5000/bookingitem/${serviceId}`)
        .then(res => res.json())
        .then(data => setservice(data) )
    },[serviceId])


      const { register, handleSubmit,reset} = useForm();
      const onSubmit = data =>{
        data.status = "pending";
        data.time = new Date().toLocaleDateString();
        axios.post('http://localhost:5000/myorders',data)
        .then(res => {
           if(res.data.insertedId) {
               alert("Sucessfully added")
               reset();
           }
          })
     }




    return (
        <div className="container">
     <div className="order_form">
     <h2 className="title-sub">Booking Submission</h2>
     <form onSubmit={handleSubmit(onSubmit)}>
        <input placeholder="Name" {...register("name", { required: true })} />
        <input placeholder="Email"  {...register("email")} />
        <input placeholder="Phone"  {...register("phone")} />
        <input  placeholder="City" {...register("city")} />
        <input  placeholder="State/Province/Region" {...register("state")} />
        <input  placeholder="ZIP code/Postal code" {...register("zip")} />
        <textarea  placeholder="Address" {...register("address")} />
        <textarea placeholder="Special Requirements" {...register("information")} />
        <input id="btn"  type="submit" />
       </form> 
     </div>

        <div className="sidebar">
        <h3 className="review-title">Your Booking</h3>
        <div className="sidebar-content">
            <img src={service?.img} alt="" />
             <h5 className="first-title">{service?.title}</h5>
             <h5>{service?.Place}</h5>
            <p></p>
         </div>

        
        </div>

        </div>
           
            
    );
};

export default OrderDetail;