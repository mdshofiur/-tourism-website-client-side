import React from 'react';
import './AddNewService.css'
import { useForm } from "react-hook-form";


const AddNewService = () => {

const { register, handleSubmit, formState: { errors } } = useForm();
  const onSubmit = data => console.log(data);


    return (
     <div>
       <h3>Add You New Service Here</h3>

    <form className="container" onSubmit={handleSubmit(onSubmit)}>
    <input placeholder="img" {...register("img")} />
    <input placeholder="title" {...register("title")} />
    <input placeholder="Place name" {...register("Place", { required: true })} />
    {errors.exampleRequired && <span>This field is required</span>}
    <input placeholder="desc" {...register("desc")} />
    <input placeholder="price" {...register("price")} />
    <input className="service-button" type="submit" />
  </form>
    </div>
    );
};

export default AddNewService;