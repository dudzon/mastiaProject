import React from 'react'
import classes from './WrapperIcon.module.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const WrapperIcon = () => {
    return(
        <div className = { classes.wrapperIcon }>
            <a href="https://www.facebook.com">
                <FontAwesomeIcon icon={ ['fab','facebook-f'] } size='xs' />
            </a>
            <a href="https://www.twitter.com">
                <FontAwesomeIcon icon={ ['fab','twitter']}  size='xs'/>
            </a>
            <a href="https://www.linkedin.com">
                <FontAwesomeIcon icon={ ['fab','linkedin-in'] } size='xs'/>
                </a>
            <a href="https://plus.google.com/">
                <FontAwesomeIcon icon={ ['fab','google-plus-g'] } size='xs'/>
            </a>
        </div>
    )
}


export default WrapperIcon;