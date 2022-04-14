import React, { Component, useEffect, useState } from 'react'
import { getContainersOfPage, getPagesOfProject, getResourcesOfContainer } from '../auth';
import { Link } from 'react-router-dom';
import { useParams, useNavigate } from 'react-router-dom';
import Title from '../components/editor/templates_rendered/Title';
import Text from '../components/editor/templates_rendered/Text';
import Image from '../components/editor/templates_rendered/Image';
import Video from '../components/editor/templates_rendered/Video';

function View() {
    // Renders a project.
    const [pages, setPages] = useState([]);
    const [containers, setContainers] = useState([]);
    const [resources, setResources] = useState([]);
    const params = useParams();
    const navigate = useNavigate();

    if (!params.projectId) {
        navigate('/projects');
    }

    useEffect(() => {
        // Loads all neccessary pages, containers and resources
        getPagesOfProject(params.projectId).then(res => {
            if (res) {
                setPages(res.data)
            }
        })

        if (params.pageId) {
            setResources([])
            setContainers([])
            getContainersOfPage(params.pageId).then(res => {
                console.log(res)
                if (res.status === 200) {
                    setContainers(res.data)
                    res.data.forEach(element => {
                        getResourcesOfContainer(element.resourceId).then(res2 => {
                            if(res2.status === 200) {
                                
                                setResources(resources => [...resources, res2.data]);
                            }
                        })
                    });
                }
            })
        } else {
            setResources([])
            setContainers([])
        }
    }, [params.projectId, params.pageId])

    return (
        <div className='flex'>
            <div className="flex flex-col items-center py-12 px-6 space-y-8">
                {
                    pages.map((p) => <>
                        <Link to={"/view/" + params.projectId + '/' + p._id}>
                            <div>{p.displayName}</div>
                        </Link>
                    </>)
                }
            </div>

            <div className="h-screen border-l border-grey-600 p-12">
                {
                    resources.map(r => {
                        //console.log(resources)
                        console.log(r);
                        if (r.type === 'Text') {
                            return <Text key={r._id} value={r.blob} style={r.style}></Text>
                        } else if (r.type === 'Header') {
                            return <Title key={r._id} value={r.blob} style={r.style}></Title>
                        } else if (r.type === 'Image') {
                            return <Image key={r._id} value={r.blob} style={r.style}></Image>
                        } else if (r.type === 'Video') {
                            return <Video key={r._id} value={r.blob} style={r.style}></Video>
                        }
                    })
                }
            </div>
        </div>
    )
}

export default View
