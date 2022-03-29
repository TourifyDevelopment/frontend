import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import { Resizable } from 'react-resizable';
import profilePic from '../assets/images/dummy_avatar.png'
import getProjects from '../models/Projects';
import Project from '../components/Project';

class Projects extends Component {

  constructor (props) {
    super(props);

    this.state = {
      width: 200
    }

    this.projects = getProjects();
  }

  render() {
    return (
      <div className='flex'>
        <div className="flex flex-col items-center py-12 px-6 space-y-8">
          <img className="rounded-full w-3/5" src={profilePic} alt="Profile" />
          <h1 >[USERNAME]</h1>
          <hr className='w-full h-px'/>
          <Link className="accent-btn" to="/editor">
            Create new project
          </Link>
        </div>
        
        <div className="h-screen border-l border-grey-600 p-12 flex flex-wrap">
            {
              this.projects.map((p) => <Project project={p}/>)
            }
        </div>
      </div>
    )
  }
  

}

export default Projects;