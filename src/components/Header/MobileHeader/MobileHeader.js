import React from 'react'
import classes from './MobileHeader.module.scss'
import Link from 'gatsby-link'
import Hamburger from'./Hamburger/Hamburger'


const MobileHeader = ( props ) => {

    return(
        <div className = { classes.mobileHeader }>
            <div className = { classes.mobileHeader__logo }><Link to="/"></Link></div>
            <Hamburger toggle = { props.toggle }
                       open = {props.open }/>
        </div>
    )
}
export default MobileHeader;