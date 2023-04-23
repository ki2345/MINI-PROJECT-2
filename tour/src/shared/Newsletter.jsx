import React from 'react'
import './newsletter.css'

import {Container,Row,Col} from 'reactstrap';
import grpTourist from '../assets/images/newspic.png';

const Newsletter = () => {
  return (
  <section className="newsletter">
    <Container>
        <Row>
            <Col lg='6'>
                <div className="newsletter__content">
                    <h2>Subscribe now to get useful traveling information.</h2>
                    <div className="newsletter__input">
                        <input type="email" placeholder='Enter your email' className='inp'/>
                        <button className="btn newsletter__btn">Subscribe</button>
                    </div>
                    <p>To connect with us in the future, kindly subscribe to our website.</p>
                </div>
            </Col>
            <Col lg="6">
                <div className='newsletter__img'>
                  <img src={grpTourist} alt=""/>
                </div>
            </Col>
        </Row>
    </Container>
  </section>
  )
}

export default Newsletter;
