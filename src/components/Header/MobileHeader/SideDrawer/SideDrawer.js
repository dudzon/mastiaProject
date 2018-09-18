import React from 'react'
import classes from './SideDrawer.module.scss'
import NavItems from '../../../Navbar/NavItems/NavItems';


const SideDrawer  = (props) => {

    let styles = [ classes.sideDrawer,classes.close ];
    if ( props.open ){
        styles = [ classes.sideDrawer,classes.open ]
    }

 return(
    <div className = { styles.join(' ')}>
        <NavItems />
    </div>
 )
}

export default SideDrawer