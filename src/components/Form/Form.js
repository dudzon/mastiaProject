import React, { Component } from 'react'
import classes from './Form.module.scss'
export class Form extends Component {
  state = {
    firstname:'',
    lastname:'',
    email:'',
    website:'',
    message:''
  }
  render() {
    return (
      <div className = {classes.form}>
        <div className = { classes.form__wrapper}>
          <h1 className = { classes.form__title }>Contact us</h1>
          <form className ={ classes.form__element } >
              <div className={ classes.form__flex }>
                <input type="text" id="firstname" placeholder = "First Name" className = { classes.form__item }/>
                <input type="text" id="lastname" placeholder = "Last Name" className = { classes.form__item }/>
              </div>
              <div className={ classes.form__flex } style={{marginTop:'1.5rem'}}>
                <input type="email" id ="email" placeholder = "Your Email" className = { classes.form__item }/>
                <input type="text" id="website" placeholder =" Website" className = { classes.form__item }/>
              </div>
              <textarea id="message" placeholder=" Your message" className={ classes.form__textarea }></textarea>
          </form>
          <button className = { classes.form__button }type="submit">Send</button>
        </div>
      </div>
    )
  }
}

export default Form
