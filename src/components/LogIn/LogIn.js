import React from 'react';
import useAuth from '../../Hook/useAuth';
import {useLocation,useHistory} from 'react-router-dom'
import './LogIn.css'

const LogIn = () => {

    const {SignUpwithGoogle} = useAuth();

    const locations = useLocation();
    const history = useHistory()
    const url = locations.state?.from || '/home';

    const GoogleHandler = ()=>{
        SignUpwithGoogle()
       .then((result) => {
          history.push(url)
      })
      }


    return (
        <div className="container mt-5 mb-5">
              <h3 className="title">Log In here</h3>
             <div className="button">
             <button onClick={GoogleHandler} className="btn btn-primary">Log In with Google</button>
             </div>
        </div>
    );
};

export default LogIn;