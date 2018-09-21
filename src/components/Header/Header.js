import React,{ Component } from 'react'
import PropTypes from 'prop-types'
import classes from './Header.module.scss'
import WrapperIcon from './WrapperIcon/WrapperIcon'
import WrapperContact from './WrapperContact/WrapperContact'
import MobileHeader from './MobileHeader/MobileHeader'
import SideDrawer from './MobileHeader/SideDrawer/SideDrawer'
class Header extends Component{

    state ={
      isSideDrawerOpened : false
    }

    sideDrawerCloseHandler = () => {
      this.setState({ isSideDrawerOpened:false })
    }
    sideDrawerToggleHandler = () => {
      this.setState( prevState =>{
        return { isSideDrawerOpened: !prevState.isSideDrawerOpened }
      })
    }
  render(){

  return(
    <header className= { classes.header }>
      <div className = { classes.header__wrapper }>
        <WrapperIcon />
        <WrapperContact />
        <MobileHeader toggle ={ this.sideDrawerToggleHandler }
                      open = { this.state.isSideDrawerOpened }/>
        <SideDrawer open ={ this.state.isSideDrawerOpened}
                    close = { this.sideDrawerCloseHandler }/>
      </div>
    </header>
    )
  }
}

Header.propTypes = {
  isSideDrawerOpened : PropTypes.bool,
}
export default Header;
