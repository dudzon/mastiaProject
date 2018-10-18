import React,{ Component } from 'react'
import Info from './../components/Info/Info'
import BlueBarInfo from './../components/BlueBar/BlueBarInfo/BlueBarInfo'
import Fragment from 'render-fragment'
import MainCarousel from './../components/MainCarousel/MainCarousel'


class IndexPage  extends Component {

  render(){
    return(
      <Fragment>
        <MainCarousel />
        <Info />
        <BlueBarInfo />
      </Fragment>
    )
  }
}

export default IndexPage
