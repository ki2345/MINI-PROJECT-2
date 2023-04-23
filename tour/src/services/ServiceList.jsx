import React from 'react'
import ServiceCard from './ServiceCard';
import {Col } from 'reactstrap';

import weatherImg from '../assets/images/weather.png'
import guideImg from '../assets/images/guide.png'
import customizationImg from '../assets/images/customization.png'

const servicesData=[
    {
        imgUrl:weatherImg,
        title:"Calculate Weather",
        desc:"Calculating weather is an important feature that can be used on tours and travels websites to help travelers plan their trips better. By incorporating weather information, travelers can make informed decisions about what to pack, where to go, and when to travel.Travelers can access current and forecasted weather information."
    },
    {
        imgUrl:guideImg,
        title:"Best Tour Guide",
        desc:"A best tour guide feature can provide travelers with valuable insights into the most highly recommended and experienced tour guides for a given destination. By featuring highly rated tour guides on a tours and travels  website, travelers can make more informed decisions about which tours to book."
    },
    {
        imgUrl:customizationImg,
        title:"Customization",
        desc:"Customization is a valuable feature that can enhance the travel experience for many customers.A tours and travels website could allow customers to choose from a variety of pre-designed itineraries, or they could create their own itinerary by selecting the specific destinations, activities, and accommodations that best fit their needs and preferences."
    }
];
const ServiceList = () => {
  return (
    <>
     {
        servicesData.map((item,index)=>(
            <Col lg='3' md='6' sm='12' className='mb-4' key={index}>
                <ServiceCard item ={item}/>
            </Col>
        ))} 
    </>
  );
}

export default ServiceList;
