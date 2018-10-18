import React from 'react'
import classes from './BlueInfoItem.module.scss'

const BlueInfoItem = ( props ) => {
  return (
    <div className = { classes.blueInfoItem }>
        <h3>{ props.number }</h3>
        <div></div>
        <p>{ props.text }</p>

    </div>
  )
}

export default BlueInfoItem
