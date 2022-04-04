import React, { Component } from 'react'
import { Link } from 'react-router-dom';

export class SidebarLoggedIn extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <>
                <img className="rounded-full w-3/5" src={this.props.profilePic} alt="Profile" />
                <h1>{this.props.user.username}</h1>
                <hr className='w-full h-px' />
                <button
                    className="bg-pink-500 text-white active:bg-pink-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => this.setState({ showModal: true })}
                >
                    Open regular modal
                </button>
                <Link to="/logout">Log Out</Link>
            </>
        )
    }
}

export default SidebarLoggedIn;
