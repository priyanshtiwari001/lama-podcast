import { useCallback, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";
import axiosInstance from "@/utils/axios-instance";

import UploadOptions from "./upload-options";
import PodcastTable from "./podcast-table";
import UploadButton from "./upload-btn";
import PodcastModal from "./podcast-modal";
import { LoaderCircle } from "lucide-react";

const AddPodcast = () => {
  const [loading, setLoading] = useState(true);
  const [podcastLists, setPodcastLists] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [podcastInput, setPodcastInput] = useState("");
  const [transcriptInput, setTranscriptInput] = useState("");
  const { projectId } = useParams();

  const getPodcasts = useCallback(async () => {
    setLoading(true);
    try {
      const response = await axiosInstance.get(
        `/projects/${projectId}/podcast`
      );
      if (response.status === 200) {
        setPodcastLists(response.data.data);
      }
    } catch (error) {
      console.error("Error fetching podcasts:", error);
      if (error.response) {
        const { status } = error.response;
        const messages = {
          400: "Bad request. Please check your input.",
          401: "Unauthorized. Please login again.",
          404: "No podcasts found for this project.",
          500: "Server error. Please try again later.",
        };
        alert(messages[status] || "Something went wrong. Please try again.");
      } 
    } finally {
      setLoading(false);
    }
  }, [projectId]);

  useEffect(() => {
    getPodcasts();
  }, []);

  const createPodcast = async (e) => {
    e.preventDefault();
    const podcastname = podcastInput.trim();
    const content = transcriptInput.trim();

    if (!podcastname || !content) {
      setIsModalOpen(true);
      return;
    }

    setLoading(true);
    try {
      const response = await axiosInstance.post(
        `/projects/${projectId}/podcast`,
        { podcastname, content }
      );
      if (response.status === 201) {
        alert("Podcast is created");
        setPodcastInput("");
        setTranscriptInput("");
        setIsModalOpen(false);
         await getPodcasts(); 
      }
    } catch (error) {
      console.error("Error creating podcast:", error);
      if (error.response?.status === 409) {
        alert("Duplicate record found. Try a new name!");
      } else {
        alert("Something went wrong! Try after sometime.");
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <h1 className="text-2xl font-semibold mb-6">Add Podcast</h1>
      <UploadOptions modalOpen={setIsModalOpen} />

      <div className="mt-10">
        {loading ? (
          <div className="flex justify-center items-center h-64">
            <LoaderCircle  className="w-20 h-20  border-4 border-blue-500 border-t-transparent rounded-full animate-spin"/>
          </div>
        ) : podcastLists.length === 0 ? (
          <UploadButton modalOpen={setIsModalOpen} />
        ) : (
          <PodcastTable getPodcasts={getPodcasts} podcastLists={podcastLists} />
        )}
      </div>

      <PodcastModal
        loading={loading}
        setTranscriptInput={setTranscriptInput}
        setPodcastInput={setPodcastInput}
        podcastInput={podcastInput}
        transcriptInput={transcriptInput}
        modalOpen={setIsModalOpen}
        isOpen={isModalOpen}
        onUpload={createPodcast}
      />
    </>
  );
};

export default AddPodcast;
