import React from 'react'
import {useDrag} from 'react-dnd'

function Text(props) {

    const [{ isDragging }, drag] = useDrag(() => ({
        type: "Text",
        item: { id: props.id },
        collect: (monitor) => ({
            isDragging: !!monitor.isDragging(),
        }),
    }));

    return (
        <div>Text</div>
    )
}

export default Text