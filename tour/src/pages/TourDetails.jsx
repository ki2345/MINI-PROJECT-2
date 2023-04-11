import React from "react";
import "../styles/tour-details.css";
import { Container, Row, Col, Form, ListGroup } from "reactstrap";
import { useParams } from "react-router-dom";
import tourData from "../assets/Data/tour";


const TourDetails = () => {
  const { id } = useParams();

  //this is a static data later we will call our API and load our data from database
  const tour = tourData.find((tour) => tour.id === id);

  //destructive properties from tour object
  const { photo, title, desc, price, reviews, city, distance, maxGroupSize } =
    tour;
  return (
    <>
      <section>
        <Container>
          <Row>
            <Col lg="8">
              <div className="tour_content">
                <img src={photo} alt="" />

                <div className="tour_info">
                  <h2>{title}</h2>

                  <div className="d-flex align-items-center gap-5">
                    

                
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default TourDetails;
