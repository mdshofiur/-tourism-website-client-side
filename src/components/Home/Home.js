import React from 'react';
import {Carousel} from 'react-bootstrap'
import BookingItem from '../BookingItem/BookingItem';
import {Container,Col,Card,Row,Button} from 'react-bootstrap'
import './Home.css'
import { RiUserStarLine } from 'react-icons/ri';
import { RiUserHeartLine } from 'react-icons/ri';
import { HiUsers } from 'react-icons/hi';
import { RiUserVoiceLine } from 'react-icons/ri';


const Home = () => {
    
    return (

        <div>

           {/* Slider Item Section */}

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
     

         <div className="container mt-5">
             <h1 className="ms-3 text-success">Our Popular Tours</h1>
         </div>

     {/* Booking Item Section */}

            <div className="mt-5">
               <BookingItem></BookingItem>
            </div>
      

         {/*  Item Section */}

            
            <div className="TourTrip">
            <h4 className="title-one">TOURTRIP SPECIALS</h4>
            <h1 className="title-two">Why Travel with TourTrip?</h1>
            </div>


       <div className="container">
        
       <Row xs={1} md={3} className="g-4">
 
    <Col>
      <Card>
        <Card.Img variant="top" src="https://smartdemowp.com/travio/wp-content/uploads/2021/02/feature-1.jpg" />
        <Card.Body>
        <div className="icons"><RiUserVoiceLine></RiUserVoiceLine></div>
          <Card.Title className="one">2000+ Our Worldwide Guide</Card.Title>
          
          <Card.Text>
            This is a longer card with supporting text below as a natural
            lead-in to additional content. This content is a little bit longer.
          </Card.Text>
        </Card.Body>
      </Card>
    </Col>

    
    <Col>
      <Card>
        <Card.Img variant="top" src="https://smartdemowp.com/travio/wp-content/uploads/2021/02/feature-2.jpg" />
        <Card.Body>
          <Card.Title>100% Trusted Tour Agency</Card.Title>
          <div className="icons">  <HiUsers></HiUsers></div>
          <Card.Text>
            This is a longer card with supporting text below as a natural
            lead-in to additional content. This content is a little bit longer.
          </Card.Text>
        </Card.Body>
      </Card>
    </Col>

    
    <Col>
      <Card>
        <Card.Img variant="top" src="https://smartdemowp.com/travio/wp-content/uploads/2021/02/feature-3.jpg" />
        <Card.Body>
          <Card.Title>12+ Years of Travel Experience</Card.Title>
          <div className="icons">  <RiUserHeartLine></RiUserHeartLine></div>
          <Card.Text>
            This is a longer card with supporting text below as a natural
            lead-in to additional content. This content is a little bit longer.
          </Card.Text>
        </Card.Body>
      </Card>
    </Col>

        
    <Col>
      <Card>
        <Card.Img variant="top" src="https://smartdemowp.com/travio/wp-content/uploads/2021/02/feature-4.jpg" />
        <Card.Body>
          <Card.Title>98% of Our Travelers are Happy</Card.Title>
       
          <div className="icons"> <RiUserStarLine></RiUserStarLine></div>
          <Card.Text>
            This is a longer card with supporting text below as a natural
            lead-in to additional content. This content is a little bit longer.
          </Card.Text>
        </Card.Body>
      </Card>
    </Col>

</Row>



            </div>





      {/* Blog Section */}

            <div className="mt-5">
 <h1 className="container text-primary">Featured Blog &amp; News
</h1>
<Container className="mt-5">
<Row xs={1} md={3} sm={2} className="g-4">
<Col>
<Card>
<Card.Img variant="top" src="https://demo2.pavothemes.com/triply/wp-content/uploads/2020/11/blog-2-1000x565.jpg" />
<Card.Body>
<Card.Title>The Surfing Man Will Blow Your Mind</Card.Title>
<Card.Text>
<p className="text-start"> A wonderful serenity has taken possession of my entire soul, like these sweet mornings of spring which I enjoy with my whole heart. I am alone.</p>
<button className="btn btn-primary ms-5 ps-5 pe-5">Learn More...</button>
</Card.Text>
</Card.Body>
</Card>
</Col>

<Col>
<Card>
<Card.Img variant="top" src="https://demo2.pavothemes.com/triply/wp-content/uploads/2020/11/blog-3-1000x565.jpg" />
<Card.Body>
<Card.Title>Separated they live in Bookmarksgrove</Card.Title>
<Card.Text>
<p className="text-start"> that I neglect my talents. I should be incapable of drawing a single stroke at the present moment; and yet I feel that I never was a greater artist than now..</p>
<button className="btn btn-primary ms-5 ps-5 pe-5">Learn More...</button>
</Card.Text>
</Card.Body>
</Card>
</Col>

<Col>
<Card>
<Card.Img variant="top" src="https://demo2.pavothemes.com/triply/wp-content/uploads/2020/11/blog-7-1000x565.jpg" />
<Card.Body>
<Card.Title>Pityful a rethoric question ran</Card.Title>
<Card.Text>
<p className="text-start"> like these sweet mornings of spring which I enjoy with my whole heart. I am alone, and feel the charm of existence in this spot, which was created artist than now. </p>
<button className="btn btn-primary ms-5 ps-5 pe-5">Learn More...</button>
</Card.Text>
</Card.Body>
</Card>
</Col>

<Col>
<Card>
<Card.Img variant="top" src="https://demo2.pavothemes.com/triply/wp-content/uploads/2020/11/blog-8-1000x565.jpg" />
<Card.Body>
<Card.Title>Change your place and get the fresh air</Card.Title>
<Card.Text>
<p  className="text-start">A wonderful serenity has taken possession of my entire soul, like these sweet mornings of spring which I enjoy with my whole heart. I am alone</p>
<button className="btn btn-primary ms-5 ps-5 pe-5">Learn More...</button>
</Card.Text>
</Card.Body>
</Card>
</Col>

</Row>
</Container>
</div>





</div>



    );
};

export default Home;