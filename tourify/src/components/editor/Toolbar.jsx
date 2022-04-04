import React from 'react'
import { TemplateTypes } from '../../models/editor/templateTypes'
import logo from '../../assets/images/logo.png'
import { useDrag } from 'react-dnd'

function Toolbar() {
  return (
    <div className='grid grid-cols-2 gap-2'>
      <Template img={logo} type={TemplateTypes.TITLE}></Template>
      <Template img={logo} type={TemplateTypes.TEXT}></Template>
      <Template img={logo} type={TemplateTypes.IMAGE}></Template>
      <Template img={logo} type={TemplateTypes.VIDEO}></Template>
      <Template img={logo} type={TemplateTypes.LINK}></Template>
      <Template img={logo} type={TemplateTypes.CONTAINER}></Template>
    </div>
  )
}

export default Toolbar;

function Template(props) {
  const type = props.type
  const [, drag] = useDrag(() => ({ type }));


  return (
    <div ref={drag} className="max-w-40 max-h-40 rounded-2 border-2 border-grey-600 space-y-4">
      <img className="w-20" src={props.img} alt={props.type} />
      <p>{props.type}</p>
    </div>
  )
}