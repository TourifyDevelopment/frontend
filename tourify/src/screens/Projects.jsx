import React, { Component } from 'react'
import profilePic from '../assets/images/dummy_avatar.png'
import Project from '../components/Project';
import { authChecker, getProfilePic, createNewProject, createNewPage } from '../auth';
import SidebarLoggedIn from '../components/projects/SidebarLoggedIn';
import SidebarNotLoggedIn from '../components/projects/SidebarNotLoggedIn';
import axios from 'axios';
import { pagesUrl, projectUrl } from '../assets/constants/apiUrls';

class Projects extends Component {
  // This page displays all created projects by everyone. A user can than view a project also withour registration or login.
  constructor(props) {
    super(props);

    this.state = {
      width: 200,
      sidebar: null,
      newProjectModal: null,
      projects: [],
      showModal: false,
      projectNameInput: '',
      projectDescInput: '',
      mapBlob: '',
      user: {}
    }
  }

  componentDidMount() {
    // Check if user is logged in
    authChecker.check().then((isAuthenticated) => {
      if (isAuthenticated) {
        // If the user is logged in show him the button to create a new project
        this.setState({ user: isAuthenticated })
        this.setState({
          newProjectModal: <button
            className="bg-pink-500 text-white active:bg-pink-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
            type="button"
            onClick={() => this.setState({ showModal: true })}
          >
            Neues Projekt erstellen
          </button>
        })
        // Does the user has a profile picture? If so display it, else display a profile image from dicebear
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
        this.setState({ user: {} })
        this.setState({ sidebar: <SidebarNotLoggedIn /> })
        this.setState({ newProjectModal: null })
      }
    });


    axios.get(projectUrl()).then(res => {
      // Load all created projects and set the state
      if (res.status === 200) {
        console.log(res.data);
        console.log(res);
        res.data.forEach(e => {
          axios.get(pagesUrl(e._id))
            .then(res2 => {
              console.log(res2)
              console.log(res2.data)
              e.pageId = res2.data[0]['_id']
              console.log(e)
              this.setState({ projects: [...this.state.projects, e] });
            })
        });
      }
    })
  }

  handleNewProject() {
    // If the user inserted all information to create a new project send a post request to create it
    createNewProject({ projectName: this.state.projectNameInput, description: this.state.projectDescInput, mapBlob: this.state.mapBlob }).then(() => {
      axios.get(projectUrl()).then(res => {
        if (res.status === 200) {
          this.setState({ projects: [] })
          console.log(res.data)
          res.data.forEach(e => {
            if (e.projectName === this.state.projectNameInput) {
              createNewPage({ projectId: e._id, name: 'default' + Math.floor(Math.random() * 1000), displayName: 'Default', mapX: 0, mapY: 0 }).then(() => {
                axios.get(pagesUrl(e._id))
                  .then(res2 => {
                    console.log(res2)
                    console.log(res2.data)
                    e.pageId = res2.data[0]['_id']
                    console.log(e)
                    this.setState({ projects: [...this.state.projects, e] });
                  })
              });
              return;
            }
            axios.get(pagesUrl(e._id))
              .then(res2 => {
                console.log(res2)
                console.log(res2.data)
                e.pageId = res2.data[0]['_id']
                console.log(e)
                this.setState({ projects: [...this.state.projects, e] });
              })
          });
          this.setState({ showModal: false });
        }
      })
    })

    console.log(this.state.projectNameInput)
    console.log(this.state.projectDescInput)
  }

  createBlob(evt) {
    // Create a Base64 string of the uploaded image of the user for the map (preview of Project)
    var file = evt.target.files[0];
    var reader = new FileReader();
    reader.addEventListener('load', (e) => {
      const blob = new Blob([new Uint8Array(e.target.result)], { type: file.type });

      let reader1 = new FileReader();
      reader1.readAsDataURL(blob);

      reader1.onload = () => {
        let image1 = new Image();
        image1.src = reader1.result;
        let imageBase64 = reader1.result;
        console.log(imageBase64);
        this.setState({ mapBlob: imageBase64 });
      };
    });

    reader.readAsArrayBuffer(file);
  }

  render() {
    return (
      <div className='flex'>
        <div className="flex flex-col items-center py-12 px-6 space-y-8">
          {this.state.sidebar}
          {this.state.newProjectModal}
        </div>

        <div className="h-screen border-l border-grey-600 p-12 flex flex-wrap">
          {
            this.state.projects.map((p) => <Project project={p} user={this.state.user} />)
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
                      Neues Projekt
                    </h3>
                  </div>
                  {/*body*/}
                  <div className="relative p-6 flex-auto">
                    <p className="my-4 text-slate-500 text-lg leading-relaxed text-red-500">
                      Achtung: Der Editor ist rein experimentell! Es lassen sich keine Daten dauerhaft speichern! Zudem kann es im Editor zu Fehlern kommen!
                    </p>
                    <p className="my-4 text-slate-500 text-lg leading-relaxed">
                      In diesem Popup kannst du ein neues Projekt erstellen. Dir steht ein Titel, eine Beschreibung und noch eine Foto (Map) für dein Projekt zur Verfügung!
                    </p>
                    <div>
                      <label class="block text-gray-500 font-bold md:text-left mb-1 md:mb-0 pr-4" for="inline-full-name">
                        Titel deines Projekts
                      </label>
                    </div>
                    <div>
                      <input className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" id="title" name="name" type="text" placeholder="Titel" onChange={evt => this.setState({ projectNameInput: evt.target.value })} required></input>
                    </div>

                    <div>
                      <label class="block text-gray-500 font-bold md:text-left mb-1 md:mb-0 pr-4" for="inline-full-name">
                        Beschreibung deines Projekts (optional)
                      </label>
                    </div>
                    <div>
                      <input className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" id="description" name="description" type="text" placeholder="Beschreibung" onChange={evt => this.setState({ projectDescInput: evt.target.value })} required></input>
                    </div>
                    
                    <div>
                      <label class="block text-gray-500 font-bold md:text-left mb-1 md:mb-0 pr-4" for="inline-full-name">
                        Die Map welche du verwenden möchstest: Auf dieser Map kannst du dann deine eigenen Points setzen.
                      </label>
                    </div>
                    <div>
                      <input className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" id="map" name="map" type="file" placeholder="Map" onChange={evt => this.createBlob(evt)} required></input>
                    </div>
                  </div>
                  {/*footer*/}
                  <div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
                    <button
                      className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                      type="button"
                      onClick={() => this.setState({ showModal: false })}
                    >
                      Schließen
                    </button>
                    <button
                      className="bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                      type="button"
                      onClick={() => this.handleNewProject()}
                    >
                      Speichern
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
