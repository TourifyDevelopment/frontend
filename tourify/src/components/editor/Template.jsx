import React from 'react'
import {useDrag} from 'react-dnd'

function Template(props) {
    const [{ isDragging }, drag] = useDrag(() => ({
        type: "Template",
        item: { id: props.id },
        collect: (monitor) => ({
            isDragging: !!monitor.isDragging(),
        }),
    }));

    return (
        <div className="max-w-40 max-h-40 rounded-2 border-2 border-grey-600 space-y-4">
            <img className="w-20" src={props.img} alt={props.type} />
            <p>{props.type}</p>
        </div>
    )
}

export default Template;