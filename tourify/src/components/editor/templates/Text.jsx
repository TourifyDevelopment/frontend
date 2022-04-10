import React from 'react'
import { getTextProperties } from '../../../models/editor/textProperties'
import EditorInput from '../EditorInput'

//Template of a text. Adds a text that is editable
function Text(props) {
    const style = getTextProperties();

    return (
        <div style={style} className='flex flex-col'>
            <EditorInput value={"HIER TEXT EINFUEGEN"}/>
        </div>
    )
}

export default Text