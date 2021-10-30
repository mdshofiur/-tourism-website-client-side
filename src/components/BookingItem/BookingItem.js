
import './BookingItem.css'
import { useState ,useEffect} from 'react';
import {Link} from 'react-router-dom'
import {Spinner} from 'react-bootstrap'
import useAuth from '../../Hook/useAuth';

const BookingItem = () => {
    
    const [service, setservice] =  useState([]);

     const {isLoading} = useAuth();

     useEffect(() => {
        fetch('https://floating-springs-07848.herokuapp.com/bookingitem')
            .then(res => res.json())
            .then(data => setservice(data));
    }, [])


    if(isLoading){
        return (
           <div className="home-spinner">
           <Spinner animation="border" variant="primary" />
            </div>
        )

    }

    return (

        <div className="container booking">
          {
              service.map(service => <div key={service._id}>
                 
                 <div className="booking-item">
                <div>
               <img src={service.img} alt="" />
                <h4>{service.title.slice(0,27)}</h4>
                <h5 className="location">{service.Place}</h5>
                <p>{service.desc.slice(0,100)}</p>
               </div>
                   <div className="book-section">
                    <div>
                    <h5 className="price text-danger">From ${service.price}</h5>
                    </div>
                    <div className="btn-section">
                    <Link to={`/placeorder/${service._id}`}>
                    <button className="btn btn-primary">Book Now</button>
                    </Link>
                    </div>
                   </div>
                    </div>
              </div> )
          }
         </div>

                 
    );
};

export default BookingItem;