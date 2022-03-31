import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import Login from '../../screens/Login';

export class SidebarNotLoggedIn extends Component {
    render() {
        return (
            <>
                <div>User is not logged in</div>
                <Link to='/login'>Log in</Link>
            </>
        )
    }
}

export default SidebarNotLoggedIn;
