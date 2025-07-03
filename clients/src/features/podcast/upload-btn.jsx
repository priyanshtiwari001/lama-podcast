import React from 'react'

const UploadButton = ({modalOpen}) => {
  return (
    <button onClick={()=>modalOpen(true)} className='"bg-white sm:ml-10 cursor-pointer rounded-xl shadow p-6 overflow-x-auto py-10'>
      <div>
        <img src="/images/upload-btn.png" alt="upload-button" className='object-cover w-full sm:w-3/4 mx-auto' />
      </div>
    </button>
  )
}

export default UploadButton
