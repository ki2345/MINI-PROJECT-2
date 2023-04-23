import React from 'react';
import Slider from 'react-slick';
import ava01 from '../../assets/images/pic1.jpg';
import ava02 from '../../assets/images/pic2.jpg';
import ava03 from '../../assets/images/pic3.jpg';
import '../../components/Testimonial/Testimonial.css';

const Testimonials = () => {
  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    speed: 1000,
    swipeToSlide: true,
    autoplaySpeed: 2000,
    slidesToShow: 3,

    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],

  };
  return <Slider {...settings}>
    <div className='testimonial py-4 px-3'>
      <p>I must say the service we received from this company was amazing and would recommend them to anyone to trust and use them the rewards you get with your holidays are just fantastic</p>

      <div className='d-flex align-items-center gap-4 mt-3'>
        <img src={ava01} className='rounded-2 r__pic' alt="" />
        <div>
          <h6 className='mb-0 mt-3'>Kiran</h6>
          <p>Customer</p>
        </div>
      </div>
    </div>

    <div className='testimonial py-4 px-3'>
      <p>YatraSphere has such a user-friendly website. Easy to navigate, search and fiddle with dates instead of having to call up. Once decided, the booking process was swift and easy, thank you.</p>

      <div className='d-flex align-items-center gap-4 mt-3'>
        <img src={ava02} className='rounded-2 r__pic' alt="" />
        <div>
          <h6 className='mb-0 mt-3'>Rishika</h6>
          <p>Customer</p>
        </div>
      </div>
    </div>

    <div className='testimonial py-4 px-3'>
      <p>I would definitely recommend your services. It was so easy to book and get all the information needed. Had a prompt reply with my query. Will not hesitate to book with you again.</p>

      <div className='d-flex align-items-center gap-4 mt-3'>
        <img src={ava03} className='rounded-2 r__pic' alt="" />
        <div>
          <h6 className='mb-0 mt-3'>Sandeep</h6>
          <p>Customer</p>
        </div>
      </div>
    </div>

    <div className='testimonial py-4 px-3'>
      <p>Our holiday ran seamlessly, with no problems. All communication was answered quickly and efficiently. We will definitely be using YatraSphere for our future travel arrangements</p>

      <div className='d-flex align-items-center gap-4 mt-3'>
        <img src={ava02} className='rounded-2 r__pic' alt="" />
        <div>
          <h6 className='mb-0 mt-3'>Rishika</h6>
          <p>Customer</p>
        </div>
      </div>
    </div>
  </Slider>
}

export default Testimonials;
