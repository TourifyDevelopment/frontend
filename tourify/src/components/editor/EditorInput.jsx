import React, { useState, useEffect, useRef } from 'react'
import TextareaAutosize from 'react-textarea-autosize';

function EditorInput(props) {
    const [value, setValue] = useState(props.value);
    const [isEditing, setIsEditing] = useState(true);
    const textareaRef = useRef(null);

    useEffect(() => {
        textareaRef.current.select();
        
    }, [])


    const handleBlur = (evt) => {
        if (evt.key === 'Escape') {
            setIsEditing(false);
            evt.preventDefault();
            evt.stopPropagation();
        }
    }

    return (

        isEditing ?
            (<TextareaAutosize ref={textareaRef} autoFocus type="text"
                value={value} onChange={(evt) => setValue(evt.target.value)}
                onKeyDown={handleBlur}
                onBlur={() => setIsEditing(false)}
                placeholder={props.placeholder}
                className="focus-visible:outline-4 focus-visible:outline-dashed 
                focus-visible:rounded-md outline-gray-300 px-3 resize-none h-min
                whitespace-pre-line"
            />)
            :
            <p onDoubleClick={() => setIsEditing(true)} className="px-3 h-fit whitespace-pre-line">{value}</p>
    )
}

EditorInput.defaultProps = {
    value: "TEXT",
    onChange: () => { },
    placeholder: "Hier schreiben..."
}

export default EditorInput;