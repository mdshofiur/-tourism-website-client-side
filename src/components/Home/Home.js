import React from 'react';
import {Carousel} from 'react-bootstrap'
import BookingItem from '../BookingItem/BookingItem';


const Home = () => {
    
    return (

        <div>

            <div className="slider">
            <Carousel>
            <Carousel.Item interval={3000}>
            <img className="d-block w-100" src="https://i.ibb.co/kg4nWKh/img-hero-1.jpg" alt="First slide"/>
            <Carousel.Caption>
            <h2>Your Whole vacation Starts here</h2>
            <p>We have the the PERFECT vacation condo or private beach hous rental you've been</p>
          </Carousel.Caption>
          </Carousel.Item>

         <Carousel.Item>
         <img className="d-block w-100" src="https://i.ibb.co/Z1W8XBz/img-hero-2.jpg" alt="Second slide"/>
          <Carousel.Caption>
          <h2>Relax &amp; Enjoy In Style</h2>
          <p>Our first trip we did not have her around helping us and it was a complete disaster.</p>
          </Carousel.Caption>
          </Carousel.Item>
          </Carousel>
         </div>

            <div className="mt-5">
               <BookingItem></BookingItem>
            </div>
        
        </div>
    );
};

export default Home;