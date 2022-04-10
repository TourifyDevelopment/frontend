import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getTitleProperties } from '../../../models/editor/titleProperties';
import { select, selectContainerById } from '../../../features/slices/containerSlice';
import EditorInput from '../EditorInput';

function Title(props) {
    const dispatch = useDispatch();
    const container = useSelector(state => selectContainerById(state, props.id))
    const style = container.props;
    
    const handleClick = () => {
        dispatch(select(props.id))
    }

    return (
        <div style={style} className='flex flex-col' onClick={handleClick}>
            <EditorInput value={"HIER TITEL EINFUEGEN"}/>
        </div>
    )
}

export default Title;