import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { selectSelected } from '../../features/slices/containerSlice';
import { getPropertiesStructure } from '../../models/editor/Properties';
import { getTitleProperties } from '../../models/editor/TitleProperties';
import '../../style/animations.css';
import TreeView, { TreeHeading } from '../TreeView';

function Properties() {
    const dispatch = useDispatch();
    const container = useSelector(selectSelected);
    console.log(container)
    let properties = {};
    if (container !== undefined){
        properties = container.props;    
    }
    const structure = getPropertiesStructure();
    const layoutProps = {};
    const fontProps = {};
    const containerProps = {};

    Object.keys(structure.layout).forEach((p) => {
        if (p in properties) {
            layoutProps[p] = properties[p];
        }
    })

    Object.keys(structure.container).forEach((p) => {
        if (p in properties) {
            containerProps[p] = properties[p];
        }
    })

    Object.keys(structure.font).forEach((p) => {
        if (p in properties) {
            fontProps[p] = properties[p];
        }
    })

    const [isVisible, setIsVisible] = useState(true);
    const [propsState, setPropsState] = useState({ ...layoutProps, ...containerProps, ...fontProps })

    const handlePropChange = (prop, value) => {
        const obj = {};
        obj[prop] = value;
        setPropsState(prevProps => {

            const p = {
                ...prevProps,
                ...obj
            }

          
            return p;
        })

    }

    /**
     * Renders all props of a template/container
     * @param {object of props} props 
     * @param {Title of the category of the props} heading 
     * @returns the rendered props
     */
    const renderProps = (props, heading) => {
        //Componenten werden hinzugefügt
        const comps = [];
        for (const prop in props) {
            //Value
            const value = props[prop];
            //Type
            const type = structure[heading][prop];
            switch (type) {
                case 'input':
                    comps.push(renderInput(prop))
                    break;
                case 'radio':
                    comps.push(renderRadio(prop))
                    break;
                case 'color':
                    comps.push(renderColor(prop))
                    break;
            }
        }
        return comps;
    }

    //renders a prop with a input value
    const renderInput = (prop) => {
        const value = propsState[prop]
       
        return (
            <div key={prop} className='flex justify-between px-2 item-center py-1'>
                <p>{prop}</p>
                <input className="w-14" maxLength={3} type="number" value={propsState[prop]} onChange={(evt) => handlePropChange(prop, evt.target.value)} />
            </div>
        )
    }

    //renders a prop with fixed options
    const renderRadio = (prop) => {
        const value = propsState[prop]

        return (
            <div className='flex justify-between px-2 item-center py-1'>
                <p>{prop}</p>
                <input className="w-20 text-right" type="text" value={propsState[prop]} onChange={(evt) => handlePropChange(prop, evt.target.value)} />
            </div>
        )
    }

    //renders a prop with a color picker 
    const renderColor = (prop) => {
        const value = propsState[prop]

        return (
            <div className='flex justify-between px-2 item-center py-1'>
                <p>{prop}</p>
                <input className="w-10 rounded-full" type="color" value={propsState[prop]} onChange={(evt) => handlePropChange(prop, evt.target.value)} />
            </div>
        )
    }

    return (
        <div className="w-72 p-2" >
            <TreeView>
                {
                    Object.keys(fontProps).length !== 0 ?
                        <TreeHeading heading="Font">
                            {renderProps(fontProps, 'font')}
                        </TreeHeading>
                        :
                        <></>
                }
                {
                    Object.keys(containerProps).length !== 0 ?
                        <TreeHeading heading="Container">
                            {renderProps(containerProps, 'container')}
                        </TreeHeading>
                        :
                        <></>
                }
                {
                    Object.keys(layoutProps).length !== 0 ?
                        <TreeHeading heading="Layout">
                            {renderProps(layoutProps, 'layout')}
                        </TreeHeading>
                        :
                        <></>
                }
            </TreeView>
        </div>
    )
}



export default Properties