import React from 'react'
import classes from './InfoItem.module.scss'

const InfoItem = ( props ) => {
  return (
        <div className = { classes.infoItem } style = { props.align }>
            {/* <picture> */}
                {/* <source media = "(max-width:768px)" srcSet = { props.mobileIcon }/> */}
                <img src= { props.normalIcon } alt="Icon"/>
            {/* </picture> */}
            <h3 className = { classes.infoItem__header }> { props.title }</h3>
            <p className = { classes.infoItem__text } >Donec ullamcorper nulla non metus auctor fringilla. Cum sociis natoque penatibus etmagnis dis parturie nt montes, nascetur.</p>
        </div>
  )
}

export default InfoItem
