import React from 'react'

function FileUploader(props) {

    console.log(props.showModal);

    const handleImageChange = (evt) => {
        const input = evt.target
        var file = input.files[0];
        var reader = new FileReader();
        reader.addEventListener('load', (e) => {
            const blob = new Blob([new Uint8Array(e.target.result)], { type: file.type });

            // Convert to base64
            let reader1 = new FileReader();
            reader1.readAsDataURL(blob);

            reader1.onload = function () {
                let image1 = new Image();
                image1.src = reader1.result;
                document.body.appendChild(image1);
                let imageBase64 = reader1.result;
                // Do something with the string
                //TODO: 
            };

        });
        reader.readAsArrayBuffer(file);
    }

    return (
        <>
            {props.showModal ? <Modal /> : <></>}
        </>
    )
}

function Modal(props) {


    return (
        <div className='fixed left-0 right-0 z-50 w-[80vh] h-[70vh] rounded-lg flex flex-col p-2 bg-white'>
            <div className='flex-1 border border-dashed border-black '>
                
            </div>
            <input className='' type="file" inputaccept='image/*' hidden/>
            <div className="flex flex-end p-2">
                <div className="secondary-btn">Cancel</div>
                <div className="primary-btn">Save</div>
            </div>
        </div>
    )

}

export default FileUploader;