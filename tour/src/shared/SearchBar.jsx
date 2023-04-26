import React,{useRef}from "react";
import "./Search-Bar.css";
import { Col, Form, FormGroup } from "reactstrap";
import { BASE_URL } from "./../utils/config";
import { useNavigate ,NavLink} from "react-router-dom";
const SearchBar = () => {

    const LocationRef=useRef('');
    const DistanceRef=useRef(0);
    const maxGroupSizeRef=useRef(0);
    const navigate = useNavigate();

    const searchHandler = async() => {
        const location = LocationRef.current.value;
        const distance = DistanceRef.current.value;
        const maxGroupSize = maxGroupSizeRef.current.value;

        if(location === '' || distance==='' || maxGroupSize==='')
        {
            return alert("All fields are required!");
        }

        const res = await fetch(`${BASE_URL}/tours/search/getTourBySearch?city=${location}&distance=${distance}&maxGroupSize=${maxGroupSize}`)
        if(!res.ok){
          alert('Something went wrong');
        }
        const result = await res.json();
        navigate(`/tours/search?city=${location}&distance=${distance}&maxGroupSize=${maxGroupSize}`, {state: result.data});
      }
 
  const mapPath = "/Map";

  return ( 
    <Col lg="12">
      <div className="search__bar">
        <Form className="d-flex align-items-center gap-4">
          <FormGroup className="d-flex gap-3 form__group form__group-fast">
            <span>
              <i class="ri-map-pin-line"></i>
            </span>
            <div>
              <h6>Location</h6>
              <input type="text" placeholder="where are you going ? " className="inp1" ref={LocationRef}/>
            </div>
          </FormGroup>

          <FormGroup className="d-flex gap-3 form__group form__group-fast">
            <span>
              <i class="ri-map-pin-time-line"></i>
            </span>
            <div>
              <h6>Distance</h6>
              <input type="number" placeholder="Distance (km) " className="inp1" ref={DistanceRef} />
            </div>
          </FormGroup>

          <FormGroup className="d-flex gap-3 form__group form__group-fast">
            <span>
              <i class="ri-group-line"></i>
            </span>
            <div>
              <h6>Max People</h6>
              <input type="number" placeholder="0" className="inp1" ref={maxGroupSizeRef} />
            </div>
          </FormGroup>

            <span className="serarch__icon" type="submit" onClick={searchHandler}><i class="ri-search-line"></i></span>
            <div className="map">
            <NavLink to={mapPath} 
                  className={navClass=>navClass.isActive? 'active__link':""
                  }
                  >
                  <span>OPEN MAP</span></NavLink>
            </div>
        </Form>
      </div>
    </Col>
  );
};

export default SearchBar;
