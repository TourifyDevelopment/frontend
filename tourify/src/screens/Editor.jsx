import React, { useState } from 'react'

import { useDroppable } from '@dnd-kit/core';
import { useDraggable } from '@dnd-kit/core';
import { DndContext } from '@dnd-kit/core';

import Heading from '../components/editor/Heading'

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
    id: 'draggable',
  });
  const style = transform ? {
    transform: `translate3d(${transform.x}px, ${transform.y}px, 0)`,
  } : undefined;


  return (
    <button ref={setNodeRef} style={style} {...listeners} {...attributes}>
      <Heading></Heading>
    </button>
  );
}

function Editor() {
  const [isDropped, setIsDropped] = useState(false);
  const draggableMarkup = (
    <Draggable>Drag me</Draggable>
  );

  return (
    <DndContext onDragEnd={handleDragEnd}>
      <div className='holder'>
        <div className='left'>
          {draggableMarkup}
        </div>
        <Droppable>
          {isDropped ? draggableMarkup : 'Drop here'}
        </Droppable>
      </div>
    </DndContext>
  );

  function handleDragEnd(event) {
    if (event.over && event.over.id === 'droppable') {
      setIsDropped(true);
    }
  }
}

export default Editor;
