import React,{ Component } from 'react'
import classes from './Modal.module.scss'

const Modal = ( props ) => {

    const { visible,firstname,lastname,email,website,message,close,edit } = props;
    if( typeof document !=='undefined'){
        const html = document.querySelector('html');
        let scrollbar = ( visible == false ) ? ( html.style.overflow ='auto') : ( html.style.overflow ='hidden');
    }
    let modalVisible= [];
    modalVisible = ( visible == false) ?  ( [classes.Modal] ) : ( [classes.Modal,classes.visible] );

    return (
        <div className ={ modalVisible.join(' ')}>
            <div className={ classes.Modal__wrapper }>
                <h3 className = { classes.Modal__title}> Your message is ready.</h3>
                <div className = { classes.Modal__content }>
                    <p> <strong>From:</strong> {firstname} {lastname} </p>
                    <p> <strong>Email address :</strong> { email }</p>
                    <p><strong>Website:</strong> { website } </p>
                    <p> <strong>Message text :</strong> <span style ={{ fontStyle:'italic'}}>{ message }</span></p>
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
