import React, { useEffect, useState } from 'react';

const MyOrders = () => {
     
    const [order,serorder] = useState([])

    useEffect(() => {
        fetch("http://localhost:5000/myorders")
        .then(res => res.json())
        .then(data =>serorder(data))
    },[])

    console.log(order);

    return (

        <div className="container">
      <h2 className="pt-5 pb-3 text-info">My All Orders</h2>
       <table className="table">
     <thead>
       <tr>
      <th scope="col">#</th>
      <th scope="col">Name</th>
      <th scope="col">Email</th>
      <th scope="col">Data</th>
      <th scope="col">Action</th>
       </tr>
      </thead>



      {
          order.map((order,Index) =><tbody key={order._id}>
            <tr>
            <th scope="row">{Index}</th>
            <td>{order.name}</td>
            <td>{order.email}</td>
            <td>{order.time}</td>
            <td><button className="btn btn-danger">Delete</button></td>
            </tr>
           </tbody>)
      }




    





</table>
 </div>
    );
};

export default MyOrders;