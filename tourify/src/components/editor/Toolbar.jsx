import React, { useState } from 'react'
import { templateTypes } from '../../models/editor/templateTypes'
import logo from '../../assets/images/logo.png'
import { DndContext, useDrag } from 'react-dnd'
import { SortableContainer, SortableElement } from 'react-sortable-hoc';
import { useDispatch, useSelector } from 'react-redux'
import { selectContainer, moveContainer, removeContainer } from '../../features/slices/containerSlice'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBorderAll, faMessage, faFont, faO, faImage, faVideo, faLink } from '@fortawesome/free-solid-svg-icons';

//Component of editor screen. Adds the sidebar with all the templates 
//that can get dragged and shows the hierarchy of the containers
function Toolbar() {
  const containerList = useSelector(selectContainer);
  const dispatch = useDispatch();

  const SortableItem = SortableElement(({ text }) => (
    <li className='list-none'>
      <div className="mx-2 my-1 flex px-2 py-1 justify-between border rounded-md">
        <p>{text}</p>
      </div>
    </li>
  ))

  const SortableList = SortableContainer(({ container }) => {
    console.log(container)
    return (
      <ul>
        {container.map((c, index) => (
          <SortableItem key={index} index={index} text={c.type} />
        ))}
      </ul>
    )
  })

  const handleSortEnd = ({ oldIndex, newIndex }) => {
    dispatch(moveContainer({ currentPosition: oldIndex, newPosition: newIndex }));
  }

  return (
    <div>
      <h1 className='text-3xl font-bold px-3 mt-4 mb-2'>Editor</h1>
      <div className='grid grid-cols-2 gap-2 px-2 py-2 mb-12'>
        <Template img={faFont} type={templateTypes.TITLE}></Template>
        <Template img={faMessage} type={templateTypes.TEXT}></Template>
        <Template img={faImage} type={templateTypes.IMAGE}></Template>
        <Template img={faVideo} type={templateTypes.VIDEO}></Template>
        <Template img={faLink} type={templateTypes.LINK}></Template>
        <Template img={faBorderAll} type={templateTypes.CONTAINER}></Template>
      </div>
      <h2 className='px-3 font-bold text-2xl'>Container</h2>
      <div className="h-full">
        <SortableList container={containerList} onSortEnd={handleSortEnd}></SortableList>
      </div>
    </div>

  )
}

export default Toolbar;

function Template(props) {
  const type = props.type
  const [, drag] = useDrag(() => ({ type }));


  return (
    <div ref={drag} className="max-w-40 max-h-40 rounded-md border-2 border-grey-600 p-1">
      <FontAwesomeIcon className="w-20 h-10 mb-2" icon={props.img}/>
      <p className='text-center'>{props.type}</p>
    </div>
  )
}

