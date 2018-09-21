import React from'react'
import classes from './BlueBar.module.scss'
import Button from './../Button/Button'

const BlueBar = () => {
    return(
        <div className = { classes.blueBar }>
            <div className= { classes.blueBar__wrapper }>
                <h3 className = { classes.blueBar__header }> Go ahead and find out how we can help you! </h3>
                <Button text = 'Get in touch' />
            </div>
        </div>
    )
}

export default BlueBar;