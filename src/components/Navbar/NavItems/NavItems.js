import React from 'react';
import Link from 'gatsby-link'
import classes from './NavItems.module.scss'

const NavItems = () =>{
    const activeColor = '#26a1e4'
    return(
        <div className ={ classes.navItems }>
            <Link to="/" exact activeStyle={{ color: activeColor }}>Home</Link>
            <Link to="/about" activeStyle={{ color: activeColor }}>About Us</Link>
            <Link to="/pages" activeStyle={{ color: activeColor }}>Pages</Link>
            <Link to="/projects" activeStyle={{ color: activeColor }}>Projects</Link>
            <Link to="/blog" activeStyle={{ color: activeColor }}>Blog</Link>
            <Link to="/contact" activeStyle={{ color: activeColor }}>Contact Us</Link>
        </div>
    )
}
export default NavItems;