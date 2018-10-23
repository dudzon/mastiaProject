import React from 'react'
import classes from './Details.module.scss'
import Accordion from 'react-collapsy';
import './Accordion.scss'

const Details = () => {
  return (
        <div className = { classes.Details }>
            <div className={ classes.Details__wrapper}>
            <div className= { classes.Details__accordion }>
            <h3 className = { classes.Details__title}>Why choose us </h3>
                  <Accordion title="We are creative" >
                      <p>As a leader in our industry, we have always worked to develop advanced technology and innovative methods.</p>
                  </Accordion>
                  <Accordion title="Proffesional Service" className={ classes.Accordion }>
                        <p>As a leader in our industry, we have always worked to develop advanced technology and innovative methods.</p>
                  </Accordion>
                  <Accordion title="15 Years Experience" className={ classes.Accordion }>
                         <p>As a leader in our industry, we have always worked to develop advanced technology and innovative methods.</p>
                  </Accordion>
                  <Accordion title="Quality Workmanship" className={ classes.Accordion }>
                        <p>As a leader in our industry, we have always worked to develop advanced technology and innovative methods.</p>
                  </Accordion>
            </div>
                <div className ={ classes.Details__desc}>
                    <h3 className = { classes.Details__title}>What we do</h3>
                    <p className = { classes.Details__paragraph }>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.Minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. </p>
                    <p className = { classes.Details__paragraph }>Minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugia</p>
                </div>
            </div>
        </div>
  )
}

export default Details
