import React from 'react'
import classes from './ProjectsPicker.module.scss'
const ProjectsPicker = ({ category, active }) => {
  const activeClass = [classes.list_item, classes.active].join(' ')
  return (
    <div className={classes.projectsPicker}>
      <div className={classes.projectsPicker__list}>
        <span
          className={classes.list_item}
          data-category="all"
          onClick={e => category(e)}
        >
          All
        </span>
        <span
          className={classes.list_item}
          data-category="web"
          onClick={e => category(e)}
        >
          Web
        </span>
        <span
          className={classes.list_item}
          data-category="html"
          onClick={e => category(e)}
        >
          HTML
        </span>
        <span
          className={classes.list_item}
          data-category="wordpress"
          onClick={e => category(e)}
        >
          Wordpress
        </span>
        <span
          className={classes.list_item}
          data-category="ui"
          onClick={e => category(e)}
        >
          UI
        </span>
      </div>
    </div>
  )
}

export default ProjectsPicker
