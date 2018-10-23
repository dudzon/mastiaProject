import React from 'react'
import BlueBarTop from './../components/BlueBar/BlueBarTop/BlueBarTop'
import Testimonial from './../components/Testimonial/Testimonial'
import BlackBox from './../components/BlackBox/BlackBox'
import Details from './../components/Details/Details'



const About = () => (
  <div>
    <BlueBarTop title = 'About us'/>
    <Testimonial/>
    <BlackBox />
    <Details />
  </div>
)

export default About
