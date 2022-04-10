import React from 'react'
import { getLinkProperties } from '../../../models/editor/linkProperties';
import { useDispatch } from 'react-redux';
import { select } from '../../../features/slices/containerSlice';
import EditorInput from '../EditorInput';

/**
 * Template of a link
 */
function Link(props) {
  const dispatch = useDispatch();
  const style = getLinkProperties();

  const handleClick = () => {
    dispatch(select(props.id))
  }


  return (
    <div style={style} className='flex flex-col' onClick={handleClick}>
      <EditorInput value={"HIER TITEL EINFUEGEN"} />
    </div>
  )
}

export default Link