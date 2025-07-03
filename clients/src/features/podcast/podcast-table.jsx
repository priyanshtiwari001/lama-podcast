import axiosInstance from '@/utils/axios-instance';
import { formatDate } from '@/utils/helper';
import React from 'react';
import { useNavigate } from 'react-router';


const PodcastTable = ({podcastLists}) => {
    const navigate = useNavigate();
  const deletePodcast = (async (podcastId) => {
    try {
      const response = await axiosInstance.delete(
        `/projects/${podcastId}/podcast`
      );
      if (response.status === 200) {
          alert("podcast is deleted");
          navigate(0)
        }
    } catch (error) {
      console.log("Error fetching podcasts:", error);

      if (error.response) {
        const status = error.response.status;

        if (status === 400) {
          alert("Bad request. Please check your input.");
        } else if (status === 401) {
          alert("Unauthorized. Please login again.");
        } else if (status === 404) {
          alert("No podcasts found for this project.");
        } else if (status === 500) {
          alert("Server error. Please try again later.");
        } else {
          alert("Something went wrong. Please try again.");
        }
      } else {
        alert("Network error. Please check your internet connection.");
      }
    }
  })



  const handleDelete = async(i)=>{
    const selectedPodcast = podcastLists[i];
    if(selectedPodcast && selectedPodcast._id){
      await deletePodcast(selectedPodcast._id);
    }
  }

  const handleNavigate = async(i)=>{
    const selectedPodcast = podcastLists[i];
    if(selectedPodcast && selectedPodcast._id){
        navigate(`${selectedPodcast._id}/transcript`)
     
    }
  }
  return (
    <div className="bg-white rounded-xl shadow p-6 overflow-x-auto py-10">
      <h2 className="text-xl font-semibold text-gray-900 mb-4">Your Files</h2>

      <div className="min-w-full inline-block align-middle">
        <table className="min-w-full text-sm text-gray-800 border-separate border-spacing-y-2">
          <thead className="">
            <tr className="bg-gray-100 text-left text-gray-600 rounded-lg">
              <th className="py-3 px-4 font-medium rounded-l-lg">No.</th>
              <th className="py-3 px-4 font-medium">Name</th>
              <th className="py-3 px-4 font-medium">Upload Date & Time</th>
              <th className="py-3 px-4 font-medium rounded-r-lg">Action</th>
            </tr>
          </thead>
          <tbody>
            {podcastLists.map((row, i) => (
              <tr
                key={row._id}
                className="bg-white shadow-sm rounded-lg"
              >
                <td className="py-3 px-4 rounded-l-lg">{i + 1}</td>
                <td className="py-3 px-4 font-medium">{row.podcastname}</td>
                <td className="py-3 px-4">{formatDate(row.createdAt)}</td>
                <td className="py-3 px-4 rounded-r-lg">
                  <div className="flex gap-2 flex-wrap ">
                    <button className="px-4 py-1 border rounded-md text-sm text-gray-700 hover:bg-gray-100 transition cursor-pointer" onClick={()=>handleNavigate(i)}>
                      View
                    </button>
                    <button onClick={()=>handleDelete(i)} className="px-4 py-1 border border-red-200 rounded-md text-sm text-red-500 hover:bg-red-50 transition cursor-pointer">
                      Delete
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default PodcastTable;
