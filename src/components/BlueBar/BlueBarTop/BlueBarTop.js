import React from 'react'
import classes from './BlueBarTop.module.scss';

const BlueBarTop = ( props ) => {
    const { title } = props
  return (
    <div className ={ classes.blueBarTop}>
        <div className = { classes.wrapper}>
            <h3 className = {classes.title}>{ title }</h3>
            <p className = {classes.breadcrumbs}> Home > About Us</p>
        </div>
    </div>
  )
}

export default BlueBarTop
