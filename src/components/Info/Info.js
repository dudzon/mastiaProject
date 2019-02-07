import React from 'react'
import classes from './Info.module.scss'
import InfoItem from './InfoItem/InfoItem'
import Icon1 from './../../assets/info-icon-1.png'

import Icon2 from './../../assets/info-icon-2.png'

import Icon3 from './../../assets/info-icon-3.png'

import Icon4 from './../../assets/info-icon-4.png'

import Icon5 from './../../assets/info-icon-5.png'

import Icon6 from './../../assets/info-icon-6.png'

const Info = () => {
  return (
    <div className={classes.info}>
      <div className={classes.info__wrapper}>
        <InfoItem normalIcon={Icon1} title="Nibh Ridiculus" />
        <InfoItem normalIcon={Icon2} title="Grammatica Del" />
        <InfoItem normalIcon={Icon3} title="Europan Lingues" />
        <InfoItem normalIcon={Icon4} title="Ipsum Quia" />
        <InfoItem normalIcon={Icon5} title="Aliquam Quaerat" />
        <InfoItem normalIcon={Icon6} title="Dolorem Eum" />
      </div>
    </div>
  )
}

export default Info
