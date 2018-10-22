import React from 'react'
import classes from './BlackBox.module.scss';

const BlackBox = () => {
  return (
    <div className = { classes.BlackBox }>
        <div className = { classes.BlackBox__wrapper }>
            <div className={ classes.BlackBox__item}>
                <div className={ classes.BlackBox__icon }></div>
                <h4 className = { classes.BlackBox__title }> Within Budget</h4>
                <p className = { classes.BlackBox__text }>Work with us involve a carefully planned series of steps, centered around a schedule we stick daily communication.</p>
            </div>
            <div className={ classes.BlackBox__item}>
                <div className={ classes.BlackBox__icon }></div>
                <h4 className = { classes.BlackBox__title }>Best services</h4>
                <p className = { classes.BlackBox__text }>Work with us involve a carefully planned series of steps, centered around a schedule we stick daily communication.</p>
            </div>
            <div className={ classes.BlackBox__item}>
                <div className={ classes.BlackBox__icon }></div>
                <h4 className = { classes.BlackBox__title }>Friendly support</h4>
                <p className = { classes.BlackBox__text }>Work with us involve a carefully planned series of steps, centered around a schedule we stick daily communication.</p>
            </div>
        </div>
    </div>
  )
}

export default BlackBox
