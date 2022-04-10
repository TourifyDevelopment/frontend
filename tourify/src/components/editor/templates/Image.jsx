import React from 'react'
import { useSelector } from 'react-redux'
import { selectContainerById } from '../../../features/slices/containerSlice'

/**
 * Template of an image.
 */
function Image(props) {
  const container = useSelector(state => selectContainerById(state, props.id));

  return (
    <div className='flex flex-col'>
      <img src={container.data} />
    </div>
  )
}

export default Image