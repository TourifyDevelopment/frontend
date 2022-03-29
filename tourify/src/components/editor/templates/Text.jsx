import React from 'react'
import { getTextProperties } from '../../../models/editor/TextProperties'
import EditorInput from '../EditorInput'

function Text(props) {

    const style = getTextProperties();

    return (
        <div style={style} className='flex flex-col'>
            <EditorInput value={"HIER TEXT EINFUEGEN"}/>
        </div>
        
        
    )
}

export default Text