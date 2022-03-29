import React from 'react'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { faEllipsis } from '@fortawesome/free-solid-svg-icons';
import img from '../assets/images/logo-text.png';

function Project(props) {
    const project = props.project;
    const title = project.title;
    
    return (
        <div className='w-1/2 p-4'>
            <img className=" rounded-md" src={img} alt="images" />
            <div className="flex justify-between items-center mt-1">
                <p className='text-[16px] pl-2'>{title}</p>
                <div className="rounded-md w-fit color-black  px-3 text-xl">
                    <FontAwesomeIcon icon={faEllipsis} />   
                                 
                </div>
            </div>
        </div>
    )
    
}

export default Project;