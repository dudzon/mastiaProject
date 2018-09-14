import React from 'react'
import classes from './Header.module.scss'
import WrapperIcon from './WrapperIcon/WrapperIcon'
import WrapperContact from './WrapperContact/WrapperContact'

const Header = ({ siteTitle }) => (
  <header className= { classes.header }>
    <div className = { classes.header__wrapper }>
      <WrapperIcon />
      <WrapperContact />
    </div>
  </header>
)

export default Header
