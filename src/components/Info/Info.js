import React from 'react'
import classes from './Info.module.scss'
import InfoItem from './InfoItem/InfoItem'
import Icon1 from './../../assets/info-icon-1.png'
import Icon1Md from './../../assets/info-icon-1-md.png'
import Icon2 from './../../assets/info-icon-2.png'
import Icon2Md from './../../assets/info-icon-2-md.png'
import Icon3 from './../../assets/info-icon-3.png'
import Icon3Md from './../../assets/info-icon-3-md.png'
import Icon4 from './../../assets/info-icon-4.png'
import Icon4Md from './../../assets/info-icon-4-md.png'
import Icon5 from './../../assets/info-icon-5.png'
import Icon5Md from './../../assets/info-icon-5-md.png'
import Icon6 from './../../assets/info-icon-6.png'
import Icon6Md from './../../assets/info-icon-6-md.png'


const Info = () => {
  return (
    <div className = { classes.info }>
        <div className = { classes.info__wrapper }>
            <InfoItem mobileIcon = { Icon1 }
                      normalIcon = { Icon1Md }
                      title ='Nibh Ridiculus'

            />
            <InfoItem mobileIcon = { Icon2Md }
                      normalIcon = { Icon2 }
                      title ='Grammatica Del'

            />
            <InfoItem mobileIcon = { Icon3Md }
                      normalIcon = { Icon3 }
                      title ='Europan Lingues'

            />
            <InfoItem mobileIcon = { Icon4Md }
                      normalIcon = { Icon4 }
                      title ='Ipsum Quia'
            />
            <InfoItem mobileIcon = { Icon5Md }
                      normalIcon = { Icon5 }
                      title ='Aliquam Quaerat'
            />
            <InfoItem mobileIcon = { Icon6Md }
                      normalIcon = { Icon6 }
                      title ='Dolorem Eum'
            />
        </div>

    </div>
  )
}

export default Info
