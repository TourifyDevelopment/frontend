
import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretRight } from '@fortawesome/free-solid-svg-icons';
import '../style/treeList.css';

/**
 * Component for a treelist. List in list 
 */
function TreeView(props) {

    return (
        <ul className="list-none">
            {props.children}
        </ul>
    )
}

export default TreeView;


/**
 * A heading for the list
 */
export function TreeHeading(props) {
    const [isExpanded, setIsExpanded] = useState(false);

    const expandedHeading = "flex space-x-2 heading";
    const expandedList = "nested active";

    return (
        <li>
            <span className="flex space-x-2 heading items-center" onClick={() => setIsExpanded(!isExpanded)}>
                <FontAwesomeIcon icon={faCaretRight} className={isExpanded ? 'heading-down mr-2' : 'mr-2'} />
                {props.heading}
            </span>
            <ul className={isExpanded ? 'active list-none pl-5' : 'nested list-none '}>
                {props.children}
            </ul>
        </li>

    )
}