import React from 'react';

function Text(props) {
    return (
            <p style={props.style}>{props.value}</p>
    )
}

export default Text;