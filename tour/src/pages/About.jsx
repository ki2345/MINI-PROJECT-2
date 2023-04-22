import React from "react";
import { Container, Row, Col } from "reactstrap";
import "../styles/about.css";
import GifTour from "../assets/images/Gif-tours-unscreen.gif";
import Newsletter from "../shared/Newsletter";

const About = () => {
  return (
    <>
      <section>
        <Container>
          <Row>
            <h1 className="head">
              About <span>YatraSphere</span>
            </h1>
            <Col lg="6">
              <div>
                <img src={GifTour} alt="" width="600px" height="500px" />
              </div>
            </Col>
            <Col lg="6">
              <div>
                <p>
                  YatraSphere is an online platforms that provide
                  information and services related to travel and tourism. This
                  website offers a range of services, from hotel
                  bookings to vacation packages, travel guides, and even
                  customized itineraries. They have become an essential tool for
                  travelers who want to plan their trips conveniently and
                  efficiently. 
                  <br />
                  <br />
                  One of the key features of this website is the ability to search and compare different travel
                  options. These websites often have advanced search functions
                  that allow users to filter their searches based on their
                  preferences, such as price range, destination, dates, and
                  accommodations. This makes it easy for travelers to find the
                  best deals and options that suit their needs. 
                  <br />
                  <br />
                  Another important feature is the
                  availability of reviews and ratings. This platform allows
                  users to share their experiences and rate the services they
                  have used. This can be extremely helpful for travelers who
                  want to make informed decisions and avoid unpleasant
                  surprises. Reading reviews and ratings can also help travelers
                  discover new and interesting places to visit, and avoid
                  overcrowded or overrated destinations. 
                  <br />
                  <br />
                  This website also offers a wide range of resources and information
                  to help travelers plan their trips. This can include travel
                  guides, maps, and articles on various destinations and
                  activities. Some websites even offer customized itineraries
                  based on a traveler's preferences and interests. This can be
                  particularly helpful for travelers who want to explore new
                  destinations but are not sure where to start. 
                  <br />
                  <br />
                  Finally, tours and travels websites have become increasingly important during
                  the COVID-19 pandemic. Many websites now provide information
                  on travel restrictions, health and safety protocols, and
                  vaccination requirements. This information can help travelers
                  make informed decisions about their travel plans and stay safe
                  while on the road. In addition, many websites have implemented
                  flexible booking policies to accommodate travelers who need to
                  change their plans due to COVID-19-related issues. 
                  <br />
                  <br />
                  Overall, tours and travels websites have revolutionized the way people
                  plan and book their trips. They offer a wealth of information
                  and services that make travel planning more accessible,
                  efficient, and enjoyable. Whether you're a seasoned traveler
                  or planning your first trip, tours and travels websites can
                  help you explore the world with ease.
                </p>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      <Newsletter/>
    </>
  );
};

export default About;
