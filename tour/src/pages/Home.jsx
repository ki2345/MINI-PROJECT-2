import React from "react";
import "../styles/home.css";
import { container, Row, Col } from "reactstrap";
import heroImg from "../assets/images/hero-img01.jpg";
import heroImg02 from "../assets/images/hero-img02.jpg";
import heroVideo from "../assets/images/hero-video.mp4";
import experienceImg from  "../assets/images/experienceImg.png"
import Subtitle from '../shared/Subtitle';
import worldImg from '../assets/images/world.png';
import SearchBar from '../shared/SearchBar'
import ServiceList from "../services/ServiceList";
import FeaturedTourList from "../components/Featured-Tours/FeaturedTourList";
import MasonryImagesGallery from "../components/Image-gallery/MasonryImagesGallery";
import Testimonials from "../components/Testimonial/Testimonials";

const Home = () => {
  return (
    <div>
      {/* hero section start */}
      <section>
        <container>
          <Row>
            <Col lg='6'>
              <div className="hero_content">
                <div className="hero_subtitle d-flex align-items-center">
                  <Subtitle subtitle={"know Before You Go"}/>
                  <img src={worldImg} alt="" />
                </div>
                <h6>Traveling opens the door to creating {" "}<span className="highlight">memories</span></h6>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores perferendis voluptatum, eum expedita rem saepe dolorem, maxime quia aliquid incidunt, velit eligendi vero a assumenda architecto nam ratione minima culpa!</p>
              </div>
            </Col> 

            <Col lg='2'>
              <div className="hero_img-box">
                <img src={heroImg} alt="" />
                </div>  
            </Col> 
            <Col lg='2'>
              <div className="hero_img-box mt-4">
                <video src={heroVideo} alt="" controls/>
                </div>  
            </Col> 
            <Col lg='2'>
              <div className="hero_img-box mt-5">
                <img src={heroImg02} alt="" />
                </div>  
            </Col> 

            <SearchBar/>
          </Row>
        </container>
      </section>
      {/* hero section ends */}

      <section>
        <container>
          <Row>
            <Col lg='3'>
              <h5 className="services_subtitle">What we Serve</h5>
              <h2 className="services_title">We Offer Our Best Services</h2>
            </Col>
            <ServiceList/>
          </Row>
        </container>
      </section>

      {/* featured tour section starts */}
      <section>
        <container>
          <Row>
            <Col lg='12' className="mb-5">
                <Subtitle subtitle={"Explore"}/>
                <h2 className="featured_tour-title">Our Featured Tours</h2> 
            </Col>
            <FeaturedTourList/>
          </Row>
        </container>
      </section>

      {/* featured tour section ends */}
      {/* experience section start */}
      <section>
        <container>
          <Row>
            <Col lg='6'>
                <div className="experience_content">
                   <Subtitle subtitle={'Experience'} />

                   <h2>With our all experience <br />we will serve you
                   </h2>
                   <p>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ad, natus?
                    <br />
                    Lorem ipsum dolor, sit amet consectetur adipisicing.
                   </p>
                </div>

                <div className="counter_wrapper d-flex align-items-center gap-5">
                  <div className="counter_box">
                    <span>12k+</span>
                    <h6>Successful trip</h6>
                  </div>
                  <div className="counter_box">
                    <span>2k+</span>
                    <h6>Regular clients</h6>
                  </div>
                  <div className="counter_box">
                    <span>15</span>
                    <h6>Years experience</h6>
                  </div>
                </div>
            </Col>
            <Col lg='6'>
              <div className="experience_img">
                <img src={experienceImg} alt="" />
              </div>
            </Col>
          </Row>
        </container>
      </section>
      {/* experience section end */}
      {/* gallery section start */}
      <section>
        <container>
         <Row>
          <Col lg='12'>
            <Subtitle subtitle={'Gallery'}/>
            <h2 className="gallery_title">
              Visit our customers tour gallery
            </h2>
          </Col>
          <Col lg='12'>
              <MasonryImagesGallery/>
          </Col>
         </Row>
        </container>
      </section>
      {/* gallery section end */}
      {/* testimonial section start */}
      <section>
        <container>
          <Row>
            <Col lg='12'>
              <Subtitle subtitle={'Fans Love'}/>
              <h2 className="testimonial_title">
                What our fans say about us
              </h2>
            </Col>
            <Col lg='12'>
              <Testimonials/>
            </Col>
          </Row>
        </container>
      </section>
      {/* testimonial section end */}
    </div>
  );
};

export default Home;
