import React from 'react'
<<<<<<< HEAD
import { useDispatch } from 'react-redux';
import { getTitleProperties } from '../../../models/editor/titleProperties';
import { select } from '../../../features/slices/containerSlice';
=======
import { getTitleProperties } from '../../../models/editor/titleProperties';
>>>>>>> master
import EditorInput from '../EditorInput';

function Title(props) {
    const dispatch = useDispatch();
    const style = getTitleProperties();
    
    const handleClick = () => {
        
        console.log(props.id)
        dispatch(select(props.id))
    }

    return (
        <div style={style} className='flex flex-col' onClick={handleClick}>
            <EditorInput value={"HIER TITEL EINFUEGEN"}/>
        </div>
    )
}

export default Title;