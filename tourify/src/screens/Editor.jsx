import React from 'react'
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import Toolbar from '../components/editor/Toolbar';
import Sheet from '../components/editor/Sheet';
import Properties from '../components/editor/Properties';
import { Provider } from 'react-redux'
import store from '../features/store';

function Editor() {

  return (
    <Provider store={store}>
      <DndProvider backend={HTML5Backend}>
        <div className="flex w-full h-screen overflow-hidden">
          <Toolbar />
          <div className='flex-1 flex justify-center items-center bg-gray-200'>
            <Sheet />
          </div>
          <Properties />
        </div>
      </DndProvider>
    </Provider>

  )
}

export default Editor;