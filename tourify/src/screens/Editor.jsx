import React from 'react'
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import { TemplateTypes } from '../components/editor/TemplateTypes';
import Toolbar from '../components/editor/Toolbar';
import Sheet from '../components/editor/Sheet';
import { TransformWrapper, TransformComponent } from 'react-zoom-pan-pinch';

function Editor() {

  return (
    <DndProvider backend={HTML5Backend}>
      <div className="flex w-full h-screen">
        <Toolbar />
        <div className='flex-1 flex justify-center items-center bg-gray-200'>
          <Sheet />
        </div>
      </div>



    </DndProvider>
  )
}

export default Editor;