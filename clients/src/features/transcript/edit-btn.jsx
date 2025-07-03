import React from 'react'

const EditButton = ({setIsEdit,isEdit}) => {
  return (
     <button onClick={()=>setIsEdit(!isEdit)} className="cursor-pointer px-2 sm:px-6 sm:py-2 bg-slate-900 text-white rounded-md hover:bg-slate-800">
        Edit
      </button>
  )
}

export default EditButton
