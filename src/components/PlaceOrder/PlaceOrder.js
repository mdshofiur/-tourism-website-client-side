import React, { useEffect,useState } from 'react';
import { useParams } from 'react-router';
import { useForm } from "react-hook-form";
import './PlaceOrder.css';

const OrderDetail = () => {

    const { serviceId } = useParams();
    const [service,setservice] = useState({})

    useEffect(()=>{
        fetch(`http://localhost:5000/bookingitem/${serviceId}`)
        .then(res => res.json())
        .then(data => setservice(data) )
    },[serviceId])


 const { register, handleSubmit,reset} = useForm();
  const onSubmit = data => console.log(data);




    return (
        <div className="container">
     <div className="order_form">
     <h2 className="title-sub">Booking Submission</h2>
     <form onSubmit={handleSubmit(onSubmit)}>
        <input placeholder="Name" {...register("name", { required: true })} />
        <input placeholder="Email"  {...register("email", { required: true })} />
        <input placeholder="Phone"  {...register("phone", { required: true })} />
        <input  placeholder="City" {...register("city", { required: true })} />
        <input  placeholder="State/Province/Region" {...register("state", { required: true })} />
        <input  placeholder="ZIP code/Postal code" {...register("zip", { required: true })} />
        <textarea  placeholder="Address" {...register("address")} />
        <textarea placeholder="Special Requirements" {...register("information")} />
        <input id="btn"  type="submit" />
       </form> 
     </div>

        <div>
        <div>
             <h5>drerewr</h5>
             <h5>trthhgsdsf</h5>
         </div>

         <div>
             <img src="" alt="" />
         </div>
        </div>

        </div>
           
            
    );
};

export default OrderDetail;