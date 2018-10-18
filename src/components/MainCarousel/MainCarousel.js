import React, { Component } from 'react'
import Carousel from 'nuka-carousel';
import classes from './MainCarousel.module.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


class MainCarousel extends Component {

    state = {
        slideIndex: 0,
        clientWidth:window.innerWidth
      };

    render(){
        let leftArrowStyle;
        let leftButtonStyle =
        {
            background:'none',
            border:'none',
            outline:0,
            height:60,
            width:60,
            marginLeft:'1.5rem',
            cursor:'pointer'
        }
        let rightButtonStyle =
        {
            background:'none',
            border:'none',
            outline:0,
            height:60,
            width:60,
            marginRight:'1.5rem',
            cursor:'pointer'
        }
        let size = '3x';
        if( this.state.slideIndex == 0){
            leftArrowStyle = {color:'#ccc'}
            leftButtonStyle = { ...leftButtonStyle,
                            border:'1px solid #ccc'}
        } else{
            leftArrowStyle = {color:'#fff'}
            leftButtonStyle = { ...leftButtonStyle,
                border:'1px solid #fff'}
        }
        let rightArrowStyle;
        if( this.state.slideIndex == 2){
            rightArrowStyle = {color:'#ccc'}
            rightButtonStyle = { ...rightButtonStyle,
                border:'1px solid #ccc'}
        } else{
            rightArrowStyle = {color:'#fff'}
            rightButtonStyle = { ...rightButtonStyle,
                border:'1px solid #fff'}
        }
        if ( this.state.clientWidth < 576){
            leftButtonStyle = { ...leftButtonStyle,
                width:40,
                height:40}
                size='1x';
            rightButtonStyle = { ...rightButtonStyle,
                width:40,
                height:40}
                size='1x';
        }

        return(
            <Carousel className ={classes.main__carousel}
                      slideIndex={this.state.slideIndex}
                      afterSlide={slideIndex => this.setState({slideIndex })}
                      renderCenterLeftControls={({ previousSlide }) => (
                        <button onClick={previousSlide} style= {leftButtonStyle}>
                         <FontAwesomeIcon icon={ ['fas','angle-left'] } size={size} style ={leftArrowStyle}/>
                        </button>
                )}
                renderCenterRightControls={({ nextSlide }) => (
                    <button onClick={nextSlide} style = {rightButtonStyle}>
                    <FontAwesomeIcon icon={ ['fas','angle-right'] } size={size} style ={rightArrowStyle}/>
                    </button>
                )}
                renderBottomCenterControls={() => (false)}>
                <div className = {classes.carousel__item1 }  >
                    <div className = {classes.carousel__inner}>
                        <p className = {classes.carousel__title}>We care about your business</p>
                        <p className = {classes.carousel__text}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam elementum consectetur egestas. Nulla nisi nisi, rutrum vitae nunc non, bibendum euismod nulla</p>
                        <button className = {classes.carousel__button}>About us</button>
                    </div>

                </div>
                <div className= {classes.carousel__item2} >
                    <div className={classes.carousel__inner}>
                        <p className={classes.carousel__title}>We make your business stronger</p>
                        <p className={classes.carousel__text}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam elementum consectetur egestas. Nulla nisi nisi, rutrum vitae nunc non, bibendum euismod nulla</p>
                        <button className={classes.carousel__button}>About us</button>
                    </div>
                </div>
                <div className= {classes.carousel__item3}>
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
