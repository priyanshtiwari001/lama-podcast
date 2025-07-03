import React, { useCallback, useEffect, useState } from "react";

import CreateProject from "./create-project";
import ProjectsView from "./projects-view";
import NavBar from "@/components/project-header";
import ProjectModal from "./project-modal";
import axiosInstance from "@/utils/axios-instance";
import { useNavigate } from "react-router";
import { toast } from "sonner";
import { LoaderCircle } from "lucide-react";

const ProjectDashboard = () => {
  const [projects, setProjects] = useState([]);
  const [projectInput, setProjectInput] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  const createProject = async (e) => {
    e.preventDefault();
    const trimmed = projectInput.trim();
    if (trimmed === "") {
      setIsOpen(true);
    }
    const projectSet = {
      projectname: trimmed,
    };
    try {
      const response = await axiosInstance.post("/projects/create", projectSet);
      if (response.status === 201) {
        setProjectInput("");
        setIsOpen(false);
        await getProjects()
         alert("Project is created");
      }
    } catch (error) {
      console.log("EEROR", error);
      if (error.response.status === 409) {
        alert("Duplicate record found. Try new name!");
        setProjectInput("");
      } else if (error.response.status === 400) {
        alert("Something went wrong! Try after sometime.");
        setProjectInput("");
        setIsOpen(false);
      }
    }
  };

  const getProjects = useCallback(async () => {
    setLoading(true);
    try {
      const response = await axiosInstance.get("projects/get");
      const resData = response.data;
      if (response.status === 200) {
        setProjects(resData.data);
      }
    } catch (error) {
      console.log(error);
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
      } 
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    getProjects();
  }, [getProjects]);

  return (
    <>
      <div className="min-h-screen bg-white text-gray-800 font-sans p-7">
        <NavBar />
        {/* Main Content */}
        {loading ? (
          <div className="flex justify-center items-center h-64">
            <LoaderCircle  className="w-20 h-20 mt-52 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"/>
          </div>
        ) : projects.length === 0 ? (
          <CreateProject modalOpen={setIsOpen} />
        ) : (
          <ProjectsView projects={projects} modalOpen={setIsOpen} />
        )}
      </div>
      <ProjectModal
       loading={loading}
        setIsOpen={setIsOpen}
        isOpen={isOpen}
        createProject={createProject}
        projectInput={projectInput}
        setProjectInput={setProjectInput}
      />
    </>
  );
};

export default ProjectDashboard;
