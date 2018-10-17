import React, { Component } from 'react'
import Carousel from 'nuka-carousel';
import classes from './MainCarousel.module.scss'

class MainCarousel extends Component {

    state ={
       height: null
    }



      componentDidMount() {
        const height = Math.floor(this.divElement.getBoundingClientRect().top);
        console.log(height)
        this.setState({height})
      }
    render(){
        console.log(this.state)
        let clientH = document.documentElement.clientHeight;
        let imgHeight =  clientH - this.state.height;
        console.log(clientH)
        console.log(imgHeight)
        return(
            <Carousel className={classes.main__carousel} autoplay={true} wrapAround ={true} >
                <div className= {classes.carousel__item1 } ref={ (divElement) => this.divElement = divElement} style ={{height:imgHeight}} >
                    <p>Text1</p>
                </div>
                <div className= {classes.carousel__item2} style ={{height:imgHeight}}>
                    <p>Text2</p>
                </div>
                <div className= {classes.carousel__item3} style ={{height:imgHeight}}>
                    <p>Text3</p>
                </div>
            </Carousel>
        )
    }
}

export default MainCarousel
