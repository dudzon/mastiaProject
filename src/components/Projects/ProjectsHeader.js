import React from 'react'
import classes from './ProjectsHeader.module.scss'

const ProjectsHeader = () => {
  return (
    <div className={classes.projectsHeader}>
      <div className={classes.projectsHeader__wrapper}>
        <h2 className={classes.projectsHeader__title}>Recent projects</h2>
      </div>
    </div>
  )
}

export default ProjectsHeader
