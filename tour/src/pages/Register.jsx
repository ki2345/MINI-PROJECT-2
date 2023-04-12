import React, { useState } from "react";
import { Container, Row, Col, Form, FormGroup, Button } from "reactstrap";
import { Link } from "react-router-dom";
import "../styles/Login.css";

import registerImg from "../assets/images/register.png";
import userIcon from "../assets/images/user.png";
const Register = () => {

  const [credentials, setCredentials] = useState({
    Username:undefined, 
    email:undefined,
     password:undefined
  });

  const handleChange = e => {
      setCredentials(prev => ({...prev, [e.target.id]:e.target.value}))
  };

  const handleClick= e=>{
    e.preventDefault();
  }



  return (
    <section>
      <Container>
        <Row>
          <Col lg="8" className="m-auto">
            <div className="login_container d-flex justify-content-between">
              <div className="login_img">
                <img src={registerImg} alt="" />
              </div>

              <div className="login_form">
                <div className="user">
                  <img src={userIcon} alt="" />
                </div>
                <h2>Register</h2>

                <Form onSubmit={handleChange}>
                <FormGroup>
                    <input
                      type="email"
                      placeholder="email"
                      required
                      id="email"
                      onchange={handleChange}
                    />
                  </FormGroup>
                  <FormGroup>
                    <input
                      type="text"
                      placeholder="Username"
                      required
                      id="username"
                      onchange={handleChange}
                    />
                  </FormGroup>
                  <FormGroup>
                    <input
                      type="password"
                      id="password"
                      onchange={handleChange}
                      placeholder="password"
                      required
                    />
                  </FormGroup>
                  
                    <Button
                      className="btn secondary_btn auth_btn"
                      type="submit"
                    >
                      Create Account
                    </Button>
                  
                </Form>

                <p>Already have an account? <Link to='/Login'>login</Link></p>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Register;
