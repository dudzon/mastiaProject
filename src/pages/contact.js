import React from 'react'
import BlueBarTop from './../components/BlueBar/BlueBarTop/BlueBarTop'
import GoogleMap from './../components/GoogleMap/GoogleMap'
import ClearAbsoluteHeight from './../components/ClearAbsoluteHeight/ClearAbsoluteHeight'
import Form from './../components/Form/Form'
 const Contact = () => (
  <div>
     <BlueBarTop title = 'Contact' />
     <Form/>
     <GoogleMap />
     <ClearAbsoluteHeight/>
  </div>
)

export default Contact
