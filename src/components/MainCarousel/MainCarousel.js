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
            <Carousel className ={classes.main__carousel}  wrapAround ={true} >
                <div className = {classes.carousel__item1 } ref={ (divElement) => this.divElement = divElement} style ={{height:imgHeight}} >
                    <div className = {classes.carousel__inner}>
                        <p className = {classes.carousel__title}>We care about your business</p>
                        <p className = {classes.carousel__text}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam elementum consectetur egestas. Nulla nisi nisi, rutrum vitae nunc non, bibendum euismod nulla</p>
                        <button className = {classes.carousel__button}>About us</button>
                    </div>

                </div>
                <div className= {classes.carousel__item2} style ={{height:imgHeight}}>
                    <div className={classes.carousel__inner}>
                        <p className={classes.carousel__title}>We make your business stronger</p>
                        <p className={classes.carousel__text}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam elementum consectetur egestas. Nulla nisi nisi, rutrum vitae nunc non, bibendum euismod nulla</p>
                        <button className={classes.carousel__button}>About us</button>
                    </div>
                </div>
                <div className= {classes.carousel__item3} style ={{height:imgHeight}}>
                    <div className={classes.carousel__inner}>
                        <p className={classes.carousel__title}>We are happy to help you</p>
                        <p className={classes.carousel__text}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam elementum consectetur egestas. Nulla nisi nisi, rutrum vitae nunc non, bibendum euismod nulla</p>
                        <button className={classes.carousel__button}>About us</button>
                    </div>
                </div>
            </Carousel>
        )
    }
}

export default MainCarousel
