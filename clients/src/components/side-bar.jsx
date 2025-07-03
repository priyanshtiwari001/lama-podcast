import {Mic, Layers, Zap, Settings, X } from 'lucide-react';
import { Link, useParams } from 'react-router';

const navItem = [
  {
    logo:  <Mic className="w-4 h-4 mr-2" />,
    text: "Add your Podcast(s)"
  },
   {
    logo:  <Layers className="w-4 h-4 mr-2" />,
    text: "Create & Repurpose"
  },
   {
    logo:  <Mic className="w-4 h-4 mr-2" />,
    text: "Podcast Widget"
  },
   {
    logo:  <Zap className="w-4 h-4 mr-2" />,
    text: "Upgrade"
  },
]

const Sidebar = ({isSideOpen,setIsSideOpen}) => {
  const {projectId}= useParams();

  return (
    <>
    <div className={`${isSideOpen ? "block w-full" : "hidden"} lg:flex w-72 h-screen bg-white shadow fixed flex-col justify-between`}>
      <div>
        {/* Logo */}
        <Link to="/projects" className="px-6 py-6 flex items-center text-purple-600 font-extrabold text-xl">
          <img src="/images/form-logo.svg" className="w-9 h-9 mr-2" alt="logo" />
          <span className='text-2xl font-bold'>Ques.</span><span className="text-3xl text-purple-700 font-extralight">AI</span>
        </Link>

        {/* Navigation */}
        <nav className="mt-4">
          <ul className="space-y-3">
          {
            navItem.map((item,i) => <li key={i} className={`${i== 0 && " bg-purple-100 text-purple-700 "} w-64 font-semibold text-gray-600 hover:bg-purple-50  px-4 py-2.5 rounded-r-xl flex items-center hover:text-purple-600`}>{item.logo} {item.text}</li>)
          }    
          </ul>
        </nav>

        <hr className="my-6 mx-6 border-t border-gray-200" />

        <div className="text-gray-500 px-6 py-2 flex mt-96 items-center hover:text-purple-600">
          <Settings className="w-4 h-4 mr-2 " /> Help
        </div>
      </div>
      {/* User Profile */}
      <div className="flex items-center gap-2 px-6 py-2 border-t border-gray-200">
        <img src="/icons/avatar.png" alt="User" className="w-12 h-12 rounded-2xl" />
        <Link to={`/projects/${projectId}/podcast/userprofile`}>
          <div className="text-sm font-medium">priyanshu</div>
          <div className="text-xs text-gray-500">priyanshu@gmail.com</div>
        </Link>
        <button className="ml-auto text-purple-600 hover:text-purple-800">&lt;&lt;</button>
      </div>
        <button onClick={()=>setIsSideOpen(false)} className='lg:hidden absolute right-5 top-4  text-black border-1 px-1 py-1 rounded-full bg-white border-gray-300 hover:bg-red-100 shadow cursor-pointer'>
          <X/>
        </button>
    </div>
   
     </>
  );
};

export default Sidebar;