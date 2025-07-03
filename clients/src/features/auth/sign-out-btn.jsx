import { LogOut } from "lucide-react";
import React, { useState } from "react";
import { useNavigate } from "react-router";

const SignOutButton = () => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleLogout = async () => {
    setLoading(true)
   try { 
       setTimeout(()=>{
         localStorage.removeItem("token");
         setLoading(false);
        navigate("/login");
       },2000)
    } catch (error) {
      console.error('A problem occurred with your fetch operation: ', error);
    } 
  };

  return (
    <button onClick={handleLogout} className="border-2 px-3 py-3 rounded-full bg-white border-gray-300 hover:bg-red-100 shadow cursor-pointer">
       <LogOut className={`${loading && "animate-bounce"} w-6 h-6 cursor-pointer text-red-600`} />
    </button>
  );
};

export default SignOutButton;
