import React from 'react'
import classes from './Navbar.module.scss'
import Link from 'gatsby-link'
import NavItems from './NavItems/NavItems'



const Navbar = () =>{

    return(
        <div className={ classes.navbar }>
            <div className = { classes.navbar__logo }><Link to="/"></Link></div>
            <NavItems/>
        </div>
    )
}

export default Navbar;


