import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEllipsis } from '@fortawesome/free-solid-svg-icons';
import img from '../assets/images/logo-text.png';
import { Link } from 'react-router-dom';

function Project(props) {
    const project = props.project;
    const title = project.projectName;

    console.log(project._id)
    return (
        <Link to={"/view/" + project._id}>
            <div className='w-1/2 p-4'>
                <img className=" rounded-md" src={img} alt="images" />
                <div className="flex justify-between items-center mt-1">
                    <p className='text-[16px] pl-2'>{title}</p>
                    <div className="rounded-md w-fit color-black  px-3 text-xl">
                        <FontAwesomeIcon icon={faEllipsis} />
                    </div>
                </div>
            </div>
        </Link>
    )

}

export default Project;