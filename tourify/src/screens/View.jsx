import React, { Component, useEffect, useState } from 'react'
import { getPagesOfProject } from '../auth';
import { Link } from 'react-router-dom';
import { useParams, useNavigate } from 'react-router-dom';

function View() {
    const [pages, setPages] = useState([]);
    const params = useParams();
    const navigate = useNavigate();

    if (!params.projectId) {
        navigate('/projects');
    }

    useEffect(() => {
        getPagesOfProject(params.projectId).then(res => {
            console.log(res);
            if (res) {
                setPages(res.data)
            }
        })
    }, [])

    return (
        <div>
            <div id="left">
                {
                    pages.map((p) => <>
                        <Link to="">
                            <div>{p.displayName}</div>
                        </Link>
                    </>)
                }
            </div>
            <div id="right">

            </div>
        </div>
    )
}

export default View
