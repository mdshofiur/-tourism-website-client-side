
import './BookingItem.css'
import { useState ,useEffect} from 'react';


const BookingItem = () => {
    const [service, setservice] =  useState([]);

     useEffect(() => {
        fetch('http://localhost:5000/addnewservice')
            .then(res => res.json())
            .then(data => setservice(data));
    }, [])


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
                    <button className="btn btn-primary">Book Now</button>
                    </div>
                   </div>
                    </div>
              </div> )
          }
         </div>

                 
    );
};

export default BookingItem;