import React from 'react';
import './AddNewService.css'
import { useForm } from "react-hook-form";
import axios from 'axios';

const AddNewService = () => {

const { register, handleSubmit,reset } = useForm();

  const onSubmit = data => {
    axios.post('http://localhost:5000/bookingitem',data)
    .then(res => {
       if(res.data.insertedId) {
           alert("Sucessfully added")
           reset();
       }
      })
    };

    

    return (
     <div>
       <h3 className="add-title">Add You New Service Here</h3>

    <form  className="container form-section" onSubmit={handleSubmit(onSubmit)}>
    <input placeholder="img" {...register("img")} />
    <input placeholder="title" {...register("title")} />
    <input placeholder="Place name" {...register("Place", { required: true })}/>
    <textarea className="textarea" placeholder="desc" {...register("desc")} />
    <input placeholder="price" {...register("price")} />
    <input className="service-button" type="submit" />
  </form>
    </div>
    );
};

export default AddNewService;