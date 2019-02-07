import React from 'react'
import classes from './ProjectItem.module.scss'
const ProjectItem = ({ category, src, genre }) => {
  let activeClass = [classes.projectItem__image, classes.not__active].join(' ')
  return (
    <div className={classes.projectItem}>
      <img
        src={src}
        alt=""
        className={
          category === 'all' || category === genre
            ? classes.projectItem__image
            : activeClass
        }
        data-category={genre}
      />
    </div>
  )
}

export default ProjectItem
