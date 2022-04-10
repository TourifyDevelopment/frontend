import React, { useState } from 'react'
import { useDrop } from 'react-dnd';
import Title from './templates/Title';
import Text from './templates/Text'
import Container from './templates/Container'
import Video from './templates/Video'
import FileUploader from './FileUploader';
import { templateTypes, templateTypeList } from '../../models/editor/templateTypes';
import { useDispatch, useSelector } from 'react-redux';
import { addContainer, selectContainer } from '../../features/slices/containerSlice';
import Image from './templates/Image';
import Link from './templates/Link';
import {useParams} from 'react-router-dom'

/**
 * Component where template/container can get dropped.
 */
function Sheet(props) {
    const params = useParams();
    console.log(params);
    const [showUploader, setShowUploader] = useState(false);
    const containerList = useSelector(selectContainer);
    const dispatch = useDispatch()
    let counter = 0;
    const [fileUploaderType, setFileUploaderType] = useState('')
    

    const [{ isOver }, drop] = useDrop(
        () => ({
            accept: templateTypeList,
            drop(_item, monitor) {
                const type = monitor.getItemType();

                console.log("dropped");
                addTemplateToContainerList(type);

            },
            collect: (monitor) => ({
                isOver: monitor.isOver(),
                isOverCurrent: monitor.isOver({ shallow: true })
            })
        }),
    );

    const addTemplateToContainerList = (type) => {
        if (type === templateTypes.IMAGE || type === templateTypes.VIDEO) {
            //FileUploader gets visible
            console.log(type);
            setFileUploaderType(type);
            setShowUploader(true);
        } else {
            dispatch(addContainer({ type, data: '', id: counter, pageId: params.projectId }))
        }

        counter++;
    }

    const renderContainer = (type, key) => {
        console.log(key)
        switch (type) {
            case templateTypes.TITLE:
                return <Title id={key} key={key}></Title>
            case templateTypes.TEXT:
                return <Text id={key} key={key}></Text>
            case templateTypes.CONTAINER:
                return <Container id={key} key={key}></Container>
            case templateTypes.IMAGE:
                return <Image id={key} key={key}></Image>
            case templateTypes.VIDEO:
                return <Video id={key} key={key}></Video>
            case templateTypes.LINK:
                return <Link id={key} key={key}></Link>
        }
    }

    const renderContainers = () => {
        const list = containerList.map((c) => {
            counter++;
            return renderContainer(c.type, c.id)
        })
        return list;
    }

    const handleCancelFileUploader = () => {
        setShowUploader(false);
    }

    const handleSaveFileUploader = (file, type) => {
        setShowUploader(false);

        if (file) {
            dispatch(addContainer({ type, data: file, id: counter }))
            console.log(type);
        }
    }

    return (
        <>
            <div ref={drop} className="w-4/5 h-4/5 bg-white flex flex-col overflow-y-auto">
                {renderContainers()}
            </div>
            {showUploader ?
                <FileUploader
                    onCancel={handleCancelFileUploader}
                    onSave={handleSaveFileUploader}
                    type={fileUploaderType}></FileUploader>
                : <></>
            }

        </>

    )
}

export default Sheet;
