import React, { useState } from 'react'
import { useDrop } from 'react-dnd';
import Title from './templates/Title';
import Text from './templates/Text'
import Container from './templates/Container'
import { TemplateTypes, TemplateTypeList } from '../../models/editor/templateTypes';


function Sheet(props) {
    const [containerList, setContainerList] = useState([]);

    const [{ isOver }, drop] = useDrop(
        () => ({
            accept: TemplateTypeList,
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
        containerList.push(type);
        setContainerList(containerList);
    }

    const renderContainer = (type, key) => { 
        switch (type) {
            case TemplateTypes.TITLE:
                return (<div key={key}><Title></Title></div>)
            case TemplateTypes.TEXT:
                return <div key={key}><Text></Text></div>;
            case TemplateTypes.CONTAINER:
                return <div key={key}><Container></Container></div>;
        }
    } 

    const renderContainers = () => {
        let list;
        let counter = 0;
        list = containerList.map((c) => {
            counter++;
            return renderContainer(c, counter)
        })
        return list;
    }

    return (
        <div ref={drop} className="w-3/5 h-4/5 bg-white flex flex-col">
            {renderContainers()}
        </div>
    )
}

export default Sheet;