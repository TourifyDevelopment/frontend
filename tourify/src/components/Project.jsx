import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEllipsis } from '@fortawesome/free-solid-svg-icons';
import img from '../assets/images/logo-text.png';
import { Link } from 'react-router-dom';

function Project(props) {
    const project = props.project;
    const title = project.projectName;
    const user = props.user;
    let createdByYouText;

    if (user && user.username == project.owner) {
        createdByYouText = 'Dieses Projekt hast du erstellt'
    } else {
        createdByYouText = 'Dieses Projekt wurde nicht von dir erstellt'
    }

    return (
        <Link to={"/editor/" + project._id + '/' + }>
            <div className='w-1/2 p-4'>
                {/*<img className=" rounded-md" src={img} alt="images" />*/}
                <img className=" rounded-md" src={project.mapBlob} alt="images" />
                <div className="flex justify-between items-center mt-1">
                    <p className='text-[32px] pl-2'>{title}</p>
                    <div className="rounded-md w-fit color-black  px-3 text-xl">
                        <FontAwesomeIcon icon={faEllipsis} />
                    </div>
                </div>
                <p className='text-[16px] pl-2'>{project.description}</p>
                <p className='text-[16px] pl-2'>{createdByYouText}</p>
            </div>
        </Link>
    )

}

export default Project;