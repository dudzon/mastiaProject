import React from 'react'
import classes from'./Hamburger.module.scss'

const Hamburger = ( props ) =>{

    let styles = [ classes.hamburger];
    if ( props.open ){
        styles = [ classes.hamburger,classes.isActive ]
    }
    return(
        <div className = { styles.join(' ') } onClick ={ props.toggle }>
            <span></span>
            <span></span>
            <span></span>
        </div>
    )
}
export default Hamburger

