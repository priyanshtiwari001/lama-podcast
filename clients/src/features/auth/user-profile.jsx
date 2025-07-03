import { ArrowLeft } from 'lucide-react';
import React from 'react';
import { Link, useParams } from 'react-router';

const UserProfile = () => {
  const { projectId } = useParams();

  return (
    <div className="min-h-screen bg-gray-50 text-gray-800 p-6">
      <div className="flex justify-between items-start mb-6">
        <Link to={`/projects/${projectId}/podcast`} className="flex items-center gap-2 text-3xl font-semibold">
          <ArrowLeft className="w-6 h-6 cursor-pointer" />
          <span className="text-2xl">Account Setting</span>
        </Link>
      </div>


      <div className="flex flex-col lg:flex-row items-center lg:items-center p-6 gap-7">
        <img
          src="/images/profile.png"
          alt="User"
          className="w-32 h-32 sm:w-40 sm:h-40 rounded-full object-cover"
        />

        <div className="flex flex-col  w-full gap-6 sm:flex-row sm:gap-10">
          <div className="flex flex-col w-full sm:w-1/2">
            <label className="font-bold mb-2">Username</label>
            <input
              disabled
              value="priyanshu"
              type="text"
              className="px-3 border-2 border-gray-400 w-full h-10 rounded-md disabled:bg-gray-100 disabled:cursor-not-allowed"
            />
          </div>
          <div className="flex flex-col w-full sm:w-1/2">
            <label className="font-bold mb-2">Email</label>
            <input
              disabled
              value="priyanshu@gmail.com"
              type="text"
              className="px-3 border-2 border-gray-400 w-full h-10 rounded-md disabled:bg-gray-100 disabled:cursor-not-allowed"
            />
          </div>
        </div>
      </div>

      <div className="flex items-center gap-2 text-3xl font-semibold ml-4 sm:ml-10 mt-6 sm:mt-8">
        <span className="text-2xl">Subscriptions</span>
      </div>

      <div className="flex justify-center items-center bg-gradient-to-r from-white to-purple-200 border border-purple-700 max-w-4xl mx-auto h-20 mt-6 rounded-xl px-4 text-center">
        <p className="text-purple-900 text-base sm:text-lg">
          Oops! You don't have any active plans.{" "}
          <span className="font-bold">Upgrade now!</span>
        </p>
      </div>
    </div>
  );
};

export default UserProfile;
