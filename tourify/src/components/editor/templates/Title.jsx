import React from 'react'
import { getTitleProperties } from '../../../models/editor/titleProperties';
import EditorInput from '../EditorInput';

function Title(props) {

    const style = getTitleProperties();
    
    return (
        <div style={style} className='flex flex-col'>
            <EditorInput value={"HIER TITEL EINFUEGEN"}/>
        </div>
    )
}

export default Title;