import React, { Component } from 'react'
import classes from './Form.module.scss'
import Modal from './Modal/Modal'
 class Form extends Component {
  state = {
    firstname:'',
    lastname:'',
    email:'',
    website:'',
    message:'',
    isModalVisible:false,
    isMessageSent: false
  }

  handleFieldChange = (e) => {
    this.setState({
      ...this.state,
      [e.target.id] : e.target.value
    });
  }
  handleSubmit = (e) =>{
    e.preventDefault();
    this.setState({
      isModalVisible:true
    })
  }
  handleModalSubmit = () => {
    // send data and close modal
    this.setState({
      ...this.state,
      firstname:'',
      lastname:'',
      email:'',
      website:'',
      message:'',
      isModalVisible:false,
      isMessageSent:true
    });
    this.hideConfirmation();
  }
  handleMessageEdit = () => {
    this.setState({
      isModalVisible:false
    })
  }
 hideConfirmation = () =>{
   return setTimeout( () =>{
     this.setState({
      isMessageSent:false
     })
   },5000)
 }
  render() {
  let confirmationClasses = [];
  confirmationClasses = ( this.state.isMessageSent == false ) ? ([classes.form__confirmation]) :([classes.form__confirmation,classes.confirmation__visible]);
   
    return (
      <div className = { classes.form }>
      <Modal visible={ this.state.isModalVisible }
             firstname = { this.state.firstname }
             lastname = { this.state.lastname }
             email = { this.state.email }
             website = { this.state.website }
             message = { this.state.message }
             close = { this.handleModalSubmit }
             edit = { this.handleMessageEdit }
             />
        <div className = { classes.form__wrapper}>
          <h1 className = { classes.form__title }>Contact us</h1>
          <form className ={ classes.form__element } onSubmit = { this.handleSubmit } >
              <div className={ classes.form__flex }>
                <input type="text" id="firstname" placeholder = "First Name" className = { classes.form__item } onChange={this.handleFieldChange} value ={ this.state.firstname }required/>
                <input type="text" id="lastname" placeholder = "Last Name" className = { classes.form__item } onChange={this.handleFieldChange} value = { this.state.lastname }required/>
              </div>
              <div className={ classes.form__flex } style={{marginTop:'1.5rem'}}>
                <input type="email" id ="email" placeholder = "Your Email" className = { classes.form__item } onChange={this.handleFieldChange} value ={ this.state.email } required/>
                <input type="text" id="website" placeholder =" Website" className = { classes.form__item } onChange={this.handleFieldChange} value = { this.state.website }/>
              </div>
              <textarea id="message" placeholder=" Your message" className={ classes.form__textarea } onChange={this.handleFieldChange} value = { this.state.message } required></textarea>
              <button className = { classes.form__button } type= "submit">Send</button>
              <p className = { confirmationClasses.join(' ') }>Congratulations, your message has been sent</p>
          </form>
        </div>
      </div>
    )
  }
}

export default Form
