import React from 'react'
import classes from './Button.module.scss'
import Link from 'gatsby-link'

const Button = ( props ) =>{

    return(
        <Link to="/contact">
            <button className = { classes.button }> { props.text } </button>
        </Link>
    )
}

export default Button;