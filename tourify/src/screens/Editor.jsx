import React, { useState } from 'react'

import { useDroppable } from '@dnd-kit/core';
import { useDraggable } from '@dnd-kit/core';
import { DndContext } from '@dnd-kit/core';

import Heading from '../components/editor/Heading'
import Image from '../components/editor/Image';

function Droppable(props) {
  const { isOver, setNodeRef } = useDroppable({
    id: 'droppable',
  });
  const style = {
    color: isOver ? 'green' : undefined,
  };


  return (
    <div ref={setNodeRef} style={style} className="main">
      {props.children}
    </div>
  );
}

function Draggable(props) {
  const { attributes, listeners, setNodeRef, transform } = useDraggable({
    id: props.id,
  });
  const style = transform ? {
    transform: `translate3d(${transform.x}px, ${transform.y}px, 0)`,
  } : undefined;


  return (
    <button ref={setNodeRef} style={style} {...listeners} {...attributes}>
      {props.children}
    </button>
  );
}

function Editor() {
  const [isDropped, setIsDropped] = useState(false);
  let counter = 0;
  /*const draggableMarkup = (
    <Draggable id="test"><Heading /></Draggable>
  );*/

  return (
    <DndContext onDragEnd={handleDragEnd}>
      <div className='flex h-screen w-full'>
        <div className='left h-full'>
          {/*Templates*/}
          <Draggable id="test2"><Heading /></Draggable>
          <Draggable id="test3"><Image /></Draggable>
        </div>
        <Droppable>
          {isDropped ? <Draggable id={counter}>TestComp für verschiebung</Draggable> : 'Drop here'}
        </Droppable>
      </div>
    </DndContext>
  );

  function handleDragEnd(event) {
    if (event.over && event.over.id === 'droppable') {
      console.log(event)
      setIsDropped(true);
      counter++;
    }
  }
}

export default Editor;
