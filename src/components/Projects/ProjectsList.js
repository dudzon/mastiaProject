import React, { Component } from 'react'
import classes from './ProjectLists.module.scss'
import ProjectItem from './ProjectItem'
import project1 from './../../assets/project1.jpg'
import project2 from './../../assets/project2.jpg'
import project3 from './../../assets/project3.jpg'
import project5 from './../../assets/project5.jpg'
import project6 from './../../assets/project6.jpg'
const ProjectsList = ({ category }) => {
  return (
    <div className={classes.projectsList}>
      <div className={classes.projectsList__wrapper}>
        <ProjectItem src={project1} category={category} genre="wordpress" />
        <ProjectItem src={project2} category={category} genre="web" />
        <ProjectItem src={project3} category={category} genre="ui" />
        <ProjectItem src={project2} category={category} genre="html" />
        <ProjectItem src={project5} category={category} genre="ui" />
        <ProjectItem src={project6} category={category} genre="web" />
      </div>
    </div>
  )
}

export default ProjectsList
