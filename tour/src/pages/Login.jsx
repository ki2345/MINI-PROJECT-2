import React, { useState ,useContext} from "react";
import { Container, Row, Col, Form, FormGroup, Button } from "reactstrap";
import { Link,useNavigate } from "react-router-dom";
import "../styles/Login.css";

import loginImg from "../assets/images/login.png";
import userIcon from "../assets/images/user.png";


import {AuthContext} from './../context/AuthContext'
import {BASE_URL} from './../utils/config'; 
const Login = () => {

  const [credentials, setCredentials] = useState({
     email:undefined,
     password:undefined
  });

  const [errors, setErrors] = useState({});

  const {dispatch} = useContext(AuthContext)
  const navigate=useNavigate()

  const handleChange = e => {
    const { name, value } = e.target;
      setCredentials(prev => ({...prev, [e.target.id]:e.target.value}))

      switch (name) {
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
              value.length < 3 ? "length must be greater than 2 " : "",
          }));
          break;
        default:
          break;
      }
  };

  const handleClick=  async e=>{
    e.preventDefault();
    dispatch({type:'LOGIN_START'})
    try {
      const res =await fetch(`${BASE_URL}/auth/login`,{
        method:'post',
        headers:{
          "content-type":"application/json",

        },
        credentials:'include',
        body:JSON.stringify(credentials)
      })

      const  result  = await  res.json()
      if(!res.ok) alert(result.message)
      console.log(result.data);

      dispatch({type:'LOGIN_SUCCESS',payload:result.data})
      navigate('/')
    } catch (err) {
      dispatch({type:'LOGIN_FAILURE',payload:err.message})
    }

  }



  return (
    <section>
      <Container>
        <Row>
          <Col lg="8" className="m-auto">
            <div className="login__container d-flex justify-content-between">
              <div className="login__img">
                <img src={loginImg} alt="" />
              </div>

              <div className="login__form">
                <div className="user">
                  <img src={userIcon} alt="" />
                </div>
                <h2>Login</h2>

                <Form onSubmit={handleClick}>
                  <FormGroup>
                    <input
                      type="email"
                      placeholder="Email"
                      required
                      id="email"
                      name="email"
                      onChange={handleChange}
                    />
                    {errors.email && <span className="error">{errors.email}</span>}
                  </FormGroup>
                  <FormGroup>
                    <input
                      type="password"
                      id="password"
                      onChange={handleChange}
                      placeholder="password"
                      name="password"
                      required
                    />
                    {errors.password && <span className="error">{errors.password}</span>}
                  </FormGroup>
                    <Button
                      className="btn secondary__btn auth__btn"
                      type="submit"
                    >
                      Login
                    </Button>
                  
                </Form>

                <p>Don't have an account? <Link to='/register'>Create</Link></p>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Login;
