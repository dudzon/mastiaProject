import React, { Component } from 'react'
import BlueBarTop from './../components/BlueBar/BlueBarTop/BlueBarTop'
import ProjectsHeader from '../components/Projects/ProjectsHeader'
import ProjectsPicker from '../components/Projects/ProjectsPicker'
import ProjectsList from '../components/Projects/ProjectsList'

class Projects extends Component {
  state = {
    category: 'all',
  }

  handleCategory = e => {
    this.setState({
      ...this.state,
      category: e.target.dataset.category,
    })
  }

  render() {
    return (
      <div>
        <BlueBarTop title="Projects" />
        <ProjectsHeader />
        <ProjectsPicker
          category={this.handleCategory}
          active={this.state.category}
        />
        <ProjectsList category={this.state.category} />
      </div>
    )
  }
}

export default Projects
