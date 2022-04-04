import React from 'react'
import { useDrop } from 'react-dnd';
import Title from './templates/Title';
import Text from './templates/Text'
import Container from './templates/Container'
import { templateTypes, templateTypeList } from '../../models/editor/TemplateTypes';
import { useDispatch, useSelector } from 'react-redux';
import { addContainer, selectContainer } from '../../features/slices/containerSlice';


function Sheet(props) {
    const containerList = useSelector(selectContainer);
    const dispatch = useDispatch()
    let counter = 0;

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
        dispatch(addContainer({type, id: counter}))
        counter++;
        
    }

    const renderContainer = (type, key) => { 
        console.log(key)
        switch (type) {
            case templateTypes.TITLE:
                return <Title id={key}></Title>
            case templateTypes.TEXT:
                return <Text id={key}></Text>
            case templateTypes.CONTAINER:
                return <Container id={key}></Container>
        }
    } 

    const renderContainers = () => {

        const list = containerList.map((c) => {
            counter++;
            return renderContainer(c.type, c.id)
        })
        return list;
    }

    return (
        <div ref={drop} className="w-4/5 h-4/5 bg-white flex flex-col overflow-y-scroll">
            {renderContainers()}
        </div>
    )
}

export default Sheet;