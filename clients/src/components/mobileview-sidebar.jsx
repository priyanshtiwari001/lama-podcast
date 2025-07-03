import { Menu } from 'lucide-react';

const MobileSidebarToggle = ({ setIsSideOpen,isSideOpen }) => (
  <button onClick={()=>setIsSideOpen(!isSideOpen)} className="lg:hidden border-2 px-3 py-3 rounded-full border-gray-300 shadow cursor-pointer">
    <Menu className="w-6 h-6 text-gray-700"  />
  </button>
);


export default MobileSidebarToggle