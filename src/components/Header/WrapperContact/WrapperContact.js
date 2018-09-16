import React from 'react'
import classes from './WrapperContact.module.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


const WrapperContact = () => {
    return(
        <div className={ classes.wrapperContact }>
            <div className={ classes.wrapperContact__container }>
                <FontAwesomeIcon icon ={ ['far','clock']} size ='xs'/>
                <span>Mon - Sat: 7:00 - 17:00</span>
            </div>
            <div className={ classes.wrapperContact__container } >
                <FontAwesomeIcon icon = {['fas','phone']} size ='xs'/>
                <span>+ 386 40 111 5555</span>
            </div>
            <div className={ classes.wrapperContact__container }>
                <FontAwesomeIcon icon = {['fas','envelope']}size='xs' />
                <span>info@your.domain.com</span>
            </div>
        </div>
    )
}

export default WrapperContact;