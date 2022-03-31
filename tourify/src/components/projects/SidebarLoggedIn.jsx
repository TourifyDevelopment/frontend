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
            </>
        )
    }
}

export default SidebarLoggedIn;
