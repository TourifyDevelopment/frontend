import React, { Component, useEffect, useState } from 'react'
import { getContainersOfPage, getPagesOfProject } from '../auth';
import { Link } from 'react-router-dom';
import { useParams, useNavigate } from 'react-router-dom';

function View() {
    const [pages, setPages] = useState([]);
    const [containers, setContainers] = useState([]);
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

        if (params.pageId) {
            getContainersOfPage(params.pageId).then(res => {
                console.log(res.data);
                if (res) {
                    setContainers(res.data)
                }
                console.log(containers);
            })
        } else {
            setContainers([])
        }
    }, [params.projectId, params.pageId])

    return (
        <div class="flex">
            <div class="flex-1">
                <Link to={"/view/" + params.projectId}>
                    <div>
                        MAIN
                    </div>
                </Link>
                {
                    pages.map((p) => <>
                        <Link to={"/view/" + params.projectId + '/' + p._id}>
                            <div>{p.displayName}</div>
                        </Link>
                    </>)
                }
            </div>
            <div>
                {
                    containers.map(p => <>
                        <div>{p.name}</div>
                    </>)
                }
            </div>
        </div>
    )
}

export default View
