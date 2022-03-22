import React, { Component } from 'react'

export class LandingPage extends Component {
  render() {
    return (
      <nav>
        <div className="absolute left-2 top-2">
          <img src="" alt="" />
        </div>
        <div className="absolute right-2 top-2 flex justify-end">
          <div className="rounded-md px-4 py-2">
            Documentation
          </div>
          <div className="rounded-md px-4 py-2">
            Get started
          </div>
        </div>
      </nav>
    )
  }
}

export default LandingPage;