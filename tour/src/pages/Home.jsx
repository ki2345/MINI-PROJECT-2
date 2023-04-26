import React from "react";
import "../styles/home.css";
import { Container, Row, Col } from "reactstrap";
// import heroImg from "../assets/images/hero-img01.jpg";
import img01 from "../assets/images/dubai.png";
import heroImg02 from "../assets/images/backwater.jpg";
import heroVideo from "../assets/images/title-artist.mp4";
import experienceImg from  "../assets/images/experienceImg.png"
import Subtitle from './../shared/Subtitle';
import worldImg from '../assets/images/world.png';
import SearchBar from '../shared/SearchBar'
import ServiceList from "../services/ServiceList";
import FeaturedTourList from "../components/Featured-Tours/FeaturedTourList";
import MasonryImagesGallery from "../components/Image-gallery/MasonryImagesGallery";
import Testimonials from "../components/Testimonial/Testimonials";
import Newsletter from "../shared/Newsletter";
import Googlemap from "../components/Map/Maps";
import {Routes,Route,useNavigate,NavLink} from 'react-router-dom';

const Home = () => {
  

  return (
    <div>
      {/* hero section start */}
      <section>
        <Container>
          {/* <button onClick={<Googlemap/>} className='bg-success'>Click for location</button> */}
          <Row>
            <Col lg='6'>
              <div className="hero__content">
                <div className="hero__subtitle d-flex align-items-center">
                  <Subtitle subtitle={"know Before You Go"}/>
                  <img src={worldImg} alt="" />
                </div>
                <h1>Travel smarter, not harder, with <span className="highlight">YatraSphere!</span></h1>
                <p>It is your ultimate travel partner, dedicated to providing you with the best experiences possible. We understand that travel is not just about visiting a destination, but about creating memories that will last a lifetime. That's why we offer a wide range of tours and travel packages to suit every kind of traveler. </p>
              </div>
            </Col> 

            <Col lg='2'>
              <div className="hero__img-box ">
                <img src={img01} alt="" />
                </div>  
            </Col> 
            <Col lg='2'>
              <div className="hero__img-box hero__video-box mt-4">
                <video src={heroVideo} alt="" controls/>
                </div>  
            </Col> 
            <Col lg='2'>
              <div className="hero__img-box mt-5">
                <img src={heroImg02} alt="" />
                </div>  
            </Col> 
          </Row>
            <SearchBar/>
             
        </Container>
      </section>
      {/* hero section ends */}

      <section>
        <Container>
          <Row>
            <Col lg='3'>
              <h5 className="services__subtitle">What we Serve</h5>
              <h2 className="services__title">We Offer Our Best Services</h2>
            </Col>
            <ServiceList/>
          </Row>
        </Container>
      </section>

      {/* featured tour section starts */}
      <section>
        <Container>
          <Row>
            <Col lg='12' className="mb-5">
                <Subtitle subtitle={"Explore"}/>
                <h2 className="featured__tour-title">Our Featured Tours</h2> 
            </Col>
            <FeaturedTourList/>
          </Row>
        </Container>
      </section>

      {/* featured tour section ends */}
      {/* experience section start */}
      <section>
        <Container>
          <Row>
            <Col lg='6'>
                <div className="experience__content">
                   <Subtitle subtitle={'Experience'} />

                   <h2>With our all experience <br />we will serve you
                   </h2>
                   <p>
                      We have conducted many tours successfully without any hurdles.
                    <br />
                      Customers are happy with our services and we promise to continue this forever.
                   </p>
                </div>

                <div className="counter__wrapper d-flex align-items-center gap-5">
                  <div className="counter__box">
                    <span>2k+</span>
                    <h6>Successful trip</h6>
                  </div>
                  <div className="counter__box">
                    <span>1k+</span>
                    <h6>Regular clients</h6>
                  </div>
                  <div className="counter__box">
                    <span>3</span>
                    <h6>Years experience</h6>
                  </div>
                </div>
            </Col>
            <Col lg='6'>
              <div className="experience__img">
                <img src={experienceImg} alt="" />
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      {/* experience section end */}
      {/* gallery section start */}
      <section>
        <Container>
         <Row>
          <Col lg='12'>
            <Subtitle subtitle={'Gallery'}/>
            <h2 className="gallery__title">
              Visit our customers tour gallery
            </h2>
          </Col>
          <Col lg='12'>
              <MasonryImagesGallery/>
          </Col>
         </Row>
        </Container>
      </section>
      {/* gallery section end */}
      {/* testimonial section start */}
      <section>
        <Container>
          <Row>
            <Col lg='12'>
              <Subtitle subtitle={'Fans Love'}/>
              <h2 className="testimonial__title">
                What our fans say about us
              </h2>
            </Col>
            <Col lg='12'>
              <Testimonials/>
            </Col>
          </Row>
        </Container>
      </section>
      {/* testimonial section end */}
      <Newsletter/>
    </div>
  );
};

export default Home;
