import React, { Component } from 'react'
import BlueBarTop from './../components/BlueBar/BlueBarTop/BlueBarTop'
import ProjectsHeader from '../components/Projects/ProjectsHeader'
import ProjectsPicker from '../components/Projects/ProjectsPicker'

class Projects extends Component {
  state = {
    category: null,
  }

  handleCategory = e => {
    this.setState({ ...this.state, category: e.target.dataset.category })
    this.handleActiveClass(e)
  }
  handleActiveClass = e => {
    const activeClass = '2px solid #26a1e4'
    if (this.state.category === e.target.dataset.category) {
      console.log(e.target)
    }
  }
  render() {
    console.log(this.state)
    return (
      <div>
        <BlueBarTop title="Projects" />
        <ProjectsHeader />
        <ProjectsPicker
          category={this.handleCategory}
          active={this.state.category}
        />
      </div>
    )
  }
}

export default Projects
