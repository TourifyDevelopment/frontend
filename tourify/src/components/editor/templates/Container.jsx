import React from 'react'

/**
 * Template of a container with a standard height of 16px
 * Usefull for empty container
 */
function Container() {
    const style = { 
        height: '16px'
    }

    return (
        <div style={style}></div>
    )
}

export default Container;