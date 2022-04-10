import React from 'react';
import { useSelector } from 'react-redux'
import { selectContainerById } from '../../../features/slices/containerSlice'
import ReactPlayer from 'react-player'


function Video(props) {
  const container = useSelector(state => selectContainerById(state, props.id))


  const playerWrapperStyle = {
    position: 'relative',
    paddingTop: '56.25%',
  }

  const playerStyle = {
    position: 'absolute',
    top: 0,
    left: 0,

  }

  return (
    <div className='flex flex-col p-2' style={playerWrapperStyle}>
      <ReactPlayer
        url={container.data}
        width='100%'
        height='100%'
        style={playerStyle}
        controls={true}
        config={{file: {attributes: {controlsList: 'nodownload'}}}}
        onContextMenu={e => e.preventDefault()}
      />
    </div>
  )
}

export default Video;