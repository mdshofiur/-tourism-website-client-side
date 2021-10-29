import React from 'react'; 
import {Nav} from 'react-bootstrap'
import {NavLink} from 'react-router-dom'
import useAuth from '../../Hook/useAuth';
import './Header.css'
  

const Header = () => {
  const {users,signouts} = useAuth()

    return (
        <div>
     
  <Nav className="navbar navbar-expand-lg container navbar-light p-4">
  <NavLink className="navbar-brand fs-3 fw-bold" to="/">TourTrip</NavLink>
  <button className="navbar-toggler " type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse navsection" id="navbarSupportedContent">
    <ul className="navbar-nav mr-auto ">
      <li className="nav-item">
        <NavLink className="nav-link  fw-bold" to="/home">Home</NavLink>
      </li>
      <li className="nav-item">
        <NavLink className="nav-link fw-bold" to="/myorders">My Orders</NavLink>
      </li>
      <li className="nav-item">
        <NavLink className="nav-link fw-bold" to="/allorders">All Orders</NavLink>
      </li>
      <li className="nav-item">
        <NavLink className="nav-link fw-bold" to="/addnewservice">Add New Service</NavLink>
      </li>
      <li className="nav-item">
        <NavLink className="nav-link fw-bold" to="/login">Log In</NavLink>
      </li>
      <li className="nav-item">
        <NavLink className="nav-link fw-bold" to="">{users.displayName || users.email}</NavLink>
      </li>
       <li>
       <NavLink to=""className="p-3">
       {users?.email  && <button className="mt-2 text-danger border-0 fw-bold master" onClick={signouts}>Log Out</button>}</NavLink>
       </li>
    </ul>

  </div>
</Nav>


        </div>
    );
};

export default Header;