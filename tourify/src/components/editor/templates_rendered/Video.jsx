import React from 'react'

function Video(props) {
  return (
    <video style={props.style} src={props.value}></video>
  )
}

export default Video;