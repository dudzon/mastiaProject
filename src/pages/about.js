import React from 'react'
import BlueBarTop from './../components/BlueBar/BlueBarTop/BlueBarTop'
import Testimonial from './../components/Testimonial/Testimonial'
import BlackBox from './../components/BlackBox/BlackBox'
import Details from './../components/Details/Details'
import Team from './../components/Team/Team'




const About = () => (
  <div>
    <BlueBarTop title = 'About us' />
    <Testimonial/>
    <BlackBox />
    <Details />
    <Team />
  </div>
)

export default About
