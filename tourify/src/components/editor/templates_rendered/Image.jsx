import React from 'react'

function Image(props) {
  return (
    <img style={props.style} src={props.value}></img>
  )
}

export default Image