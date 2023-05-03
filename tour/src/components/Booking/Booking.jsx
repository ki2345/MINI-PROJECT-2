import React, {useState,useContext} from "react";
import "./booking.css";
import { Form, FormGroup, ListGroup, ListGroupItem, Button } from "reactstrap";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
import { BASE_URL } from "../../utils/config";
const Booking = ({ tour, avgRating }) => {
  const { price, reviews,title } = tour;
  const navigate = useNavigate();

  const {user}=useContext(AuthContext)

  const [booking, setBooking] = useState({
    userId: user && user._id,
    userEmail:user && user.email,
    tourName:title,
    fullName: '',
    phone: '',
    guestSize: 1,
    bookAt: ''
  })

  const [errors, setErrors] = useState({});


  const handleChange = e => {
      setBooking(prev => ({...prev, [e.target.id]:e.target.value}))
      const { name, value } = e.target;

      switch (name) {
        case "fullName":
          // Simple email validation regex
          const nameRegex=/^[a-zA-Z ]{2,40}$/;
          setErrors((prevErrors) => ({
            ...prevErrors,
            fullName: !nameRegex.test(value) ? "invalid name(enter only character(length>2))" : "",
          }));
          break;
        case "number":
          const numberRegex=/^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/;
          setErrors((prevErrors) => ({
            ...prevErrors,
            number: !numberRegex.test(value)? "enter a valid number" : "",
          }));
          break;

          case "Guest":
           
          setErrors((prevErrors) => ({
            ...prevErrors,
            Guest: value < 1 ? "enter a valid number" : "",
          }));
          break;

          case "date":
         const date=new Date();
         
          setErrors((prevErrors) => ({
            ...prevErrors,
            date: new Date(value) < date  ? "Invalid date" : "",
          }));
          break;
        default:
          break;
      }
  };

  const serviceFee = 500;
  const totalAmount = Number(price) * Number(booking.guestSize) + Number(serviceFee);

  //send data to the server
  const handleClick = async e => {
    e.preventDefault();
     console.log(booking);
    try{
      if(!user || user===undefined || user===null){
        return alert('Please sign in')
      }
      const res=await fetch(`${BASE_URL}/booking`,{
        method:'post',
        headers:{
          'content-type':'application/json'
        },
        credentials:'include',
        body:JSON.stringify(booking)
      })
      const result= await res.json()
      if(!res.ok){
        return alert(result.message)
      }
      navigate("/thank-you");
    }catch(err){
     alert(err.message)
    }
  };

  return (
    <div className="booking">
      <div className="booking__top d-flex align-items center justify-content-between">
        <h3>
          &#8377;{price} <span>/per person</span>
        </h3>
        <span className="tour__rating d-flex align-item-center">
          <i class="ri-star-fill"></i>
          {avgRating === 0 ? null : avgRating} ({reviews ?.length})
        </span>
      </div>

      {/* booking form start */}
          <div className="booking__form">
            <h5>Information</h5>
            <Form className="booking__info-form" onSubmit={handleClick}>
               <FormGroup>
                  <input type="text" placeholder="Full Name" id="fullName" name="fullName"
                  required onChange={handleChange}/>
                  {errors.fullName && <span className="error">{errors.fullName}</span>}

               </FormGroup>
               <FormGroup>
                  <input type="number" placeholder="Phone" id="phone" name="number"
                  required onChange={handleChange}/>
                    {errors.number && <span className="error">{errors.number}</span>}

               </FormGroup>
               <FormGroup className="d-flex align-items-center gap-3">
                  <input type="date" placeholder="" id="bookAt" name="date"
                  required onChange={handleChange}/>
                  <input type="number" placeholder="Guest" id="guestSize" name="Guest"
                  required onChange={handleChange}/>
               </FormGroup>
               {errors.date && <span className="error">{errors.date}</span>}

               {errors.Guest && <span className="error">{errors.Guest}</span>}

            </Form>
          </div>

      {/* booking form end */}

      {/* booking bottom start */}
      <div className="booking__bottom">
        <ListGroup>
          <ListGroupItem className="border-0 px-0">
            <h5 className="d-flex align-items-center gap-1">&#8377;{price} <i class="ri-close-line"></i> 1 person</h5>
            <span>&#8377;{price}</span>
          </ListGroupItem>
          <ListGroupItem className="border-0 px-0">
            <h5>Service charge</h5>
            <span>&#8377;{serviceFee}</span>
          </ListGroupItem>
          <ListGroupItem className="border-0 px-0 total">
            <h5>Total</h5>
            <span>&#8377;{totalAmount}</span>
          </ListGroupItem>
        </ListGroup>

        <Button className="btn primary__btn w-100 mt-4" onClick={handleClick}>Book Now</Button>
      </div>
    </div>
  );
};

export default Booking;
