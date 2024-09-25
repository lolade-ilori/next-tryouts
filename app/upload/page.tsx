'use client'
import { CldUploadWidget, CldImage } from 'next-cloudinary'
import React, { useState } from 'react'


interface CloudinaryResult {
    public_id: string
}

const UploadPage = () => {
    const [publicId, setPublicId] = useState('')

  return (
    <>
        {
            publicId && 
                <CldImage src={publicId} width={270} height={150} alt='An image'/>
        }
        <CldUploadWidget 
            uploadPreset='g3ozwhjf'
            options={{
                sources: ['local'],
                multiple: false,
                maxFiles: 5,
                styles: {
                    
                }
            }}
            onSuccess={(result, widget) => {
                // Showing uploaded images
                if (result.event !== "success") return;
                const info = result.info as CloudinaryResult
                setPublicId(info.public_id)
            }}
        >
            {({ open }) => {
                return (
                <button className='btn btn-primary' onClick={() => open()}>
                    Upload an Image
                </button>
                );
            }}
        </CldUploadWidget>
    </>
  )
}

export default UploadPage