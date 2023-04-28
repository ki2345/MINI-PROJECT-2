import React from 'react';
import './footer.css';
import { Container, Row , Col ,ListGroup ,ListGroupItem} from 'reactstrap';
import { Link } from 'react-router-dom';
import logo from "../../assets/images/logo.png";
// import scroll from 'react-scroll-to-top';

const quick__links =[
  {
    path:'/home',
    display:'Home'
  },
  {
    path:'/about',
    display:'About'
  }
];

const quick__links2 =[
  {
    path:'/gallery',
    display:'Gallery'
  },
  {
    path:'/tours',
    display:'Tours'
  }
];

const Footer = () => {
  const year =new Date().getFullYear
  return <footer className="footer">
    <Container>
      <Row>
       <Col lg='3'>
        <div className="logo">
          <img src={logo} alt="" />
          <p>YatraSphere is user-friendly website. If you have any query, contact us on below social media apps.</p>

          <div className="social__links d-flex align-items-center gap-4">
            <span>
              <Link to='https://www.youtube.com/'><i class="ri-youtube-line"></i></Link>
            </span>
            <span>
              <Link to='https://github.com/'><i class="ri-github-fill"></i></Link>
            </span>
            <span>
              <Link to='https://www.facebook.com/'><i class="ri-facebook-circle-line"></i></Link>
            </span>
            <span>
              <Link to='https://www.instagram.com/accounts/login/'><i class="ri-instagram-line"></i></Link>
            </span>

          </div>
        </div>
        </Col> 
        <Col lg='3'>
          {/* <scroll/> */}
          <h5 className='footer__link-title'>Discover</h5>
          <ListGroup className='footer__quick-links'>
            {
              quick__links.map((item,index)=>(<ListGroupItem key={index} className='ps-0 border-0'><Link to={item.path}>{item.display}</Link></ListGroupItem>))
            }
          </ListGroup>
        </Col>
        <Col lg='3'>
        <h5 className='footer__link-title'>Quick Links</h5>
          <ListGroup className='footer__quick-links'>
            {
              quick__links2.map((item,index)=>(<ListGroupItem key={index} className='ps-0 border-0'><Link to={item.path}>{item.display}</Link></ListGroupItem>))
            }
          </ListGroup>
        </Col>
        <Col lg='3'>
        <h5 className='footer__link-title'>Contact</h5>
          <ListGroup className='footer__quick-links'>
              <ListGroupItem  className='ps-0 border-0 d-flex align-items-center gap-3'>
                <h6 className='mb-0 d-flex align-items-center gap-2'>
                  <span><i class="ri-map-pin-line"></i></span>
                  Address:
                </h6>
                <p className='mb-0'>Uttar Pradesh, India</p>
              </ListGroupItem>

              <ListGroupItem  className='ps-0 border-0 d-flex align-items-center gap-3'>
                <h6 className='mb-0 d-flex align-items-center gap-2'>
                  <span><i class="ri-mail-line"></i></span>
                  Email:
                </h6>
                <p className='mb-0'>rishikasingh570@gmail.com</p>
              </ListGroupItem>

              <ListGroupItem  className='ps-0 border-0 d-flex align-items-center gap-3'>
                <h6 className='mb-0 d-flex align-items-center gap-2'>
                  <span><i class="ri-phone-fill"></i></span>
                  Phone:
                </h6>
                <p className='mb-0'>0123456789</p>
              </ListGroupItem>
          </ListGroup>
        </Col>
        <Col lg='12' className='text-center pt-5'>
          <p className="copyright">Copyright {year}, design and develop by Sandeep , Kiran and Rishika . All rights reserved.</p>
        </Col>
      </Row>
    </Container>

  </footer>
}

export default Footer;
