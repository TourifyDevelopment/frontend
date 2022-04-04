import React from 'react'

function Logout() {
    localStorage.removeItem('token');
    window.location.replace('/');
    return (
        <></>
    )
}

export default Logout
