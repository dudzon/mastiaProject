import React, { Component } from 'react'
import classes from './ProjectsPicker.module.scss'
class ProjectsPicker extends Component {
  render() {
    const { category, active } = this.props
    let activeClass = [classes.list_item, classes.active].join(' ')
    return (
      <div className={classes.projectsPicker}>
        <div className={classes.projectsPicker__list}>
          <span
            className={active === 'all' ? activeClass : classes.list_item}
            data-category="all"
            ref={span => (this.allElem = span)}
            onClick={e => category(e)}
          >
            All
          </span>
          <span
            className={active === 'web' ? activeClass : classes.list_item}
            data-category="web"
            ref={span => (this.webElem = span)}
            onClick={e => category(e)}
          >
            Web
          </span>
          <span
            className={active === 'html' ? activeClass : classes.list_item}
            data-category="html"
            ref={span => (this.htmlElem = span)}
            onClick={e => category(e)}
          >
            HTML
          </span>
          <span
            className={active === 'wordpress' ? activeClass : classes.list_item}
            data-category="wordpress"
            ref={span => (this.wordpressElem = span)}
            onClick={e => category(e)}
          >
            Wordpress
          </span>
          <span
            className={active === 'ui' ? activeClass : classes.list_item}
            data-category="ui"
            ref={span => (this.uiElem = span)}
            onClick={e => category(e)}
          >
            UI
          </span>
        </div>
      </div>
    )
  }
}

export default ProjectsPicker
