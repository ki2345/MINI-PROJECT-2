import React from "react";
import "../styles/tour-details.css";
import { Container, Row, Col, Form, ListGroup } from "reactstrap";
import { useParams } from "react-router-dom";
import tourData from "../assets/Data/tour";
import calculateAvgRating from "../utils/avgRating";

const TourDetails = () => {
  const { id } = useParams();

  //this is a static data later we will call our API and load our data from database
  const tour = tourData.find((tour) => tour.id === id);

  //destructive properties from tour object
  const {
    photo,
    title,
    desc,
    price,
    address,
    reviews,
    city,
    distance,
    maxGroupSize,
  } = tour;

  const { totalRating, avgRating } = calculateAvgRating(reviews);
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
                    <span className="tour_rating d-flex align-item-center gap-1">
                      <i
                        class="ri-star-fill"
                        style={{ color: "var(--secondary-color)" }}
                      ></i>
                      {calculateAvgRating === 0 ? null : avgRating}
                      {totalRating === 0 ? (
                        "Not Rated"
                      ) : (
                        <span>({reviews?.length})</span>
                      )}
                    </span>

                    <span>
                      <i class="ri-map-pin-line"></i>
                      {address}
                    </span>
                  </div>

                  <div className="tour_extra-details">
                    <span>
                      <i class="ri-map-pin-line"></i>
                      {city}
                    </span>
                    <span>
                      <i class="ri-money-dollar-circle-line"></i>${price}
                    </span>
                    <span>
                      <i class="ri-group-line"></i>
                      {maxGroupSize}
                    </span>
                  </div>
                  <h5>Description</h5>
                  <p>{desc}</p>
                </div>

                {/* tour reviews section starts  */}

                <div className="tour_reviews mt-4">
                  <h4>Reviews({reviews?.length} reviews)</h4>

                  <form>
                    <div className="d-flex align-items-center gap-3 mb-4 rating_group">
                      <span>1 <i class="ri-star-s-fill"></i></span>
                      <span>2 <i class="ri-star-s-fill"></i></span>
                      <span>3 <i class="ri-star-s-fill"></i></span>
                      <span>4 <i class="ri-star-s-fill"></i></span>
                      <span>5 <i class="ri-star-s-fill"></i></span>
                      </div>

                      <div className="review_input">
                        <input type="text" placeholder="share your thoughts" />
                        <button className="btn primary_btn text-white" type="submit">submit</button>
                      </div>
                  </form>
                </div>

                {/* tour reviews section ends */}
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default TourDetails;
