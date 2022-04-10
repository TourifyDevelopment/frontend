import React, { useRef, useState } from 'react'
import { useDispatch } from 'react-redux';
import { addContainer } from '../../features/slices/containerSlice';
import { templateTypes } from '../../models/editor/templateTypes';


function FileUploader(props) {
    const [file, setFile] = useState(null)
    console.log(props)

    const handleChooseFile = (evt) => {
        //TODO

    }
    const handleSave = () => {
        props.onSave(file, props.type)   
    }

    const handleDrop = (e) => {
        prevenDefaults(e)

        const file = e.dataTransfer.files[0]
        console.log(props.type);
        if (file && file['type'].split('/')[0] === props.type.toLowerCase()) {
            let reader = new FileReader();
            reader.addEventListener('load', (evt) => {

                const blob = new Blob([new Uint8Array(evt.target.result)], { type: file.type });

                // Convert to base64
                let reader1 = new FileReader();
                reader1.readAsDataURL(blob);
                
                reader1.onload = function () {
                    if (props.type === templateTypes.VIDEO ){
                        setFile(URL.createObjectURL(blob))
                    }else {
                        setFile(reader1.result)
                    }

                };

            });
            reader.readAsArrayBuffer(file);
        }
    }

    function prevenDefaults(e) {
        e.preventDefault();
        e.stopPropagation();
    }


    return (

        <div className='fixed left-0 right-0 z-50 w-1/2 h-[60vh] mx-auto rounded-[32px] flex flex-col p-8 pb-4 bg-white drop-shadow-2xl'>
            <div className='flex justify-center items-center flex-1 border border-dashed border-black'
                onDragEnter={prevenDefaults}
                onDragOver={prevenDefaults}
                onDragLeave={prevenDefaults}
                onDrop={handleDrop}
            >
                <img src={file} />
            </div>

            <input className='' type="file" inputaccept='image/*' hidden />
            <div className="flex justify-between p-2 mt-4 items-center">
                <button className="accent-btn" onClick={handleChooseFile}>Choose file</button>

                <div className="flex justify-end ">
                    <button className="accent-btn" onClick={props.onCancel}>Cancel</button>
                    <button className="primary-btn ml-2" onClick={handleSave}>Save</button>
                </div>
            </div>
        </div>

    )
}

export default FileUploader;