import React from "react";
import "../styles/home.css";
import { container, Row, Col } from "reactstrap";
import heroImg from "../assets/images/hero-img01.jpg";
import heroImg02 from "../assets/images/hero-img02.jpg";
import heroVideo from "../assets/images/hero-video.mp4";
import Subtitle from '../shared/Subtitle';
import worldImg from '../assets/images/world.png';
import SearchBar from '../shared/SearchBar'

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
                <h1>Traveling opens the door to creating {" "}<span className="highlight">memories</span></h1>
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
    </div>
  );
};

export default Home;
