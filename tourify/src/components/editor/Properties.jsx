import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { editProps, selectSelected } from '../../features/slices/containerSlice';
import { getPropertiesStructure } from '../../models/editor/properties';
import { getTitleProperties } from '../../models/editor/titleProperties';
import '../../style/animations.css';
import TreeView, { TreeHeading } from '../TreeView';

/**
 * Renders the sidebar of the editor screen. On a click of a container,
 * the properties of that container should get visible. 
 * CANNOT CHANGE PROPERTIES YET
 */
function Properties() {
    const dispatch = useDispatch();
    const container = useSelector(selectSelected);
    let properties = {};
    if (container !== undefined) {
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

    const [propsState, setPropsState] = useState({ ...layoutProps, ...containerProps, ...fontProps })

    /**
     * Gets fired when a prop gets changed.
     * Changes the props of the container in the redux store
     */
    const handlePropChange = (prop, value) => {
        const obj = {};
        obj[prop] = value.toString() + 'px';
        console.log(value);
        const props = {...properties, ...obj}
        console.log(props);
        //properties[prop] = value

        dispatch(editProps({ id: container.id, props}))
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
    //NOT IMPLEMENTED YET
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
            <h2 className='text-2xl font-bold mb-2'>Properties</h2>
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