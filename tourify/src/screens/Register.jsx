import React, { Component, useState } from 'react'
import logo from "../assets/images/logo-text.png";
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { loginUrl, registerUrl } from '../assets/constants/apiUrls';

function Register() {
  // TODO: Change error Message with design
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [repeatPassword, setRepeatPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  let navigate = useNavigate();

  const handleSubmit = evt => {
    if (password !== repeatPassword) {
      setErrorMessage('Die Passwörter stimmen nicht überein!')
    } else if (password.length === 0) {
      setErrorMessage('Das Passwort darf nicht 0 Zeichen lang sein!')
    } else if (username.length === 0) {
      setErrorMessage('Der Username darf nicht 0 Zeichen lang sein!')
    } else {
      axios.post(registerUrl(), {
        username: username,
        password: password,
        profilePicture: ''
      }, {
        headers: {
          'Content-Type': 'application/json'
        }
      }).then(res => {
        if (res.status === 201) {
          axios.post(loginUrl(), {
            username: username,
            password: password
          }, {
            headers: {
              'Content-Type': 'application/json'
            }
          }).then(res2 => {
            console.log(res2)
            if (res2.status === 201) {
              localStorage.setItem('token', res2.data.access_token)
              navigate('/projects')
            }
          })
        }
      })
    }
  }

  return (
    <div className="min-h-full flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <div>
          <img className="mx-auto h-100 w-auto" src={logo} alt="tourify" />
          <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">Create a new account</h2>
          <h3>{errorMessage}</h3>
        </div>
        <div className="my-8 space-y-6">
          <div className="rounded-md shadow-sm -space-y-px">
            <div>
              <input name="username" type="text" onChange={(evt) => setUsername(evt.target.value)} autocomplete="username" required className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" placeholder="Username" />
            </div>
            <div>
              <input name="password" type="password" onChange={(evt) => setPassword(evt.target.value)} autocomplete="current-password" required className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" placeholder="Password" />
            </div>
            <div>
              <input name="passwordRepeat" type="password" onChange={(evt) => setRepeatPassword(evt.target.value)} autocomplete="current-password" required className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" placeholder="Repeat your password" />
            </div>
          </div>

          <div className="space-y-2">
            <div>
              <button type="submit" className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500" onClick={evt => handleSubmit(evt)}>
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

export default Register