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
    const [resources, setResources] = useState([])
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
            getContainersOfPage(params.pageId).then(res => {
                if (res) {
                    setContainers(res.data)
                    res.data.forEach(element => {
                        getResourcesOfContainer(element.resourceId).then(res2 => {
                            if(res2) {
                                setResources([...resources, res2.data])
                                console.log(res2.data)
                            }
                        })
                    });
                }
            })
        } else {
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

            <div className="h-screen border-l border-grey-600 p-12 flex flex-wrap">
                {
                    resources.map(r => {
                        console.log(r)
                        switch (r.type) {
                            case 'Text':
                                return <Text value={r.blob} style={r.style}></Text>
                            case 'Heading':
                                return <Title value={r.blob} style={r.style}></Title>
                            case 'Image':
                                return <Image value={r.blob} style={r.style}></Image>
                            case 'Video':
                                return <Video value={r.blob} style={r.style}></Video>
                            default:
                                break;
                        }
                    })
                }
            </div>
        </div>
    )
}

export default View
