import React, { useState } from 'react'
import { templateTypes } from '../../models/editor/templateTypes'
import logo from '../../assets/images/logo.png'
import { DndContext, useDrag } from 'react-dnd'
import { useSensor } from '@dnd-kit/core'
import { SortableContext, useSortable, verticalListSortingStrategy, arrayMove } from '@dnd-kit/sortable'
import { PointerSensor } from '@dnd-kit/core';
import { CSS } from '@dnd-kit/utilities'
import { useSelector } from 'react-redux'
import { selectContainer } from '../../features/slices/containerSlice'

function Toolbar() {
  const containerList = useSelector(selectContainer);

  const sensors = useSensor(PointerSensor);
  const [items, setItems] = useState(containerList.map(c => c.id))

  const renderContainer = () => {
    console.log(containerList);
    const list = containerList.map((container) =>

      //TODO: Check if container is Selected and then do something
      (<Item key={container.id} id={container.id} text={container.type}></Item>)
    )

    return list;
  }

  const handleDragEnd = (event) => {
    const { active, over } = event;

    if (active.id !== over.id) {
      setItems((items) => {
        const oldIndex = items.indexOf(active.id);
        const newIndex = items.indexOf(over.id);

        return arrayMove(items, oldIndex, newIndex);
      });
    }
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
      {/** 
       * 
       * <DndContext
        sensors={sensors}
        onDragEnd={handleDragEnd}
      >
        <SortableContext items={items} strategy={verticalListSortingStrategy}>
          {renderContainer()}
        </SortableContext>

      </DndContext>
      */}

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
  const { attributes, listeners, setNodeRef, transform, transition } = useSortable({ id: props.key })

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
  };

  return (
    <div ref={setNodeRef} style={style} {...attributes} {...listeners}>{props.text}</div>
  )
}