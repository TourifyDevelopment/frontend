import React, { Component } from 'react'
import logo from "../assets/images/logo-text.png";
import { Link } from 'react-router-dom';

export class Register extends Component {

  constructor(props) {
    super(props);
    this.state = {
      username: "",
      usernameRepeat: "",
      password: "",
      passwordRepeat: "",
    }
    this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleInputChange(evt) {
    const target = evt.target;
    const value = target.value;
    const name = target.name;

    this.setState({
        [name]: value
    })
  }

  handleSubmit() {
    const password = this.state.password;
    const passwordRepeat = this.state.passwordRepeat;
    const username = this.state.username;
    const usernameRepeat = this.state.usernameRepeat;
    if (password === passwordRepeat && 
      username === usernameRepeat &&
      password.length !== 0 && username.length != 0) {

      //TODO: User gets registered
      console.log("User gets registered");
    }else { 
      //TODO: User cannot get registered
      console.log("User cannot get registered");
    }
  }

  render() {
    return (
      <div className="min-h-full flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-md w-full space-y-8">
          <div>
            <img className="mx-auto h-100 w-auto" src={logo} alt="tourify" />
            <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">Create a new account</h2>
          </div>
          <div className="my-8 space-y-6">
            <input type="hidden" name={this.state.username} value={this.handleInputChange} />
            <div className="rounded-md shadow-sm -space-y-px">
              <div>
                <input value={this.state.username} name="username" type="text" onChange={this.handleInputChange} autocomplete="username" required className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" placeholder="Username" />
              </div>
              <div>
                <input value={this.state.usernameRepeat} name="usernameRepeat" type="text" onChange={this.handleInputChange} autocomplete="username" required className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" placeholder="Repeat your username" />
              </div>
              <div>
              <input value={this.state.password} name="password" type="password" onChange={this.handleInputChange} autocomplete="current-password" required className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" placeholder="Password" />
              </div>
              <div>
                <input value={this.state.passwordRepeat} name="passwordRepeat" type="password" onChange={this.handleInputChange} autocomplete="current-password" required className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" placeholder="Repeat your password" />
              </div>
            </div>

            <div className="space-y-2">
              <div>
                <button type="submit" className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500" onClick={() => this.handleSubmit()}>
                  <span className="absolute left-0 inset-y-0 flex items-center pl-3">
                    <svg className="h-5 w-5 text-indigo-500 group-hover:text-indigo-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                      <path fill-rule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clip-rule="evenodd" />
                    </svg>
                  </span>
                  Register
                </button>
              </div>
              <div className='flex justify-end'>
                 <Link to="/login" className='underline'>Already have an account?</Link>
              </div>
            </div>

          </div>


        </div>
      </div>
    )
  }
}

export default Register