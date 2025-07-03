import { PlusCircle } from 'lucide-react'; 
export default function CreateNewProjectButton({modalOpen}) {
  return (
    <button onClick={()=>modalOpen(true)} className="inline-flex items-center ml-3 gap-2 px-4 py-4  lg:px-6 lg:py-3 bg-slate-900 text-white rounded-md hover:bg-slate-800 transition-all cursor-pointer">
      <PlusCircle className="w-5 h-5" />
     <p className='hidden sm:block'> Create New Project</p>
    </button>
  );
}

