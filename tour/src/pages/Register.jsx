import React, { useState ,useContext } from "react";
import { Container, Row, Col, Form, FormGroup, Button } from "reactstrap";
import { Link ,useNavigate} from "react-router-dom";
import "../styles/Login.css";

import registerImg from "../assets/images/register.png";
import userIcon from "../assets/images/user.png";
import {AuthContext} from './../context/AuthContext'
import {BASE_URL} from './../utils/config'; 

const Register = () => {

  const [credentials, setCredentials] = useState({
    username:"", 
    email:"",
     password:""
  });

  const {dispatch} = useContext(AuthContext)
  const navigate=useNavigate()

  const [errors, setErrors] = useState({});

  const handleChange = (e )=> {
    const { name, value } = e.target;

      setCredentials(prev => ({...prev, [e.target.id]:e.target.value}))

      switch (name) {
        case "username":
          const nameRegex=/^[a-zA-Z ]{2,40}$/;
          setErrors((prevErrors) => ({
            ...prevErrors,
            name: !nameRegex.test(value) ? "invalid name(enter only character(length>2))" : "",
          }));
          break;
        case "email":
          // Simple email validation regex
          const emailRegex = /^\S+@\S+\.\S+$/;
          setErrors((prevErrors) => ({
            ...prevErrors,
            email: !emailRegex.test(value) ? "Invalid email address" : "",
          }));
          break;
        case "password":
          setErrors((prevErrors) => ({
            ...prevErrors,
            password:
              value.length < 3 ? "length must be greater than 4 " : "",
          }));
          break;
        default:
          break;
      }
  };

  const handleClick= async e=>{
    e.preventDefault();
    try {
      const res= await fetch( `${BASE_URL}/auth/register`,{
        method:'post',
        headers:{
          'content-type':'application/json'
        },
        body:JSON.stringify(credentials)
      })
      const result = await res.json()

      if(!res.ok) alert(result.message) 

      dispatch({type:'REGISTER_SUCCESS'})
      navigate('/login')
    } catch (err) {
      alert(err.message)
    }
  }



   


  return (
    <section>
      <Container>
        <Row>
          <Col lg="8" className="m-auto">
            <div className="login__container d-flex justify-content-between">
              <div className="login__img">
                <img src={registerImg} alt="" />
              </div>

              <div className="login__form">
                <div className="user">
                  <img src={userIcon} alt="" />
                </div>
                <h2>Register</h2>

                <Form onSubmit={handleClick}>
                <FormGroup>
                    <input
                      type="email"
                      placeholder="email"
                      required
                      id="email"
                      name="email"
                      value={credentials.email}
                      onChange={handleChange}
                    />
                    {errors.email && <span className="error">{errors.email}</span>}
                  </FormGroup>
                  <FormGroup>
                    <input
                      type="text"
                      placeholder="Username"
                      required
                      id="username"
                      name="username"
                      value={credentials.username}
                      onChange={handleChange}
                    />
                    {errors.name && <span className="error">{errors.name}</span>}
                  </FormGroup>
                  <FormGroup>
                    <input
                      type="password"
                      id="password"
                      onChange={handleChange}
                      placeholder="password"
                      required
                      name="password"
                      value={credentials.password}
                    />
                    {errors.password && <span className="error">{errors.password}</span>}
                  </FormGroup>
                  
                    <Button
                      className="btn secondary__btn auth__btn"
                      type="submit"
                    >
                      Create Account
                    </Button>
                  
                </Form>

                <p>Already have an account? <Link to='/Login'>Login</Link></p>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Register;
