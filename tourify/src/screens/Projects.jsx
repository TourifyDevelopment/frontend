import React, { Component } from 'react'
import profilePic from '../assets/images/dummy_avatar.png'
import getProjects from '../models/Projects';
import Project from '../components/Project';
import { authChecker, getProfilePic, createNewProject } from '../auth';
import SidebarLoggedIn from '../components/projects/SidebarLoggedIn';
import SidebarNotLoggedIn from '../components/projects/SidebarNotLoggedIn';
import axios from 'axios';
import { projectUrl } from '../assets/constants/apiUrls';

class Projects extends Component {

  constructor(props) {
    super(props);

    this.state = {
      width: 200,
      sidebar: null,
      projects: [],
      showModal: false,
      projectNameInput: '',
      projectDescInput: ''
    }
  }

  componentDidMount() {
    authChecker.check().then((isAuthenticated) => {
      if (isAuthenticated) {
        getProfilePic().then((data) => {
          console.log(data);
          console.log(isAuthenticated)
          let profPic;
          if (data) {
            profPic = profilePic
          } else {
            profPic = `https://avatars.dicebear.com/api/bottts/${isAuthenticated.username}.svg`
          }
          this.setState({ sidebar: <SidebarLoggedIn profilePic={profPic} user={isAuthenticated} /> })
        })
      } else {
        this.setState({ sidebar: <SidebarNotLoggedIn /> })
      }
    });


    axios.get(projectUrl()).then(res => {
      if (res.status === 200) {
        console.log(res.data);
        console.log(res);
        this.setState({ projects: res.data })
      }
    })
  }

  handleNewProject() {
    createNewProject({ projectName: this.state.projectNameInput, description: this.state.projectDescInput }).then(() => {
      axios.get(projectUrl()).then(res => {
        if (res.status === 200) {
          console.log(res.data)
          this.setState({ projects: res.data });
          this.setState({ showModal: false });
        }
      })
    })

    console.log(this.state.projectNameInput)
    console.log(this.state.projectDescInput)
  }

  render() {
    return (
      <div className='flex'>
        <div className="flex flex-col items-center py-12 px-6 space-y-8">
          {this.state.sidebar}
          <button
            className="bg-pink-500 text-white active:bg-pink-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
            type="button"
            onClick={() => this.setState({ showModal: true })}
          >
            Open regular modal
          </button>
        </div>

        <div className="h-screen border-l border-grey-600 p-12 flex flex-wrap">
          {
            this.state.projects.map((p) => <Project project={p} />)
          }
        </div>
        {this.state.showModal ? (
          <>
            <div
              className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
            >
              <div className="relative w-auto my-6 mx-auto max-w-3xl">
                {/*content*/}
                <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                  {/*header*/}
                  <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
                    <h3 className="text-3xl font-semibold">
                      Modal Title
                    </h3>
                  </div>
                  {/*body*/}
                  <div className="relative p-6 flex-auto">
                    <p className="my-4 text-slate-500 text-lg leading-relaxed">
                      In diesem Popup kannst du ein neues Projekt erstellen. Dir steht ein Titel und eine Beschreibung für dein Projekt zur Verfügung!
                    </p>
                    <div class="md:w-1/3">
                      <label class="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" for="inline-full-name">
                        Titel deines Projekts
                      </label>
                    </div>
                    <div class="md:w-2/3">
                      <input className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" id="title" name="name" type="text" placeholder="Titel" onChange={evt => this.setState({ projectNameInput: evt.target.value })} required></input>
                    </div>

                    <div class="md:w-1/3">
                      <label class="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" for="inline-full-name">
                        Beschreibung deines Projekts (optional)
                      </label>
                    </div>
                    <div class="md:w-2/3">
                      <input className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" id="description" name="description" type="text" placeholder="Beschreibung" onChange={evt => this.setState({ projectDescInput: evt.target.value })} required></input>
                    </div>
                  </div>
                  {/*footer*/}
                  <div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
                    <button
                      className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                      type="button"
                      onClick={() => this.setState({ showModal: false })}
                    >
                      Close
                    </button>
                    <button
                      className="bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                      type="button"
                      onClick={() => this.handleNewProject()}
                    >
                      Save Changes
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
          </>
        ) : null}
      </div>
    )
  }
}

export default Projects;
