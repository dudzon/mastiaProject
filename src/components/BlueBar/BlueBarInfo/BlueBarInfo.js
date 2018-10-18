import React from 'react'
import classes from './BlueBarInfo.module.scss'
import './BlueInfoItem/BlueInfoItem'
import BlueInfoItem from './BlueInfoItem/BlueInfoItem';

const BlueBarInfo = () => {
  return (
    <div className = { classes.blueBarInfo }>
        <div className = { classes.blueBarInfo__wrapper }>
            <BlueInfoItem number ='456'
                          text ='Happy Clients'/>
            <BlueInfoItem number ='56'
                          text ='Projects'/>
            <BlueInfoItem number ='456'
                          text ='Happy Clients'/>
            <BlueInfoItem number ='456'
                          text ='Happy Clients'/>
        </div>

    </div>
  )
}

export default BlueBarInfo
