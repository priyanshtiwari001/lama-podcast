import React, { useState } from 'react'
import CardLists from '@/components/card-lists'
import CreateNewProjectButton from './create-project-btn'
import { useNavigate } from 'react-router'

const ProjectsView = ({projects,modalOpen}) => {
  const navigate = useNavigate();
   const handlenavigate = (i)=>{
    const selectedProject = projects[i];
    if(selectedProject && selectedProject._id){
      navigate(`/projects/${selectedProject._id}/podcast`) 
    }
}
  return (
      <div className="min-h-screen bg-white  text-gray-800 font-sans px-12 pt-16">
      <div className='flex flex-col gap-12'>
         <div className='flex justify-between'>
           <h1 className='text-purple-600 font-semibold text-2xl lg:text-4xl '>Projects</h1>
           <CreateNewProjectButton modalOpen={modalOpen}/>
         </div>
         <div className='flex flex-col md:flex-row flex-wrap gap-4'>
{
              projects.map((card,i)=> <div onClick={()=>handlenavigate(i)} key={i} >
                <CardLists card={card} index={i}  />
              </div>)
            }
         </div>
            
      </div>

      </div>
  )
}

export default ProjectsView
