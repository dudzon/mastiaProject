import React from 'react'
import classes from './InfoItem.module.scss'

const InfoItem = ( props ) => {
  return (
        <div className = { classes.infoItem } style = { props.align }>
             <img src= { props.normalIcon } alt="Icon"/>
            <h3 className = { classes.infoItem__header }> { props.title }</h3>
            <p className = { classes.infoItem__text } >Donec ullamcorper nulla non metus auctor fringilla. Cum sociis natoque penatibus etmagnis dis parturie nt montes, nascetur.</p>
        </div>
  )
}

export default InfoItem
