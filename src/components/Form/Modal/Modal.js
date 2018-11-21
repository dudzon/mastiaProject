import React,{ Component } from 'react'
import classes from './Modal.module.scss'

const Modal = ( props ) => {

    const { visible,firstname,lastname,email,website,message,close,edit } = props;
    const html = document.querySelector('html');
    let scrollbar = ( visible == false ) ? ( html.style.overflow ='auto') : ( html.style.overflow ='hidden');
    let modalVisible= [];
    modalVisible = ( visible == false) ?  ( [classes.Modal] ) : ( [classes.Modal,classes.visible] );
    return (
        <div className ={ modalVisible.join(' ')}>
            <div className={ classes.Modal__wrapper }>
                <h3 className = { classes.Modal__title}> Your message is ready.</h3>
                <div className = { classes.Modal__content }>
                    <p> From : {firstname} {lastname} </p>
                    <p> Email address : { email }</p>
                    <p>Website: { website } </p>
                    <p> Message text : <span style ={{ fontStyle:'italic'}}>{ message }</span></p>
                    <div className = { classes.Modal__buttons }>
                        <button className= {classes.Modal__edit } onClick = { edit }>Edit Message</button>
                        <button className= { classes.Modal__send } onClick = { close }>Send Message</button>
                    </div>
                </div>
            </div>
        </div>
      )

}

export default Modal
