import React from 'react'
import { templateTypes } from '../../models/editor/TemplateTypes'
import logo from '../../assets/images/logo.png'
import { DndContext, useDrag } from 'react-dnd'
import { useSensor } from '@dnd-kit/core'
import { SortableContext, useSortable } from '@dnd-kit/sortable'
import { PointerSensor } from '@dnd-kit/core';
import {CSS} from '@dnd-kit/utilities'
import { useSelector } from 'react-redux'
import { selectContainer } from '../../features/slices/containerSlice'

function Toolbar() {
  const containerList = useSelector(selectContainer);
  const sensors = useSensor(PointerSensor)

  const renderContainer = () => {
    console.log(containerList);
    const list =  containerList.map((container) => 

      //TODO: Check if container is Selected and then do something
      (<p className={container.isSelected ? "bg-blue" : undefined}>{container.type}</p>)
    )
    
    return list;
  }

  const handleDragEnd = () => {

  }

  return (
    <div>

      <div className='grid grid-cols-2 gap-2 px-2 py-2'>
        <Template img={logo} type={templateTypes.TITLE}></Template>
        <Template img={logo} type={templateTypes.TEXT}></Template>
        <Template img={logo} type={templateTypes.IMAGE}></Template>
        <Template img={logo} type={templateTypes.VIDEO}></Template>
        <Template img={logo} type={templateTypes.LINK}></Template>
        <Template img={logo} type={templateTypes.CONTAINER}></Template>
      </div>


      {renderContainer()}

    </div>

  )
}

export default Toolbar;

function Template(props) {
  const type = props.type
  const [, drag] = useDrag(() => ({ type }));


  return (
    <div ref={drag} className="max-w-40 max-h-40 rounded-2 border-2 border-grey-600 space-y-4">
      <img className="w-20" src={props.img} alt={props.type} />
      <p>{props.type}</p>
    </div>
  )
}

function Item(props) {
  const {attributes, listeners, setNodeRef, transform, transition} = useSortable({id: props.key})

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
  };

  return (
    <div ref={setNodeRef} style={style} {...attributes} {...listeners}>{props.text}</div>
  )
}