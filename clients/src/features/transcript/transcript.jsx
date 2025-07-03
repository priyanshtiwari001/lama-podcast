import React, { useCallback, useEffect, useState } from "react";
import BackToPodcast from "./back-to-podcast";
import axiosInstance from "@/utils/axios-instance";
import { useParams } from "react-router";

const Transcript = () => {
  const [transcript, setTranscript] = useState("");
  const [isEditing, setIsEditing] = useState(false);
  const [transcriptId, setTranscriptId] = useState(null);
  const [showSavedMessage, setShowSavedMessage] = useState(false);
  const [loading, setLoading] = useState(true); 
  const { projectId, podcastId } = useParams();

  const getTranscript = useCallback(async () => {
    try {
      const response = await axiosInstance.get(
        `projects/${projectId}/podcast/${podcastId}`
      );
      if (response.status === 200) {
        const content = response.data.data[0].content;
        const id = response.data.data[0]._id;
        setTranscriptId(id);
        const localCopy = localStorage.getItem(`transcript-${id}`);
        setTranscript(localCopy || content);
        localStorage.setItem(`transcript-${id}`, localCopy || content);
      }
    } catch (error) {
      console.error("Fetch error:", error);
    } finally {
      setLoading(false); 
    }
  }, [projectId, podcastId]);

  useEffect(() => {
    getTranscript();
  }, [getTranscript]);

  const saveTranscript = () => {
    if (!transcriptId) return;

    axiosInstance
      .patch(`projects/${projectId}/podcast/${transcriptId}`, {
        podcastId,
        content: transcript,
      })
      .then(() => {
        localStorage.setItem(`transcript-${transcriptId}`, transcript);
        setIsEditing(false);
        setShowSavedMessage(true);
        setTimeout(() => setShowSavedMessage(false), 2000);
      })
      .catch((error) => {
        alert("Data is not saved. Error: " + error);
      });
  };

  const handleChange = (e) => {
    const value = e.target.value;
    setTranscript(value);
  };

  return (
    <div className="min-h-screen bg-gray-50 text-gray-800 p-6">
      <BackToPodcast
        onSave={saveTranscript}
        isEdit={isEditing}
        setIsEditing={setIsEditing}
      />

      <div className="bg-white rounded-lg shadow p-6 mb-8">
        <div className="flex justify-between items-center mb-4">
          <h4 className="text-purple-600 sm:text-xl font-semibold">Speaker</h4>
        </div>

        {loading ? (
          <div className="flex justify-center items-center h-32">
            <div className="w-8 h-8 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
          </div>
        ) : isEditing ? (
          <>
            <textarea
              value={transcript}
              onChange={handleChange}
              className="w-full h-60 border border-gray-300 rounded p-3 text-sm font-medium text-gray-700 resize-none focus:outline-none focus:ring focus:ring-blue-300"
            />
            {transcript.length > 300 && (
              <p className="text-sm px-2 font-poppins text-red-400">
                Max 300 characters allowed
              </p>
            )}
          </>
        ) : (
          <p className="text-gray-700 whitespace-pre-wrap text-sm leading-relaxed">
            {transcript}
          </p>
        )}

        {showSavedMessage && (
          <div className="mt-4 text-green-600 text-sm font-medium">
            Transcript saved successfully.
          </div>
        )}
      </div>
    </div>
  );
};

export default Transcript;
